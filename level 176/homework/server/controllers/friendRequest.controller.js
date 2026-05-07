const FriendRequest = require("../models/friendRequest.model");
const Friendship = require("../models/friendShip.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const sendFriendRequest = catchAsync(async (req, res, next) => {
    const { to } = req.params;

    const friendship = await Friendship.findOne({
        $or: [
            { user1: req.userId, user2: to },
            { user1: to, user2: req.userId }
        ]
    });

    if(friendship) {
        return next(new AppError("User is already your friend!", 400))
    }

    const isFriendRequest = await FriendRequest.findOne({
        $or: [
            { from: req.userId, to },
            { from: to, to: req.userId }
        ]
    });

    if(isFriendRequest) {
        return next(new AppError("Friend request already exsists!", 400));
    }

    const friendRequest = await FriendRequest.create({from: req.userId, to});

    req.io.to(to).emit("newFriendRequest", friendRequest);

    res.status(201).json({
        status: "success",
        message: "Friend request succesfully created!",
        data: {
            friendRequest
        }
    });
});

const cancelFriendRequest = catchAsync(async (req, res, next) => {
    const { reqId } = req.params;

    const friendRequest = await FriendRequest.findById(reqId);

    if(!friendRequest) {
        return next(new AppError("Friend request cant be find", 404));
    }

    if(friendRequest.from.toString() !== req.userId.toString()){
        return next(new AppError("You cant cancel this friend request!", 401));
    }

    req.io.to(friendRequest.to.toString()).emit("friendRequestCanceled", friendRequest._id);

    await FriendRequest.findByIdAndDelete(reqId);

    res.status(200).json({
        status: "success",
        message: "Friend request succesfully canceled!"
    });
});

const rejectFriendRequest = catchAsync(async (req, res, next) => {
    const { reqId } = req.params;

    const friendRequest = await FriendRequest.findById(reqId);

    if(!friendRequest) {
        return next(new AppError("Friend request cant be find", 404));
    }

    if(friendRequest.to.toString() !== req.userId.toString()){
        return next(new AppError("You cant reject this friend request!", 401));
    }

    await FriendRequest.findByIdAndDelete(reqId);

    req.io.to(friendRequest.from.toString()).emit("friendRequestRejected", friendRequest._id);

    res.status(200).json({
        status: "success",
        message: "Friend request succesfully rejected!"
    });
});

const getFriendRequests = catchAsync(async (req, res, next) => {
    const friendRequests = await FriendRequest.find({
        $or: [
            { from: req.userId },
            { to: req.userId }
        ]
    });

    res.status(200).json({
        status: "success",
        message: "Friend requests succesfully returned!",
        data: {
            friendRequests
        }
    });
});

const acceptFriendRequest = catchAsync(async (req, res, next) => {
    const { reqId } = req.params;

    const friendRequest = await FriendRequest.findById(reqId);

    if(!friendRequest) {
        return next(new AppError("Friend request cant be find", 404));
    }

    if(friendRequest.to.toString() !== req.userId.toString()){
        return next(new AppError("You cant accept this friend request!", 401));
    }

    let friendship = await Friendship.create({user1: req.userId, user2: friendRequest.from});
    friendship = await friendship.populate("user1 user2");

    await FriendRequest.findByIdAndDelete(reqId);

    req.io.to(friendRequest.from.toString()).emit("friendRequestAccepted", { friendship, friendRequestId: friendRequest._id });

    res.status(201).json({
        status: "success",
        message: "Succesfully accepted friend request!",
        data: {
            friendship
        }
    })
});

module.exports = {sendFriendRequest, cancelFriendRequest, rejectFriendRequest, getFriendRequests, acceptFriendRequest};