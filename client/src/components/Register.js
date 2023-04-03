import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/User.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import axios from "axios";
import Loader from "./Loader";

export default function Register() {
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setShowLoader(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/register`, values)
        .then((response) => {
          setShowLoader(false);
          if (response.status === 201) {
            navigate("/login");
          }
        })
        .catch((error) => {
          setShowLoader(false);
          toast.error(error.response.data.error);
        });
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster
        position="top-center"
        className="max-h-52"
        reverseOrder={true}
      ></Toaster>
      <div className="flex justify-center items-center h-screen ">
        {showLoader ? (
          <Loader />
        ) : (
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-2xl font-bold">Register yourself</h4>
            </div>

            <form className="py-2 mt-8" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col gap-6 items-center">
                <input
                  {...formik.getFieldProps("username")}
                  type="text"
                  className={styles.textbox}
                  placeholder="Username*"
                />
                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  className={styles.textbox}
                  placeholder="Email*"
                />
                <input
                  {...formik.getFieldProps("password")}
                  type="password"
                  className={styles.textbox}
                  placeholder="Password*"
                />
                <input
                  {...formik.getFieldProps("confirm_password")}
                  type="password"
                  className={styles.textbox}
                  placeholder="Confirm Password*"
                />
                <button type="submit" className={styles.btn}>
                  Register
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Already Registered?
                  <Link className="text-red-500 px-1" to="/login">
                    Login now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
