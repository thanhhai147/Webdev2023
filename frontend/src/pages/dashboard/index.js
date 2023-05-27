import React, { useState } from "react";
import "./assets/css/dashboard.css";
import { motion } from "framer-motion";
import Avatar from "react-avatar";
import { useAppContext } from "../../context/app-context/index.js";
import { logout as logoutService } from "../../services/auth.service";
import { firstLetterToUppercase } from "../../utils/string.utils.js";
import { getFullDate } from "../../utils/date.utils.js";
import Constant from "../../data/constant.js";

export default function Dashboard() {
    const { user, setUser, setRedirect } = useAppContext();

    const logout = () => {
        logoutService()
        .then(response => {
            if(response.status === 200 && response.data.message === "logout success") {
                setUser(null);
                return setRedirect("/homepage");
            };
        })
        .catch(err => {
            if(err.status === 500) console.log(err);
        });
    };

    
    return (
        <motion.div exit={{opacity: 0}}>  
            <div className="user-dashboard mt-5">
                <div className="container">
                    <div className="row d-flex w-100">
                        <div className="user-container col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 mb-5">
                            <div className="user-wrapper element-bg-color fit-height p-5 rounded-5">
                                <div className="avatar-container d-flex flex-row mb-5 ">
                                    <Avatar className="avatar"
                                        name={`${user.fullname.familyname} ${user.fullname.firstname}`} 
                                        maxInitials={Constant.AVATAR_MAX_INITIALS} 
                                        title="user-avatar" 
                                        color={Constant.SECONDARY_COLOR='#968436'}
                                        size={Constant.AVATAR_SIZE_DEFAULT}
                                        textSizeRatio={Constant.AVATAR_TEXT_SIZE_RATIO}
                                    />
                                    <div className="name ms-3 mt-3">
                                        {firstLetterToUppercase(user.fullname.familyname)} {firstLetterToUppercase(user.fullname.firstname)}
                                    </div>
                                </div>
                                <div className="info-container mb-4 ">
                                    <div className="row">
                                        <div className="col-xxl-12 col-xl-12 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <span className="label d-flex flex-row align-items-center">
                                                <p className="title fs-6 black-color mb-0 ">
                                                Tài khoản
                                                </p>
                                            </span>
                                            <div className="account fs-6 ms-2 mb-3">
                                                {user.email}
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-xl-12 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <span className="label d-flex flex-row align-items-center">
                                                <p className=" title fs-6 black-color mb-0">
                                                   Ngày tham gia
                                                </p>
                                            </span>
                                            <div className="iat fs-6 ms-2 mb-3">
                                                {getFullDate(user.createdAt)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-container row">
                                    <div className="col-xxl-12 col-xl-12 col-lg-3 col-md-4 col-sm-6 col-12">
                                       <button className="log-out mb-3 rounded-5 mb-0 fs-5 w-100 no-border" onClick={logout}>Đăng Xuất</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
                        <div className="col">
                            <div className="row">
                                <div className="tour-title mb-4 col-6 primary-color d-flex justify-content-center align-items-center">
                                    Lịch sử gợi ý chuyến đi
                                </div>
                                <div className="col-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};