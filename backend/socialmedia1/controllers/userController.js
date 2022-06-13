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


// Follow User

export const followUser = async (req, res, next) => {
    const id = req.params.id;

    // "id" : This is the user who should be followed.

    const { currentUserId } = req.body;

    // "currentUserId" : This is the user who wants to follow

    if (currentUserId === id) {

        // "currentUserId === id" : If someone wants to follow him or herself then we restrict
        // him to doing so because no one can follows him or herself

        res.status(403).json("Action forbidden");
    } else {
        try {
            const followUser = await UserModel.findById(id);

            // "followUser" : This is the user who we wants to follow.

            const followingUser = await UserModel.findById(currentUserId);

            // "followingUser" : This is the user who wants to following this ("followUser") user

            if (!followUser.followers.includes(currentUserId)) {

                // The condition we use in the if statement means the user we want to follow
                // ofcourse we'll have some followers
                // So it will have some id's in its followers array so we are checking if our
                // current userid is already present in the followers ("followers") of the
                // follow user("followUser") then we should not perform any more functionality
                // because he or she is perform already following him but in the case if it is
                // not true then do the following statements

                await followUser.updateOne({ $push: { followers: currentUserId } });

                // The above code means that if the current user is not in the forward of our
                // desired user then inside his or her followers array just push our current
                // user id but in parallel with updating his followers array we should also have
                // to update the following array of our current user

                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json("User followed!");

            } else {
                res.status(403).json("User is Already followed by you");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


// Unfollow User

// UnFollow a User
export const unFollowUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;

    if (currentUserId === id) {
        res.status(403).json("Action forbidden");
    } else {
        try {
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);

            if (followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { followers: currentUserId } });
                await followingUser.updateOne({ $pull: { following: id } });
                res.status(200).json("User Unfollowed!");
            } else {
                res.status(403).json("User is not followed by you");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};