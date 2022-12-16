import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    openSignUp,
    closeLogin,
    openLogin,
    auth,
} from "../features/Login/LoginSlice";
import { setUserMail, setUserPass } from "../features/Auth/AuthSlice";
import { Cross, Info } from "./Icons";
import styles from "../styles/SignIn.module.css";

export default function LoginModal() {
    let user = JSON.parse(localStorage.getItem("users")) || [];
    const { userMail, userPass } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    let count = 0;
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modal_head}>
                    Sign In
                    <Cross />
                </div>

                <div className={styles.modal_mid}>
                    <input
                        type="text"
                        placeholder="Email Address*"
                        className={styles.emailInput}
                        onChange={(e) => {
                        let mail = e.target.value;
                        dispatch(setUserMail(mail));
                        }}/>
                    
                    <input
                        type="password"
                        placeholder="Password*"
                        className={styles.passInput}
                        onChange={(e) => {
                        let pass = e.target.value;
                        dispatch(setUserPass(pass));
                        }} />
                   
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        }}>
                    
                        <span
                            style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 14,
                            }} >
                       
                            <input type="checkbox" />
                            Remember Me <Info />
                            
                        </span>
                        <span
                            style={{
                            fontSize: 14,
                            color: "rgb(100, 92, 255)",
                            fontWeight: "bold",
                            cursor: "pointer",
                            }}>
                        
                            Forgot Password? </span>
                       
                    </div>
                    <button
                        type="button"
                        className={styles.signInBtn}
                        onClick={() => {
                        if (JSON.stringify(user) == "[]") {
                               
                        dispatch(openSignUp());
                        alert("Please do register first");
                        } 
                        else 
                        {
                              
                        user.forEach((user) => {
                        if (
                        userMail == user.email &&
                        userPass == user.password
                        ) {
                        count = 1;
                        }
                        });

                        if (count == 1) {
                        dispatch(closeLogin());
                        alert("Login Successful");
                        dispatch(auth());
                                } 
                                else 
                                {
                                alert("Login Failed");
                                dispatch(openLogin());
                                }
                            }
                        }} >
                   
                        SIGN IN </button>
                   
                    <div className={styles.mid_footer}>
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.
                    </div>

                </div>
                <div className={styles.modal_bottom}>
                    Don't have an account?{" "}
                    <span
                    
                        style={{
                        color: "rgb(100, 92, 255)",
                        marginLeft: "20px",
                        cursor: "pointer",
                        }}
                        onClick={() => dispatch(openSignUp())}>
                    
                        Sign Up Now </span>
                   
                </div>
            </div>
        </div>
    );
}
