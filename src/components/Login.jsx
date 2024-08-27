import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSingIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleResetPassword = async () => {
    if (!user.email) return setError("please enter your email");
    try {
      await resetPassword(user.email);
      setError("We sent you an email ");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="email"
            placeholder="correo@gmail.com"
            type="email"
          />
        </div>

        <div className="mb-4">
          {" "}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="password"
            placeholder="*******"
            type="password"
            id="password"
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline text-sm">
            Login
          </button>
          <a
            onClick={handleResetPassword}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
          >
            Forgot password?
          </a>
        </div>
      </form>
      <p className="my-4 text-sm flex justify-between">
        Don't have a Account?<Link to="/register">Register</Link>
      </p>
      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full "
        onClick={handleGoogleSingIn}
      >
        Login Google
      </button>
    </div>
  );
};

export default Login;
