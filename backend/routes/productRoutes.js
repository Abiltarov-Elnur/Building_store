const express = require("express");
const router = express.Router();

// @route   GET /api/products
// @desc    Получить все продукты
router.get("/", (req, res) => {
    res.json({ message: "Здесь будут товары" });
});

module.exports = router;
