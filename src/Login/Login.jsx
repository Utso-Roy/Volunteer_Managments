import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router"; 
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser, setUser, googleLogin } = use(AuthContext)
    const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault();
      const from = e.target 
      const email = from.email.value
      const password = from.password.value
      console.log({ email, password })
      loginUser(email, password)
          .then(result => {
              setUser(result.user)
              Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your login has been successfully",
  showConfirmButton: false,
  timer: 1500
});
          })
          .catch(error => {
          console.log(error.message)
      })

    };
    

  const handleGoogleLogin = () => {
      googleLogin()
          .then(result => {
              setUser(result.user)
              navigate('/')
              
          })
          .catch(error => {
          alert(error.message)
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#0a72ba] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
                          type="email"
                          name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CB4DA]"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
                          type={showPassword ? "text" : "password"}
                          name="password"
              required
              placeholder="......"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CB4DA] pr-10"
            />
            <span
              className="absolute right-3 top-[39px] text-xl text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible className="hover:text-[#095c94]" /> : <AiOutlineEye />}
            </span>
          </div>

        
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-[#0a72ba]" />
              Remember me
            </label>
            <Link to="#" className="text-[#0a72ba] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0a72ba] cursor-pointer text-white py-2 rounded-md hover:bg-[#095c94] transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 border-t text-center text-sm text-gray-500">
          or continue with
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-[#0a72ba] text-white border border-gray-300 hover:bg-[#095c94] py-2 rounded-md transition"
          >
            <span className="flex gap-2 items-center">
              <FaGoogle /> Continue with Google
            </span>
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#0a72ba] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
