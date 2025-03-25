const express = require("express");
const router = express.Router();

// @route   GET /api/users
// @desc    Получить всех пользователей (пока просто тест)
router.get("/", (req, res) => {
  res.json({ message: "Список пользователя" });
});

module.exports = router;
