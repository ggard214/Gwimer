import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import "./index.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);

    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div id="logform">
        <div id="logtext">
          <h2 id="h2text">Sign in</h2>
          <br></br>
        </div>
        <div id="inemail">
          <label htmlFor="email" id="logemail">
            Email
          </label>
          <input
            name="email"
            id="logemailin"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div id="inpass">
          <label htmlFor="password" id="logpass">
            Password
          </label>
          <input
            name="password"
            id="logpassin"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <br></br>
          <button type="submit" id="logbut">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
