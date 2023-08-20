import events from "../models/search.js";

export const getSearch = async(req, res) => {
    try {
        const { key } = req.params

        // Create a regular expression pattern for partial matching
        const regexPattern = new RegExp(key, "i"); // "i" flag for case-insensitive matching

        const search = await events.find({ title: regexPattern });

        console.log(search);

        res.status(200).json(
            {
                success: true,
                data: search,
                message: "Search successful"
            }
        )
    }
    catch(err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


export const getAll = async(req, res) => {
    try {
        const search = await events.find()

        console.log(search);

        res.status(200).json(
            {
                success: true,
                data: search,
                message: "Search successful"
            }
        )
    }
    catch(err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}