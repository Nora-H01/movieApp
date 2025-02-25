import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name required";
    if (!formData.lastName) newErrors.lastName = "Name required";
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.password) newErrors.password = "Password required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    //   console.log("Données envoyées :", formData);
      // Ici tu peux ajouter la logique d'envoi des données
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-movie-black">
      <div>
        <h1 className="flex justify-center font-bold text-2xl -tracking-1 mb-6">
          <span className="pr-2 bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">SIGN</span>
          <span className="text-white">UP</span>
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-700 p-4 rounded-2xl w-65 max-w-md"
      >
        {/* Username */}
        <div className="">
          <label className="pl-2 text-xs text-movie-grey my-1">Username</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-movie-black text-white focus:outline-none focus:ring-2 focus:ring-movie-orange"
          />
          {errors.firstName && (
            <p className="text-movie-orange text-xs">{errors.firstName}</p>
          )}
        </div>

        {/* Prénom */}
        <div className="">
          <label className="pl-2 text-xs text-movie-grey my-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-movie-black text-white focus:outline-none focus:ring-2 focus:ring-movie-orange"
          />
          {errors.firstName && (
            <p className="text-movie-orange text-xs">{errors.firstName}</p>
          )}
        </div>

        {/* Nom */}
        <div className="">
          <label className="pl-2 text-xs text-movie-grey my-1">Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-movie-black text-white focus:outline-none focus:ring-2 focus:ring-movie-orange"
          />
          {errors.lastName && (
            <p className="text-movie-orange text-xs">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div className="">
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
        <div className="">
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

        {/* Confirm password */}
        <div className="mb-2">
          <label className="pl-2 text-xs text-movie-grey my-1">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-2 rounded-lg bg-movie-black text-white focus:outline-none focus:ring-2 focus:ring-movie-orange"
          />
          {errors.confirmPassword && (
            <p className="text-movie-orange text-xs">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Sign*/}
        <div className="flex justify-center">
            <button
            type="submit"
            className="text-sm p-1 rounded-lg bg-gradient-to-tr from-movie-orangeDark to-movie-orange text-white hover:opacity-70 transition"
            >
            Sign up
            </button>
        </div>

        {/* Login */}
        <p className="text-center text-white mt-2">
            Already an account ?{" "}
          <NavLink to="/login" className="text-movie-orange hover:underline">
            Login
          </NavLink>
        </p>
      </form>
      <p className="text-center text-xs text-white mt-2">Not yet operational, database being created</p>

    </div>
  );
}
