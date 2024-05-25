import React, { Fragment } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import logo from "../assets/images/logo.jpeg";
function Navbar() {
  return (
    <Fragment>
      <div className='d-flex flex-row fixed-top bg-success'>
        <div className='p-4 text-white' style={{ cursor: "pointer" }}>
          <img
            src={logo}
            alt=''
            style={{ height: "60px", borderRadius: "100px" }}
          />
        </div>
        <div className='p-4 text-white mt-3' style={{ cursor: "pointer" }}>
          <span className='fs-6'>Kategori</span>
        </div>
        <div className='p-4 mt-2'>
          <div class='input-group mb-3'>
            <input
              type='text'
              class='form-control'
              aria-describedby='basic-addon1'
              style={{ width: "1200px" }}
            />
          </div>
        </div>
        <div className='p-4 mt-2 text-white' style={{ cursor: "pointer" }}>
          <RiShoppingCartLine className='fs-5 mt-2' />
        </div>
        <div className='p-4 mt-2 text-white' style={{ cursor: "pointer" }}>
          <IoMdNotificationsOutline className='fs-5 mt-2' />
        </div>
        <div className='p-4 mt-2 text-white'>
          <IoMailOutline className='fs-5 mt-2' />
        </div>
        <div className='p-4 mt-2'></div>
        <div className='p-4' style={{ marginTop: "13px" }}>
          <span className='text-white' style={{ cursor: "pointer" }}>
            <CgProfile className='fs-5 me-2' />
            Admin
          </span>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
