import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// Load env variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json())

app.use('/search', )

app.listen(PORT, (err) => {
    if(err) {
        console.error(err);
    }

    console.log(`Server is running on port ${PORT}`);
})