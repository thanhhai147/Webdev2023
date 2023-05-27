import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { signup } from "../../services/auth.service.js";
import { surnameValidator, firstNameValidator, accountValidator, passwordValidator, validationCheck } from "../../utils/validators.utils.js";
import { firstLetterToUppercase } from "../../utils/string.utils.js";
import { useAppContext } from "../../context/app-context/index.js";
import Spinner from "../../components/spinner.js";
import "./assets/css/signup.css"

const Signup = () => {
    const { setNotification, setRedirect } = useAppContext();

    // init validation, isLoaded
    const [validation, setValidation] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    // init ref for account and password
    const familynameRef = useRef(null);
    const firstnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    

    const submitUser = async (e) => {
        e.preventDefault();
        e.stopPropagation();
   
        setValidation({
            familyname: surnameValidator(familynameRef.current.value),
            firstname: firstNameValidator(firstnameRef.current.value),
            email: accountValidator(emailRef.current.value),
            password: passwordValidator(passwordRef.current.value)
        });
       
    };

    useEffect(() => {
        if(!validation) return;

        const signupNewUser = async () => {
            let newUser = {
                fullname: {
                    familyname: familynameRef.current.value,
                    firstname: firstnameRef.current.value,
                },
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
    
            try {
                setIsLoaded(false);
                const response = await signup(newUser);
                if(response.status === 201 && response.data.message === "signup success") {
                    setNotification({
                        type: "success",
                        message: "đang ký thành công",
                    })
                    setTimeout(() => setRedirect("/login"), 2000);
                };
            } catch(err) {
                if(err.response.status === 403 && err.response.data.message === "not unique account") return setValidation(prevState => {
                    return {
                        ...prevState,
                        account: {
                            status: "invalid",
                            type: "exist",
                            message: "Tài khoản đã tồn tại",
                        }
                    }
                });
            } finally {
                setIsLoaded(true);
            };
        };
        
        // check if all validations are valid --> all valid --> sign up
        if(validationCheck(validation)) signupNewUser();
    }, [validation]);

     // jsx
    const spinnerRender = 
    <>
        <div className="spinner-container d-flex flex-column justify-content-center align-items-center">
            <Spinner type="spinner-border" size={{width: "3rem", height: "3rem"}} color="primary-color" />
            <p className="fs-5 fw-500 primary-color m-0 mt-3">Waiting For Login</p>
        </div>    
    </>

    const signupFormRender = 
    <>
        <div className="background">
        </div>
        <div className="foreground row">
            <div className="signup-container col-4 p-5 d-flex flex-column justify-content-center element-bg-color rounded-5">
                <div className="ps-1 pe-1">
                    <div className="label-container mb-5">
                        <p className="signup-label mb-0 fw-semibold primary-color">Đăng Ký</p>
                        <p className="fs-5 mb-0 signup-sub-label">Chào mừng bạn đến với Việt Nam Tour</p>
                    </div>
                    <form id="login-form" className="row g-3" noValidate>
                        <div className="col-12 mb-1">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" ref={familynameRef} className={`form-control is-${validation && validation.familyname.status}`} name="surname" placeholder="Họ" aria-label="surname"/>
                                    {validation && <div className={`${validation.familyname.status}-feedback`}>{firstLetterToUppercase(validation.familyname.message)}</div>}
                                </div>
                                <div className="col-6">
                                    <input type="text" ref={firstnameRef} className={`form-control is-${validation && validation.firstname.status}`} name="firstname" placeholder="Tên" aria-label="firstname"/>
                                    {validation && <div className={`${validation.firstname.status}-feedback`}>{firstLetterToUppercase(validation.firstname.message)}</div>}
                                </div>
                            </div>
                        </div>     
                        <div className="col-12 mb-1">
                            <input id="account-input" type="text" ref={emailRef} className={`form-control is-${validation && validation.email.status}`} name="email/phone" placeholder="Email hoặc số điện thoại" aria-label="email/phone" required/>
                            {validation && <div className={`${validation.email.status}-feedback`}>{firstLetterToUppercase(validation.email.message)}</div>}
                        </div>
                        <div className="col-12 mb-1">
                            <input id="password-input" type="password" ref={passwordRef} className={`form-control is-${validation && validation.password.status}`} name="password" placeholder="Mật khẩu" aria-label="password" />
                            {validation && <div className={`${validation.password.status}-feedback`}>{firstLetterToUppercase(validation.password.message)}</div>}
                        </div>
                        <div className="col-12 d-grid mt-3">
                            <button type="submit" onClick={submitUser} className="btn btn-primary btn-lg btn-block mb-3 rounded-5 w-100 primary-bg-color no-border white-color button">Đăng Ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

    return <>
        <motion.div exit={{opacity: 0}}>
            <div className="signup default-height">
                { isLoaded ? signupFormRender : spinnerRender }
            </div>
        </motion.div>
    </>;
};

export default Signup;