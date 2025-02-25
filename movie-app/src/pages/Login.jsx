import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) newErrors.email = "Email required";
    if (!formData.password) newErrors.password = "Password required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Logique d'envoi des données
      console.log("Données envoyées :", formData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-movie-black ">
      {/* Titre */}
      <div>
        <h1 className="flex justify-center font-bold text-2xl -tracking-1 mb-2">
          <span className="bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">LOG</span>
          <span className="text-white">IN</span>
        </h1>
      </div>

      {/* Form*/}
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-700 p-4 rounded-2xl w-65 max-w-md"
      >
        {/* Email */}
        <div className="mb-2">
          <label className="pl-2 text-xs text-movie-grey my-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-movie-black text-white focus:outline-none focus:ring-2 focus:ring-movie-orange"
          />
          {errors.email && (
            <p className="text-movie-orange text-xs">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="pl-2 text-xs text-movie-grey my-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-movie-black text-white focus:outline-none focus:ring-2 focus:ring-movie-orange"
          />
          {errors.password && (
            <p className="text-movie-orange text-xs">{errors.password}</p>
          )}
        </div>

        {/* login */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-sm p-1 rounded-lg bg-gradient-to-tr from-movie-orangeDark to-movie-orange text-white hover:opacity-70 transition"
          >
            Login
          </button>
        </div>

        {/* sign up */}
        <p className="text-center text-white mt-2">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-movie-orange hover:underline">
            Sign Up
          </NavLink>
        </p>

      </form>
        <p className="text-center text-xs text-white mt-2">Not yet operational, database being created</p>
    </div>
  );
}
