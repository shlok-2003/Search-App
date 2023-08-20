import express from "express";
import { getSearch, getAll } from "../controllers/search.js"

const router = express.Router();

router.get('/search', getSearch);
router.get('/', getAll)

export default router;