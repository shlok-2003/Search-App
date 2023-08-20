import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./configs/database.js";

// Importing routes
import eventRoute from "./routes/event.js";

const app = express();

// Load env variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json())

// routes
app.use("/events", eventRoute);

app.listen(PORT, (err) => {
    if(err) {
        console.error(err);
    }

    console.log(`Server is running on port ${PORT}`);
})

dbConnect();