import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import planet from "../assets/astronomy.png";
import styles from "../styles/User.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../auth/authUser";
import ModalImage from "react-modal-image";
import Loader from "./Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [imgUrl, setImgUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    setShowLoader(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        setShowLoader(false);
        if (response.status === 201) {
          dispatch(logoutUser());
          navigate("/");
        }
      })
      .catch((error) => {
        setShowLoader(false);
        toast.error(error.response.data.message);
      });
  };
  const getImage = () => {
    setShowLoader(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/get-image`, {
        withCredentials: true,
      })
      .then((response) => {
        setShowLoader(false);
        if (response.status === 201) {
          const { url, title } = response.data.data;
          setImgUrl(url);
          setTitle(title);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const showImage = () => {
    const el = document.getElementsByClassName("nasaImg");
    el[0].click();
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <nav className="flex items-center justify-between flex-wrap bg-opacity-0 bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">MY SPACE</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer hover:text-white mr-4">
              Home
            </p>
          </div>
          <div>
            <button onClick={logout} className={styles.homebtn}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen ">
        {showLoader ? (
          <Loader msg="Please wait while we are fetching data..." />
        ) : (
          <div>
            <div className="title flex flex-col items-center">
              <h4 className="text-2xl text-white font-bold">Hello {user}!</h4>
              <p className="text-white">Welcome to space!</p>
            </div>

            <div className="py-1">
              <div className="profile flex justify-center py-4">
                <img src={planet} className={styles.profile_img} alt="Avatar" />
              </div>
              <div
                onClick={showImage}
                className="textbox flex flex-col gap-6 items-center"
              >
                <button type="button" className={styles.homebtn}>
                  Click here to get a NASA image of the day
                </button>
              </div>
              <ModalImage
                className="text-white nasaImg invisible"
                large={imgUrl}
                alt={title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
