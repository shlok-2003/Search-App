import mongoose from "mongoose";

const events = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 200,
        },
    }
)

export default mongoose.model("events", events);