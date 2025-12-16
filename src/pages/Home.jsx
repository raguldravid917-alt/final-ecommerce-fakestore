import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div className="container">
      <h1>Products</h1>

      <input
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
      />

      <select onChange={e => setCategory(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 20 }}>
        {products
          .filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase()) &&
            (category === "all" || p.category === category)
          )
          .map(p => (
            <div className="card" key={p.id}>
              <img src={p.image} height="120" />
              <h4>{p.title}</h4>
              <p>₹ {p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button><br />
              <button
  style={{ marginTop: "8px", background: "#81c784" }}
  onClick={() => navigate(`/product/${p.id}`)}
>
  View
</button>

            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
