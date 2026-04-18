const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

const getUser = catchAsync(async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    });
})

module.exports = { getUser };