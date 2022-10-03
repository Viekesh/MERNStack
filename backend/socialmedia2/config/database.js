import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => console.log(`Database Connected : ${con.connection.host}`))
    .catch((error) => console.log(error));
};

export default connectDatabase;