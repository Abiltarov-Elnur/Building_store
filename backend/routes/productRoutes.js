const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Убедись, что у тебя есть модель

// Получить все товары
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Ошибка получения товаров:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
