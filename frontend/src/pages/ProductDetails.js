import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams(); // Получаем ID товара из URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Ошибка загрузки товара:", error));
  }, [id]);

  if (!product) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Цена: {product.price}₽</p>
      <p>Описание: {product.description}</p>
    </div>
  );
}

export default ProductDetails;
