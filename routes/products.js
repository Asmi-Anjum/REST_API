import express from "express";
import { getAllProducts, getAllProductsTesting , getAllAppleProducts} from "../controllers/products.js";

const router = express.Router();


router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/appleProducts").get(getAllAppleProducts);
export default router;
