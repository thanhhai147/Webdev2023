import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/app-context/index.js";
import Spinner from "../../components/spinner.js";
import { login } from "../../services/auth.service.js";
import { accountValidator, passwordValidator, validationCheck } from "../../utils/validators.utils.js";
import { firstLetterToUppercase } from "../../utils/string.utils.js";
import "./assets/css/login.css"

const Login = () => {
    // get user from app context
    const { setUser, setRedirect } = useAppContext();

    // init feedback, loaded
    const [validation, setValidation] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    // init ref for account and password
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const loginUser = async () => {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            setIsLoaded(false);
            const response = await login(user);
            if(response.status === 201 && response.data.message === "login success") {
                setUser(response.data.data);
                setRedirect("/");
            };
        } catch(err) {
            if(err.response.status === 403 && err.response.data.message === "account does not exist") return setValidation(preveState => {
                return {
                    ...preveState,
                    account: {status: "invalid", type: "nonexist", message: "tài khoản không tồn tại"},
                };
            });
            if(err.response.status === 403 && err.response.data.message === "incorrect password") return setValidation(preveState => {
                return {
                    ...preveState,
                    password: {status: "invalid", type: "incorrect", message: "mật khẩu không chính xác"},
                };
            });
        } finally {
            setIsLoaded(true);
        };
    };

    const submitUser = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setValidation({
            email: accountValidator(emailRef.current.value),
            password: passwordValidator(passwordRef.current.value)
        });
    };

    useEffect(() => {
        if(!validation) return;
        if(validationCheck(validation)) loginUser();
    }, [validation]);

    // jsx
    const spinnerRender = <>
        <div className="spinner-container d-flex flex-column justify-content-center align-items-center">
            <Spinner type="spinner-border" size={{width: "3rem", height: "3rem"}} color="primary-color" />
            <p className="fs-5 fw-500 primary-color m-0 mt-3">Waiting for login...</p>
        </div>    
    </>

    const loginFormRender = 
    <> 
        <div className="background">
        </div>
        <div className="foreground row">
            <div className="login-container col-4 p-5 d-flex flex-column justify-content-center element-bg-color rounded-5">
                <div className="ps-1 pe-1">
                    <div className="label-container mb-5">
                        <p className="login-label mb-0 fw-semibold primary-color title-login">Đăng Nhập</p>
                        <p className="fs-5 mb-0 login-sub-label p-title">Rất vui được gặp bạn</p>
                    </div>
                    <form id="login-form" className="row g-3" noValidate>
                        <div className="col-12 mb-1">
                            <input id="account-input" type="text" ref={emailRef} className={`form-control is-${validation && validation.email.status} my-input`} name="email/phone" placeholder="Email hoặc số điện thoại" aria-label="email/phone" required/>
                            {validation && <div className={`${validation.email.status}-feedback`}>{firstLetterToUppercase(validation.email.message)}</div>}
                        </div>
                        <div className="col-12 mb-1">
                            <input id="password-input" type="password" ref={passwordRef} className={`form-control is-${validation && validation.password.status} my-input`} name="password" placeholder="Mật khẩu" aria-label="password" />
                            {validation && <div className={`${validation.password.status}-feedback`}>{firstLetterToUppercase(validation.password.message)}</div>}
                        </div> 
                        <div className="col-12 d-grid ">
                            <button type="submit" onClick={submitUser} className="btn btn-primary btn-lg btn-block mb-3 rounded-5 w-100 primary-bg-color background-color no-border css-login button-login">Đăng Nhập</button>
                        </div>
                    </form>
                    <hr className="m-0" />
                    <div className="row">
                        <div className="col-12 d-grid">
                            <Link to={"/signup"}>
                                <button type="button" className="btn btn-custom btn-lg  mt-4 w-100 rounded-5 background-color white-color button-signup">
                                    Đăng Ký
                                </button>
                            </Link>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </>

    return <>
        <motion.div exit={{opacity: 0}}>
            <div className="login default-height">
                {isLoaded ? loginFormRender : spinnerRender}
            </div>
        </motion.div>    
    </>
};

export default Login