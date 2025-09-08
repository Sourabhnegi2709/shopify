


import mongoose from "mongoose";
import dotenv from "dotenv";
import Item from "./models/Item.js";
import items from "./itemsSeed.js"; // Import the data

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        await Item.deleteMany();
        await Item.insertMany(items);
        
        console.log("Items seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Error seeding data:", error.message);
        process.exit(1);
    }
};

seedDatabase();
