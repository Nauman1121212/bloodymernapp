import React from "react";
import { useState } from "react";
import { addUser } from "./../Services/Api";
import { useHistory } from "react-router-dom";

const initialUser = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("User: ", user);
    await addUser(user);
    history.push("/");
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <input
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

export default SignUp;
