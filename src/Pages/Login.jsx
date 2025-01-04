import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginLottie from "../Assets/lottie/login.json";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, googleLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful");
        setUser(user);
        navigate(location?.state?.from || "/", { replace: true });
      })
      .catch((err) => {
        setError(err.message || "Invalid email or password");
        toast.error("Invalid credentials, please try again.");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("Google Login Successful");
        setUser(user);
        navigate(location?.state?.from || "/", { replace: true });
      })
      .catch((err) => {
        toast.error("Google login failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen md:flex justify-center items-center">
      <div className="text-center lg:text-left w-96">
        <Lottie animationData={loginLottie}> </Lottie>
      </div>
      <div className="card bg-base-300 w-full max-w-lg p-10 text-black shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          {/* Login Button */}
          <div className="form-control mt-4">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        {/* Google Login Button */}
        <div className="divider my-4">OR</div>
        <div className="text-center">
          <button
            className="btn btn-outline w-full"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center font-medium mt-5">
          Don’t have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
