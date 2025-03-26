import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Добро пожаловать в магазин!</h1>
      <p>Нажмите кнопку ниже, чтобы посмотреть товары.</p>
      <Link to="/products">
        <button>Перейти к товарам</button>
      </Link>
    </div>
  );
};

export default Home;
