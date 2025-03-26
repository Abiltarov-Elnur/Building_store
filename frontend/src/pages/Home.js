import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>🏠 Главная</h1>
      <p>Добро пожаловать в наш магазин!</p>
      <Link to="/products">Перейти к товарам</Link>
    </div>
  );
}

export default Home;
