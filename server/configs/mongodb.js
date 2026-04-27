import mongoose from 'mongoose';

//Connect to the mongodb database

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"))

    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
};

export default connectDB