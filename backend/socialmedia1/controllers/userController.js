import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";



// Get User

export const getUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await userModel.findById(id);

        if (user) {
            const { password, ...otherDetails } = user._doc;
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("Password Not Matched");
        }
    } catch (error) {
        res.status(500).json("User Not Found");
    }
};


// Update User

export const updateUser = async (req, res, next) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus, password } = req.body;

    if (id === currentUserId && currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied!, You can only update your own profile");
    }
};


// Delete User

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus } = req.body;

    if (currentUserId === id || currentUserAdminStatus) {
        try {
            await userModel.findByIdAndDelete(id);
            res.status(200).json("User Deleted Successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied!, You can delete only your own profile");
    }
};

