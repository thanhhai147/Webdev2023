import React, { useEffect, useRef } from "react";
import "./assets/css/notification.css";
import { useAppContext } from "../../context/app-context";
import { firstLetterToUppercase } from "../../utils/string.utils.js";
import Constant from "../../data/constant.js";

export default function Notification() {
    const { notification } = useAppContext();
    const notificationRef = useRef();
  
   useEffect(() => {
    if(!notification) return;
    
    notificationRef.current.classList.add("animation-slide")
    setTimeout(() => notificationRef.current && notificationRef.current.classList.remove("animation-slide"), Constant.TIMEOUT_FEEDBACK);
   }, [notification])

    return (
        (
            notification &&
            <div id="notification">
                <div className="ctrl d-flex flex-row align-items-center justify-content-center">
                    <div ref={notificationRef} className="notification w-25">
                        <div className={`alert alert-${notification.type} fs-6 fw-500 text-center`} role="alert">
                            {firstLetterToUppercase(notification.message)}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};