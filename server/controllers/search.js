const Search = require("../models/search");

exports.getSearch = async(req, res) => {
    try {
        const { key } = req.params
        const search = await Search.find({ title: key })

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

