const Product = require("../models/product.model");

// [GET]
exports.getProducts = async (req, res) => {
    try {
        let products = await Product.find().sort({ ProductStoreCode: 1 });
        res.render("products", { products });
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};

// [POST]
exports.createProduct = async (req, res) => {
    try {
        const { ProductCode, ProductName, ProductDate, ProductOriginPrice, Quantity, ProductStoreCode } = req.body;

        const product = new Product({
            ProductCode,
            ProductName,
            ProductDate: new Date(ProductDate),
            ProductOriginPrice,
            Quantity,
            ProductStoreCode
        });

        await product.save();
        res.redirect("/products");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};

// [GET]
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect("/products");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};
