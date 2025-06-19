import React, { useContext, useState } from "react";
import { Link } from "react-router"; 
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { setUser, signUpUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
      const password = form.password.value;
      if (password.length < 6) {
            Swal.fire({
    icon: "warning",
    title: "Weak Password",
    text: "Password must be at least 6 characters long!",
    confirmButtonColor: "#0a72ba",
  });
         return 
      }
      if (!/[A-Z]/.test(password)) {
  Swal.fire({
    icon: "warning",
    title: "Uppercase Required",
    text: "Password must include at least one uppercase letter!",
    confirmButtonColor: "#0a72ba",
  });
  return;
}

if (!/[a-z]/.test(password)) {
  Swal.fire({
    icon: "warning",
    title: "Lowercase Required",
    text: "Password must include at least one lowercase letter!",
    confirmButtonColor: "#0a72ba",
  });
  return;
}

    console.log({ name, email, password, photo });

    signUpUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        return updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...createdUser, displayName: name, photoURL: photo });
          console.log("Profile updated successfully!");
        });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#0a72ba] mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegisterBtn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CB4DA]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CB4DA]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CB4DA]"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CB4DA] pr-10"
              required
            />
            <span
              className="absolute right-3 top-[39px] text-xl text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="hover:text-[#095c94]" />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0a72ba] text-white py-2 rounded-md hover:bg-[#095c94] transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0a72ba] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
