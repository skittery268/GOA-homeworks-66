const Group = require("../models/group.model");
const catchAsync = require("../utils/catchAsync");

const createGroup = catchAsync(async (req, res, next) => {
    const { title } = req.body;

    const group = await Group.create({
        title,
        admin: req.userId,
        members: [req.userId]
    });

    res.status(201).json({
        status: "success",
        message: "Group created successfully!",
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
        return next(new AppError("Unauthorized!", 401));
    }

    await Group.findByIdAndDelete(id);

    res.status(200).json({
        status: "success",
        message: "Group deleted successfully!"
    });
})

const joinGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const group = await Group.findById(id);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (group.members.includes(req.userId)) {
        return next(new AppError("User already a member of the group!", 400));
    }

    group.members.push(req.userId);
    await group.save();

    res.status(200).json({
        status: "success",
        message: "User joined the group successfully!",
        data: {
            group
        }
    });
})

module.exports = { createGroup, deleteGroup, joinGroup };