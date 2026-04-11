const Group = require("../models/group.model");
const AppError = require("../utils/appError");
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

const getUserGroups = catchAsync(async (req, res, next) => {
    const groups = await Group.find({ members: req.userId });

    res.status(200).json({
        status: "success",
        data: {
            groups
        }
    });
})

const getAllGroups = catchAsync(async (req, res, next) => {
    const groups = await Group.find();

    res.status(200).json({
        status: "success",
        data: {
            groups
        }
    });
})

const joinGroup = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const group = await Group.findById(id);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    const isMember = group.members.some((memberId) => memberId.toString() === req.userId.toString());

    if (isMember) {
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

module.exports = { createGroup, deleteGroup, joinGroup, getUserGroups, getAllGroups };