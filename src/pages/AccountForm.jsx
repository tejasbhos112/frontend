import React, { useState } from "react";
import axios from "axios";

const AccountForm = () => {
  const [email, setEmail] = useState("user@gmail.com"); // default
  const [password, setPassword] = useState("user@45");  // default
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/admin/login", {
        email,
        password,
      });

      setToken(res.data.token);
      localStorage.setItem("adminToken", res.data.token);
      setError("");
      alert("Admin login successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {token && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Logged in. Token saved to localStorage.
        </p>
      )}
    </div>
  );
};

export default AccountForm;