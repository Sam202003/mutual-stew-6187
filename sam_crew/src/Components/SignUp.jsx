
import React, { useEffect } from "react";
import styles from "../styles/SignUp.module.css";
import { Cross, Info } from "./Icons";
import { openLogin } from "../features/Login/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    setUserMail,
    setUserPass,
    setUserLocation,
    addUser,
} from "../features/Auth/AuthSlice";

export default function SignUpModal() {
    const { userMail, userPass, userLocation, regUsers } = useSelector(
        (store) => store.auth
    );

    useEffect(() => {
        if (regUsers) {
            localStorage.setItem("users", JSON.stringify(regUsers));
        }
    },
     [regUsers]);

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modal_head}>
                    Sign Up
                    <Cross/>
                </div>

                <div className={styles.modal_body}>
                    <input
                        type="text"
                        placeholder="Email Address*"
                        className={styles.emailInput}
                        onChange={(e) => {
                        let mail = e.target.value;
                        dispatch(setUserMail(mail));
                        }} />
                   
                    <input
                        type="password"
                        placeholder="Create Password*"
                        className={styles.passInput}
                        onChange={(e) => {
                            let pass = e.target.value;
                            dispatch(setUserPass(pass));
                        }} />
                   
                    <select
                        className={styles.selectInput}
                        onChange={(e) => {
                            let location = e.target.value;
                            dispatch(setUserLocation(location));
                        }} >
                   
                        <option value="">---</option>
                        <option value="india">India</option>
                        <option value="canada">Cananda</option>
                        <option value="japan">Japan</option>
                        <option value="germany">Germany</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="aurstalia">Australia</option>
                        <option value="united states">United States</option>
                        <option value="new zealand">New Zealand</option>
                        <option value="united kingdom">United Kingdom</option>
                        <option value="sweden">Sweden</option>
                        <option value="netherlands">Netherlands</option>
                    </select>


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
                            }}>
                        
                            <input type="checkbox" />
                            Remember Me
                            <Info />
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
                </div>
                <button
                    type="button"
                    className={styles.signUnBtn}
                    onClick={() => {
                        let user = {
                        email: userMail,
                        password: userPass,
                        location: userLocation,
                        };

                        dispatch(addUser(user));
                        alert("User Signed Up Successfully");
                        setTimeout(() => dispatch(openLogin()), 1000);
                        dispatch(setUserMail(null));
                        dispatch(setUserPass(null));
                        dispatch(setUserLocation(null));
                    }} >
               
                    SIGN UP
                </button>
                <div className={styles.mid_footer}>
                    By clicking "Create an Account", you agree to our Terms of Use and Privacy Policy, including the Use of Cookies and the
                    transfer of your personal information to the United States, a jurisdiction that may not provide an equivalent level of
                    data protection to the laws in your home country.
                </div>
                <div className={styles.modal_bottom}>
                    Already have an account?{" "}
                    <span
                        style={{
                            color: "rgb(100, 92, 255)",
                            marginLeft: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => dispatch(openLogin())} >
                   
                        Sign In
                    </span>
                </div>
            </div>
        </div>
    );
}
