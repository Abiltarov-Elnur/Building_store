const connectDB = require("./config/db");

// Подключаем базу данных
connectDB();


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;




// Middleware
app.use(cors());
app.use(express.json());

// Базовый маршрут
app.get("/", (req, res) => {
    res.send("Сервер работает!");
});

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
