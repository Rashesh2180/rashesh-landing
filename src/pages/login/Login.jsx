import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email address"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[0-9]/, "Password must contain a number")
      .matches(/[!@#$%^&*]/, "Password must contain a special character")
      .required("Please enter your password"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);

    setTimeout(() => {
      console.log(values); 
      setLoading(false);
      setSubmitting(false); 
    }, 2000); 
  };

  return (
    <div className=" mt-8">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-5">
                <label
                  htmlFor="email"
                  className="text-secondarys1 font-inter block text-base font-bold max-sm:text-sm"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-2 border border-bordercolor rounded-lg w-full sm:py-2 py-2 xl-2:py-5 outline-none text-secondary px-4"
                  placeholder="Enter your Email ID"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-xs text-red-500 w-[90%]"
                />

                <label
                  htmlFor="password"
                  className="text-secondarys1 font-inter block mt-3 text-base font-bold max-sm:text-sm"
                >
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="mt-2 border border-bordercolor rounded-lg w-full outline-none sm:py-2 py-2 xl-2:py-5 text-secondary px-4"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-[58%] transform -translate-y-1/2 text-secondarys1"
                  >
                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-xs text-red-500 w-[90%]"
                />

                <div className="mt-4 flex gap-4 items-center">
                  <input
                    type="checkbox"
                    className="accent-success text-white h-5 w-5"
                  />
                  <p className="text-xs font-inter text-secondarys1 max-sm:text-xs">
                    By hitting the Register button, you agree to the
                    <span className="text-success font-bold underline">
                      <NavLink> Terms conditions </NavLink> & Privacy Policy
                    </span>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-success text-white mt-5 flex justify-center sm:p-3 p-2 rounded-lg text-sm sm:text-sm xl-2:p-4 xl-2:text-xl font-inter font-bold"
                  disabled={isSubmitting || loading}
                >
                  {loading ? (
                    <div className="loader"></div> 
                  ) : (
                    "Login"
                  )}
                </button>
                <NavLink
                  to="/forgotpassword"
                  className="ml-auto flex justify-end mt-3 font-inter text-sm font-bold text-success underline"
                >
                  Forgot Password?
                </NavLink>
                <div className="mt-3 flex justify-between items-center gap-7">
                  <div className="h-[1px] bg-bordercolor w-full"></div>
                  <p className="text-lg font-inter">Or</p>
                  <div className="h-[1px] bg-bordercolor w-full"></div>
                </div>
              
           
            <div className="flex justify-between items-center sm:mt-4 mt-3 max-sm:flex-col  gap-3">
              <button className="sm:p-3 p-3 border-2 flex-1 border-bordercolor rounded-xl max-sm:w-full justify-start gap-2 flex  items-center">
                <img
                  src="/assets/svg/login/Vector (5).svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-secondarys1 font-inter font-bold  text-[10px]">
                  Continue with Google
                </p>
              </button>
              <button className="sm:p-3 p-3 border-2 flex-1 border-bordercolor rounded-xl max-sm:w-full justify-start gap-2 flex  items-center">

                <img
                  src="/assets/svg/login/image 14.svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-secondarys1 font-inter font-bold  text-[10px]">
                Continue with LinkedIn
                </p>
              </button>
              <button className="sm:p-3 p-3 border-2 flex-1 bg-primary rounded-xl max-sm:w-full justify-start gap-2 flex  items-center">

                <img
                  src="/assets/svg/login/path14.svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                    <p className="text-white font-inter font-bold  text-[10px]">
                Continue with Facebook
                </p>
              </button>
            </div>
            <div className="sm:mt-6 mt-4 text-center font-inter text-secondarys1 text-sm">
              Don’t have an account?{" "}
              <NavLink to="auth" className="text-success underline font-semibold">Sign-up</NavLink>
            </div>
              </Form>
            )}
          </Formik>
        </div>
  );
};

export default Login;
