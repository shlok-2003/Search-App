import events from "../models/search.js";

export const getSearch = async(req, res) => {
    try {
        const key = req.query.keyword;
        // console.log(key);
        
        const search = await events.find({ title: { $regex: key, $options: "i" } });
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