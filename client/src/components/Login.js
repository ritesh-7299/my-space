import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/telescope.png";
import styles from "../styles/User.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { loginValidation } from "../helper/validate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../auth/authUser";
import Loader from "./Loader";

export default function Login() {
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setShowLoader(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, values, {
          withCredentials: true,
        })
        .then((response) => {
          setShowLoader(false);
          if (response.status === 201) {
            console.log(response);
            dispatch(loginUser(response.data.user));
            navigate("/");
          }
        })
        .catch((error) => {
          setShowLoader(false);
          toast.error(error.response.data.message);
        });
    },
  });

  const googleLogin = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen ">
        {showLoader ? (
          <Loader />
        ) : (
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-2xl font-bold">MY SPACE</h4>
            </div>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img src={avatar} className={styles.profile_img} alt="Avatar" />
              </div>

              <div className="textbox flex flex-col gap-6 items-center">
                <input
                  {...formik.getFieldProps("username")}
                  type="text"
                  className={styles.textbox}
                  placeholder="Username/Email*"
                />
                <input
                  {...formik.getFieldProps("password")}
                  type="password"
                  className={styles.textbox}
                  placeholder="Password*"
                />
                <button type="submit" className={styles.btn}>
                  Let's go
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a member?
                  <Link className="text-red-500 px-1" to="/register">
                    Register now
                  </Link>
                </span>
              </div>

              <div className="flex flex-col gap-4 items-center">
                OR
                <button
                  onClick={googleLogin}
                  type="button"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
