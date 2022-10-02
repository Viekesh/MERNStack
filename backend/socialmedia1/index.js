import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoute from "./routes/postRoute.js"



const app = express();

app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(process.env.PORT, (req, res) => {
    console.log(`server started on port no ${process.env.PORT} and connected to database`);
})).catch((error) => {
    console.log(error);
});

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.use("/post", postRoute);