const Friendship = require("../models/friendShip.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const removeFriend = catchAsync(async (req, res, next) => {
    const { friendshipId } = req.params;

    const friendship = await Friendship.findById(friendshipId);

    if(!friendship) {
        return next(new AppError("Friendship cant be found!", 404));
    }

    if(friendship.user1.toString() != req.userId.toString() && friendship.user2.toString() != req.userId.toString()) {
        return next(new AppError("You cant remove this friendship!", 401));
    }

    await Friendship.findByIdAndDelete(friendshipId);

    req.io.to(friendship.user1.toString()).to(friendship.user2.toString()).emit("friendshipRemoved", friendshipId);

    res.status(200).json({
        status: "success",
        message: "Friendship succesfully removed!"
    })
});

const getFriends = catchAsync(async (req, res, next) => {
    const friendships = await Friendship.find({
        $or: [
            { user1: req.userId },
            { user2: req.userId }
        ]
    }).populate("user1 user2");


    res.status(200).json({
        status: "success",
        message: "Friendships succesfully returned!",
        data: {
            friendships
        }
    })
});

module.exports = {removeFriend, getFriends};

