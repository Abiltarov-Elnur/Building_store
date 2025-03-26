import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка загрузки товаров:", error));
  }, []);

  return (
    <div>
      <h1>🛒 Товары</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>
              {product.name} - {product.price}₽
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
