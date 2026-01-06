import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Invalid email format");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="signup-page">
      {/* Left colored section */}
      <div className="signup-left">
        <h1>Join Premier College</h1>
        <p>Start your online learning journey today.</p>
      </div>

      {/* Right form section */}
      <div className="signup-right">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Create Account</button>
          <span className="sign-span">Already have an account?</span>
          <span onClick={() => navigate("/login")}>Log in</span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
