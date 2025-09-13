const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", (req, res) => res.redirect("/products"));
router.get("/products", productController.getProducts);
router.post("/products/add", productController.createProduct);
router.get("/products/delete/:id", productController.deleteProduct);

module.exports = router;