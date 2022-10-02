import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRouter from "./routes/AuthRoute.js";



const app = express();

app.use(express.json());

dotenv.config();

app.listen(process.env.PORT, (req, res) => {
    console.log(`server started on port no. ${process.env.PORT}`);
});

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("server connected to database")
}).catch((error) => {
    console.log(error);
});


app.use("/api/auth", AuthRouter);