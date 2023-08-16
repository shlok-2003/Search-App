const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Search", searchSchema);