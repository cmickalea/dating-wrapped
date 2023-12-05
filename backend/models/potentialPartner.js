import mongoose from "mongoose";
const { Schema } = mongoose;

const PotentialPartnerSchema = new Schema(
    {
        rating: {
            type: Number,
        },
        location: {
            type: String,
        },
        numberOfPotentialPartners: {
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

module.exports = mongoose.model("PotentialPartner", PotentialPartnerSchema);
