import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ VALID CREDENTIALS
    if (username === "Ragul" && password === "12345") {
      login("local_login_token_123"); // token simulate
      navigate("/"); // redirect to Home
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin} style={styles.btn}>
        Login
      </button>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#e8f5e9", // light green
  },
  input: {
    padding: "10px",
    margin: "8px 0",
    width: "220px",
    fontSize: "16px",
  },
  btn: {
    marginTop: "10px",
    padding: "10px 25px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#66bb6a",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};
