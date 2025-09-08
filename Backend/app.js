import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.js";
import itemRoute from "./route/Items.js";
import cartRoute from "./route/cart.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// ✅ Connect to database
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (e) {
        console.log("Error in DB connection", e.message);
    }
};

// ✅ Middleware
app.use(cors({
    origin: "https://68be8e65c8221d6158f1e307--sourabhshop.netlify.app", // replace with your frontend URL
    credentials: true, // if you want to send cookies/auth headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/user", userRoute);
app.use("/api/items", itemRoute);
app.use("/api/cart", cartRoute);

// ✅ Health check
app.get("/", (req, res) => {
    res.send("API is running....");
});

// ✅ Start server
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});
