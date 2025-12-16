import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <h2 style={{ padding: 20 }}>Loading...</h2>;
  }

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <div
        style={{
          display: "flex",
          gap: 30,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: 250, objectFit: "contain" }}
        />

        <div>
          <h1>{product.title}</h1>
          <h3>₹ {product.price}</h3>
          <p>{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
