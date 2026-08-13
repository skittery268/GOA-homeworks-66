const Group = require("../models/group.model");
const Message = require("../models/message.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildSearchFilter = (search) => {
    if (!search || !search.trim()) return {};

    return { title: { $regex: escapeRegex(search.trim()), $options: "i" } };
}

const createGroup = catchAsync(async (req, res, next) => {
    const { title, description } = req.body;

    const group = await Group.create({
        title,
        description,
        admin: req.userId,
        members: [req.userId]
    });

    req.io.emit("groupCreated", group);

    res.status(201).json({
        status: "success",
        message: "Group created successfully!",
        data: {
            group
        }
    })
})

const updateGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const group = await Group.findById(id);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (group.admin.toString() !== req.userId) {
        return next(new AppError("Only the group admin can update this group!", 403));
    }

    if (title !== undefined) group.title = title;
    if (description !== undefined) group.description = description;

    await group.save();

    req.io.emit("groupUpdated", group);

    res.status(200).json({
        status: "success",
        message: "Group updated successfully!",
        data: {
            group
        }
    })
})

const deleteGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const group = await Group.findById(id);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (group.admin.toString() !== req.userId) {
        return next(new AppError("Only the group admin can delete this group!", 403));
    }

    // Messages of a deleted group would stay in the database forever.
    await Message.deleteMany({ group: id });
    await Group.findByIdAndDelete(id);

    req.io.emit("groupDeleted", { groupId: id });

    res.status(200).json({
        status: "success",
        message: "Group deleted successfully!"
    });
})

const getUserGroups = catchAsync(async (req, res, next) => {
    const { search } = req.query;

    const groups = await Group.find({ members: req.userId, ...buildSearchFilter(search) }).sort("-updatedAt");

    res.status(200).json({
        status: "success",
        results: groups.length,
        data: {
            groups
        }
    });
})

const getAllGroups = catchAsync(async (req, res, next) => {
    const { search } = req.query;

    const groups = await Group.find(buildSearchFilter(search)).sort("-createdAt");

    res.status(200).json({
        status: "success",
        results: groups.length,
        data: {
            groups
        }
    });
})

const getGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const group = await Group.findById(id)
        .populate("members", "name email")
        .populate("admin", "name email");

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (!group.hasMember(req.userId)) {
        return next(new AppError("You are not a member of this group!", 403));
    }

    res.status(200).json({
        status: "success",
        data: {
            group
        }
    });
})

const joinGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const group = await Group.findById(id);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (!group.public) {
        return next(new AppError("This group is private!", 403));
    }

    if (group.hasMember(req.userId)) {
        return next(new AppError("You are already a member of this group!", 400));
    }

    group.members.push(req.userId);
    await group.save();

    req.io.emit("groupUpdated", group);

    res.status(200).json({
        status: "success",
        message: "User joined the group successfully!",
        data: {
            group
        }
    });
})

const leaveGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const group = await Group.findById(id);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (!group.hasMember(req.userId)) {
        return next(new AppError("You are not a member of this group!", 400));
    }

    if (group.admin.toString() === req.userId) {
        return next(new AppError("The admin can not leave the group, delete it instead!", 400));
    }

    group.members = group.members.filter((memberId) => memberId.toString() !== req.userId);
    await group.save();

    req.io.emit("groupUpdated", group);
    req.io.to(id.toString()).emit("memberLeft", { groupId: id, userId: req.userId });

    res.status(200).json({
        status: "success",
        message: "You left the group successfully!",
        data: {
            group
        }
    });
})

module.exports = { createGroup, updateGroup, deleteGroup, joinGroup, leaveGroup, getUserGroups, getAllGroups, getGroup };
