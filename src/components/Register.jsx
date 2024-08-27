import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { singUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await singUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    //setError(error.message);
  };
  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          {" "}
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

        <div>
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

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline text-sm mt-4">
          Registrar
        </button>
        <p className="my-4 text-sm flex justify-between">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
