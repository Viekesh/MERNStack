import mongoose from "mongoose";



const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        img: {
            type: String,
        },
        imgTitle: {
            type: String,
        },
        imgSmall: {
            type: String,
        },
        trailer: {
            type: String,
        },
        video: {
            type: String,
        },
        year: {
            type: String,
        },
        limit: {
            type: Number,
        },
        genre: {
            type: String,
        },
        isSeries: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports("netflixmovie", movieSchema);