import React from "react";
import { useNavigate } from "react-router-dom";
import SpaceRocket from "../assets/SpaceRocket.gif";
import styles from "../styles/User.module.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <div className="title flex flex-col items-center">
          <h4 className="text-2xl text-white font-bold">
            Oops page not found!!
          </h4>
        </div>

        <div className="py-1">
          <div className="profile flex justify-center py-4">
            <img
              src={SpaceRocket}
              className={styles.profile_img}
              alt="Avatar"
            />
          </div>
          <div className="textbox flex flex-col gap-6 items-center mt-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              className={styles.homebtn}
            >
              Click here to go back to home.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
