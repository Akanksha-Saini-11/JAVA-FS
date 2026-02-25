import React, { useState } from "react";
import "./App.css";

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|[a-z]{2,3})$/;

    if (!emailPattern.test(email)) {
      newErrors.email =
        "Email must contain @ and end with .com, .in or valid country code";
    }

    
    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must start with capital letter, include one number, one special character and minimum 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ✅");
      setEmail("");
      setPassword("");
      setErrors({});
      
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Client-Side Validation</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidationForm;