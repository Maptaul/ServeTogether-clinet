import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registrationLottie from "../assets/lottie/register.json";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const minLength = 6;
    if (
      !upperCase.test(password) ||
      !lowerCase.test(password) ||
      password.length < minLength
    ) {
      return "Password must have an uppercase, a lowercase letter, and at least 6 characters.";
    }
    return "";
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError({ ...error, password: passwordError });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = {
          name,
          email,
          createdAt,
        };

        fetch("https://serve-together-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to save user to the database");
            }
            return res.json();
          })
          .then((data) => {
            if (data.insertedId) {
              console.log("User saved to database successfully.");
              toast.success("User registered successfully!");
            }
          })
          .catch((error) => {
            console.error("Database Error:", error);
            toast.error("Failed to save user data.");
          });

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            // console.log("User profile updated on Firebase.");
            navigate("/");
          })
          .catch((error) => {
            // console.error("Error updating Firebase user profile:", error);
            toast.error("Failed to update user profile.");
          });
      })
      .catch((error) => {
        // console.error("Registration Error:", error);
        toast.error("Error during registration.");
      });
  };

  // Google login handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("Google Login Success");
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        toast.warning("Google login failed");
      });
  };

  return (
    <div className="min-h-screen md:flex justify-center items-center mb-10">
      <div className="text-center lg:text-left w-96">
        <Lottie animationData={registrationLottie}></Lottie>
      </div>
      <div className="card bg-base-300 w-full max-w-lg shrink-0 rounded-md p-10 text-black">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
                type={showPassword ? "text" : "password"}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {error.password && (
              <label className="label text-sm text-red-600">
                {error.password}
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-md">Register</button>
          </div>
        </form>
        <div className="text-center mt-4">
          <button className="btn btn-outline" onClick={handleGoogleLogin}>
            <FaGoogle /> Register with Google
          </button>
        </div>
        <p className="text-center text-black font-semibold mt-5">
          Already have an account?
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
