import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet,
} from "react-router-dom";
// import Swal from "sweetalert2";
import Login from "../pages/Auth/login";

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
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
