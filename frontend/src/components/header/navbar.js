import React from "react";
import "./assets/css/nav-bar.css"
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { lettersToUppercase } from "../../utils/string.utils.js"; 
import Constant from "../../data/constant.js";

export default function NavBar({ user }) {
  const loginItem = () => (
    <div className="nav-item fw-500">
      <Link to={"/login"} className="nav-link">
       <button className="rounded-5">Đăng Nhập</button>
      </Link>
    </div>
  );

  const userItem = () => (
    <div className="nav-item fw-500">
      <Link to={"/dashboard"} className="nav-link">
        <Avatar 
          name={`${user.fullname.familyname} ${user.fullname.firstname}`}
          color={Constant.PRIMARY_COLOR="#114647"}
          maxInitials={Constant.AVATAR_MAX_INITIALS}
          // size={30}
          textSizeRatio={Constant.AVATAR_TEXT_SIZE_RATIO}
          round={true}
          title="user-avatar"
          className="me-2"
        />
        {lettersToUppercase(user.fullname.familyname + " " + user.fullname.firstname)}
      </Link>
    </div>
  );

    return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand d-flex flex-row align-items-center primary-color" to={"/"}>
            <img src={process.env.PUBLIC_URL + "jpg/logofinal.svg"} alt={process.env.PUBLIC_URL + "jpg/no-image-pc.jpg"} width="70" className="d-inline-block align-text-top me-1" />
            <p className="mb-0 fw-500 logo-title">VietNam Tour</p>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container d-flex" id="navbarNav">
            <div className="function d-flex flex-row ">
              <Link to={"/map-view"}>
                <div className="map-view pointer-cursor">Lịch trình thông minh</div>
              </Link>
              <Link to={"/fashion-showcase"}>
                <div className="fashion-showcase pointer-cursor">Trang phục truyền thống</div>
              </Link>
            </div>
              {   
                user ? userItem() : loginItem()
              }
          </div>
      </div>
    </nav>
  )
}