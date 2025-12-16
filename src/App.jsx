import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Navbar />}

      <Routes>
  <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
  <Route
    path="/product/:id"
    element={user ? <ProductDetails /> : <Navigate to="/login" />}
  />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

    </>
  );
}

export default App;
