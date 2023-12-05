import mongoose from "mongoose";
const { Schema } = mongoose;

const DateSchema = new Schema(
    {
        potentialPartner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'PotentialPartner'
        },
        rating: {
            type: Number,
        },
        location: {
            type: String,
        },
        numberOfDates: {
            type: Number,
            default: 1,
        },
        honorableMentions: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Date", DateSchema);
