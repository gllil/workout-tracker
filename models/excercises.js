const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excercisesSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter Type of Exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of Exercise"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})