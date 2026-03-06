const Group = require("../models/group.model");

const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find();

        res.status(200).json({
            status: "success",
            arrayLength: groups.length,
            data: groups
        });
    } catch (err) {
        console.log(err);
    }
}

const addGroup = async (req, res) => {
    try {
        const { number, type, mentor } = req.body;

        const newGroup = await Group.create({ number, type, mentor });

        res.status(201).json({
            status: "success",
            data: newGroup
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteGroup = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedGroup = await Group.findByIdAndDelete(id);

        if (!deletedGroup) {
            return res.status(404).json({
                status: "fail",
                message: "Group not found",
            });
        }

        res.status(204).json({
            status: "success",
            message: "Group deleted successfully",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllGroups, addGroup, deleteGroup };