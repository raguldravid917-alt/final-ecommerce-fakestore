import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, increase, decrease, removeItem } = useContext(CartContext);

  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.map(i => (
        <div className="card" key={i.id} style={{ display:"flex", gap:15 }}>
          <img src={i.image} height="80" />
          <div style={{ flex:1 }}>
            <h4>{i.title}</h4>
            <p>₹ {i.price}</p>
            <button onClick={()=>decrease(i.id)}>-</button>
            {i.qty}
            <button onClick={()=>increase(i.id)}>+</button>
          </div>
          <button onClick={()=>removeItem(i.id)}>❌</button>
        </div>
      ))}

      <h2>Total: ₹ {total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
