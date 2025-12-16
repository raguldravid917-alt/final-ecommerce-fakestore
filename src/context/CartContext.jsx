import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const found = cart.find((i) => i.id === product.id);

    if (found) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increase = (id) =>
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );

  const decrease = (id) =>
    setCart(
      cart.map((i) =>
        i.id === id && i.qty > 1
          ? { ...i, qty: i.qty - 1 }
          : i
      )
    );

  const removeItem = (id) =>
    setCart(cart.filter((i) => i.id !== id));

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};