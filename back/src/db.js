import mongoose from "mongoose";


export const connectDB= async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/cinema-proyect");
        console.log("Database connected");
        
    } catch (error) {
        console.error("Error connecting to the database");
        console.error(error);
        
    }
}