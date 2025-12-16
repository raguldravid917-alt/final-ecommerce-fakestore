import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { logout } = useContext(AuthContext);

  const count = cart.reduce((a,c)=>a+c.qty,0);

  return (
    <nav style={{ padding:15, display:"flex", justifyContent:"space-between" }}>
      <h2>FakeStore</h2>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart ({count})</Link> |{" "}
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
