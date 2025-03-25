const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Product = require("./models/Product");
const db = require("./config/db");

// Подключаем переменные окружения
dotenv.config();

// Пример пользователей
const users = [
  { name: "Иван Иванов", email: "ivan@example.com", password: "123456" },
  { name: "Анна Смирнова", email: "anna@example.com", password: "password" },
];

// Пример товаров
const products = [
  { name: "Молоток", price: 500, description: "Стальной молоток", category: "Инструменты" },
  { name: "Гвозди", price: 100, description: "Набор гвоздей 100шт", category: "Стройматериалы" },
];

// Функция для добавления данных в базу
const seedDatabase = async () => {
  try {
    // Подключаем базу
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Удаляем старые данные
    await User.deleteMany();
    await Product.deleteMany();

    // Записываем новые данные
    await User.insertMany(users);
    await Product.insertMany(products);

    console.log("✅ База данных заполнена!");
    process.exit();
  } catch (error) {
    console.error("❌ Ошибка заполнения базы:", error);
    process.exit(1);
  }
};

// Запуск скрипта
seedDatabase();
