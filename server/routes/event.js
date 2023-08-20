import express from "express";
import { getSearch, getAll } from "../controllers/search.js"

const router = express.Router();

router.get('/:key', getSearch);
router.get('/', getAll)

export default router;