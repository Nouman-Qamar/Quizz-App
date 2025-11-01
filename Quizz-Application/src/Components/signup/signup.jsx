import  { useState } from "react";
import "./signup.css";
import { Link} from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === "test@example.com" && password === "12345") {
      setMessage("✅ Signup Successful!");
    } else {
      setMessage("❌ Invalid Email or Password!");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="sign-box">
        <h2 className="sign-title">Welcome Back 👋</h2>
        <p className="sign-subtitle">Please login to continue</p>

        <form onSubmit={handleSubmit} className="sign-form">
          <label>Name</label>
          <input
            type="email"
            placeholder="Enter your name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Signup</button>
        </form>

        {message && <p className="sign-message">{message}</p>}

        <p className="sign-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
 