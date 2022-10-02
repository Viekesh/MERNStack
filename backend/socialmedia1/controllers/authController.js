import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";



// Registering a new user

export const registerUser = async (req, res, next) => {
    const { firstname, lastname, username, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({ username, password: hashedPass, firstname, lastname });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Registration Failed" })
    }
};


// Login User

export const loginUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username: username });

        if (user) {
            const validity = await bcrypt.compare(password, user.password);

            validity ? res.status(200).json(user) : res.status(400).json("Wrong Password")
        } else {
            res.status(404).json({ message: "User does not exist" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Login Failed" });
    }
};