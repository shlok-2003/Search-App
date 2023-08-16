const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env variables
dotenv.config();

// Connect to database
const dbConnect = () => {
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Database connected"))
        .catch((err) => {
            console.error(err);
            console.log("Database connection failed")
            process.exit(1);
        })
}

module.exports = dbConnect;
