import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to database: ${connection.connection.host}`.cyan);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

export default connectToDB;
