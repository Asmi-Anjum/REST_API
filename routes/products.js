import express from "express";
import { getAllProducts, getAllProductsTesting , getAllAppleProducts, getAllnameProducts} from "../controllers/products.js";

const router = express.Router();


router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/appleProducts").get(getAllAppleProducts);
router.route("/nameProducts").get(getAllnameProducts);
export default router;
