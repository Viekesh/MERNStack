import userSchema from "../models/User.js";
import bcrypt from "bcrypt";



export const createUser = async (req, res, next) => {

    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPass = await bcrypt.hash(password, salt);

    const user = new userSchema({
        username,
        email,
        password: hashedPass,
    });

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({ user });
}

export const loginUser = async (req, res, next) => {

    const { username, password } = req.body;

    try {
        const user = await userSchema.findOne({ username: username });

        if (user) {
            const validity = await bcrypt.compare(password, user.password);
            validity ? res.status(200).json(user) : res.status(400).json("Wrong Password");
        } else {
            res.status(404).json("User Not Found");
        }
    } catch (error) {
        return res.status(500).json({ message: "Login Failed" });
    }
}