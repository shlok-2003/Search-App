const express = require("express");
const router = express.Router();

const { getSearch } = require("../controllers/search");
app.get('/:key', getSearch);

module.exports = router;