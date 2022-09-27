import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  // first create credentials with useState
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    // set credential state in here
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value })); //use the previous value & credentials name
  };

  //   use async funct because were gonna make api req
  const handleClick = async (e) => {
    e.preventDefault();
    // it just update loading state
    dispatch({ type: "login_start" });
    try {
      const res = await axios.post("/auth/login", credentials);
      //   after successful operation
      dispatch({ type: "login_success", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "login_failure", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="loginInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="loginInput"
        />
        <button disabled={loading} onClick={handleClick} className="loginBtn">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
