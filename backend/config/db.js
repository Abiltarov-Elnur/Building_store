const mysql = require("mysql2");
require("dotenv").config(); // Загружаем переменные окружения из .env

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Хост (обычно localhost)
  user: process.env.DB_USER, // Имя пользователя MySQL
  password: process.env.DB_PASSWORD, // Пароль от MySQL
  database: process.env.DB_NAME, // Название базы данных
});

db.connect((err) => {
  if (err) {
    console.error("❌ Ошибка подключения к MySQL:", err);
    return;
  }
  console.log("✅ Подключено к MySQL");
});

module.exports = db;
