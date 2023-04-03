import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "./auth/authUser";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const getUser = async () => {
    const url = `${process.env.REACT_APP_API_URL}/auth/login/check`;
    await axios.get(url, { withCredentials: true }).then((response) => {
      dispatch(loginUser(response.data.user));
    });
  };
  if (user == null) {
    getUser();
  }
  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={user !== null ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user !== null ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user !== null ? <Navigate to="/" /> : <Register />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}
