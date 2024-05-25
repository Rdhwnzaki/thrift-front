import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet,
} from "react-router-dom";
// import Swal from "sweetalert2";
import LoginPage from "../pages/Auth/login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Register from "../pages/Auth/register";
import Home from "../pages/home";

function Router() {
  //   const PrivateRoute = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       return <Outlet />;
  //     } else {
  //       Swal.fire("Warning", "Please login first", "error");
  //       return <Navigate to='/login' />;
  //     }
  //   };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
