import { useState } from "react";
import api from "../api";
import { useNavigate, useLocation } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
import logo from "../assets/logo.svg";
import socialauth from "../assets/Frame 45.svg";
import entrepreneur from "../assets/Ellipse 5.png";
import line from "../assets/Line design.svg";
import back from "../assets/keyboard_backspace.svg";
import { Link } from "react-router-dom";
import { authService } from "../utils/authService";
import { toast } from "react-hot-toast";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    ...(isLogin
      ? {}
      : {
          name: "",
          confirmPassword: "",
          businessName: "",
          cacNumber: "",
        }),
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Common validations
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password?.trim()) {
      newErrors.password = "Password is required";
    }

    // Registration-specific validations
    if (!isLogin) {
      if (!formData.name?.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.confirmPassword?.trim()) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.businessName?.trim()) {
        newErrors.businessName = "Business name is required";
      }

      // if (!formData.cacNumber?.trim()) {
      //   newErrors.cacNumber = "CAC number is required";
      // }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isLogin) {
        const response = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        console.log(response.data.data.accessToken);
        localStorage.setItem(ACCESS_TOKEN, response.data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN, response.data.data.refreshToken);
        toast.success("Successfully logged in!");

        navigate("/dashboard");
      } else {
        await api.post("/auth/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.password,
          // cacNumber: formData.cacNumber,
          businessName: formData.businessName,
        });
        toast.success("Account created successfully");
        navigate("/login");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      setErrors((prev) => ({
        ...prev,
        submit: errorMessage,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center flex-wrap w-full m-0">
        <div className="form-side h-full w-1/2 flex justify-center flex-col items-center relative top-3">
          <Link
            to="/home"
            className="absolute flex space-x-4 border border-[#3835ED80] rounded-full py-2 px-5 items-center top-5 left-9"
          >
            <img src={back} alt="go back to home" className="w-[39px]" />
            <p className="font-[700] text-[12px]">Go Back</p>
          </Link>

          {/* Logo and welcome text */}
          <Link to="/home">
            <img
              className="h-[105px] w-[75px] mb-2 mr-4"
              src={logo}
              alt="Logo"
            />
          </Link>
          <p className="font-[700] text-[40px]">
            Welcome to{" "}
            <span className="font-[800] font-['UNDERRATED'] text-[30px]">
              NOFAIL
            </span>
          </p>
          <p className="font-[700] text-[12px] text-neutral-400">
            We support smarter decisions, empowering businesses
          </p>
          <p className="font-[700] text-[12px] text-neutral-400">
            to grow steadily and avoid the usual pitfalls.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form-container">
            {!isLogin && (
              <div className="input-group">
                <input
                  className={`form-input ${errors.name ? "error" : ""}`}
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
            )}

            <div className="input-group">
              <input
                className={`form-input ${errors.email ? "error" : ""}`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {!isLogin && (
              <>
                <div className="input-group">
                  <input
                    className={`form-input ${
                      errors.businessName ? "error" : ""
                    }`}
                    type="text"
                    name="businessName"
                    value={formData.businessName || ""}
                    onChange={handleChange}
                    placeholder="Business Name"
                  />
                  {errors.businessName && (
                    <span className="error-message">{errors.businessName}</span>
                  )}
                </div>

                <div className="input-group">
                  <input
                    className={`form-input ${errors.cacNumber ? "error" : ""}`}
                    type="text"
                    name="cacNumber"
                    value={formData.cacNumber || ""}
                    onChange={handleChange}
                    placeholder="CAC Reg. Number"
                  />
                  {/* {errors.cacNumber && (
                    <span className="error-message">{errors.cacNumber}</span>
                  )} */}
                </div>
              </>
            )}

            <div className="input-group">
              <input
                className={`form-input ${errors.password ? "error" : ""}`}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            {!isLogin && (
              <div className="input-group">
                <input
                  className={`form-input ${
                    errors.confirmPassword ? "error" : ""
                  }`}
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword || ""}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <span className="error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            )}

            {errors.submit && (
              <div className="text-red-500 text-sm text-left mb-4">
                {errors.submit}
              </div>
            )}

            {loading && <LoadingIndicator />}

            <button
              className="form-button bg-[#3835ED] hover:bg-[#3835ED80]"
              type="submit"
              disabled={loading}
            >
              {isLogin ? "Login" : "Register"}
            </button>

            <p className="text-[12px] text-neutral-500 mb-5">Or sign in with</p>
            <img src={socialauth} alt="social authentication icons" />

            {isLogin ? (
              <p className="font-[700] text-[16px] mt-10 text-neutral-400">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#3835ED]">
                  Sign up
                </Link>
              </p>
            ) : (
              <p className="font-[700] text-[16px] mt-10 text-neutral-400 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-[#3835ED]">
                  Sign in
                </Link>
              </p>
            )}
          </form>
        </div>

        <div className="right-side relative min-h-screen items-center w-1/2 flex justify-center bg-hero-pattern bg-cover bg-[#3835ED] text-white">
          <div className="bg-twinkles-sp absolute top-10 left-10 bg-no-repeat h-[591px] w-[477px]"></div>
          <img
            src={line}
            alt="Line design"
            className="absolute top-[379px] left-[185px]"
          />
          <div className="flex flex-col bg-no-repeat ">
            <p className="font-[800] text-[80px] leading-[5rem]">Helping</p>
            {/* <p className="font-[800] text-[80px] leading-[5rem]">Small</p> */}
            <p className="font-[800] text-[80px] leading-[5rem]">Businesses</p>
            <p className="font-[800] text-[80px] leading-[5rem]">Thrive</p>

            <div className="self-end mr-2">
              <p>Antipol oprel. Trimatisk preng som sad.</p>
              <p className="self-end">
                Reaaktiv ögonkramp. Pasa dövis inklusive plal.
              </p>
            </div>

            <div className=" self-end flex justify-between items-center w-[151px] mr-[140px] mt-[30px]">
              <img
                src={entrepreneur}
                alt="female entrepreneur icon"
                className="w-10 h-10"
              />
              <div>
                <h2 className="text-[12px] font-[800]">Elizabeth Ibrahim</h2>
                <p className="text-[9px] font-[500]">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
