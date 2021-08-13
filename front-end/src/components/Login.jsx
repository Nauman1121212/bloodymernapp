import React from "react";
import { useState } from "react";
import { loginUser } from "../Services/Api";
import { useHistory } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState({ message: "" });

  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("User: ", user);
    const userData = await loginUser(user);
    console.log("UserData from backend: ", userData);
    if (userData && userData.data._id) {
      console.log("User from backend: ", userData);
      setError({ message: "" });
      props.setAdmin(userData.data);
      history.push("/");
    } else {
      console.log("Error: ", userData.data.message);
      setError(userData.data);
    }
  };

  return (
    <div className="signup">
      <h2>Login</h2>
      <h3>{error && error.message}</h3>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <button className="signup-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
