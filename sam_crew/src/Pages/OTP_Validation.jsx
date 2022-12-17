import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Phone } from "../Components/Icons";
import styles from "../styles/OTP_Validation.module.css";
import { empty_cart } from "../features/Product/productSam";

const OtpPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [otp1, setOTP1] = useState("");
    const [otp2, setOTP2] = useState("");
    const [otp3, setOTP3] = useState("");
    const [otp4, setOTP4] = useState("");
    const handleClick = () => {
        if (otp1 == 1 && otp2 == 2 && otp3 == 3 && otp4 == 4) {
            alert("🤩 Your Order has been placed");
            setTimeout(() => {
                navigate("/");
                dispatch(empty_cart());
            }, 2000);
        } else {
            alert("Incorrect OTP, Please confirm your OTP!");
            setOTP1("");
            setOTP2("");
            setOTP3("");
            setOTP4("");
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modal_head}>OTP Verification</div>
                <div className={styles.modal_mid}>
                    <div className={styles.phoneCover}>
                        <Phone />
                    </div>
                    <h4>Enter the One-Time-Password</h4>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="#"
                            autoFocus={true}
                            onChange={(e) => setOTP1(e.target.value)}
                            value={otp1}
                        />
                        <input
                            type="text"
                            placeholder="#"
                            onChange={(e) => setOTP2(e.target.value)}
                            value={otp2}
                        />
                        <input
                            type="text"
                            placeholder="#"
                            onChange={(e) => setOTP3(e.target.value)}
                            value={otp3}
                        />
                        <input
                            type="text"
                            placeholder="#"
                            onChange={(e) => setOTP4(e.target.value)}
                            value={otp4}
                        />
                    </div>
                </div>
                <div className={styles.modal_bottom}>
                    <h5 style={{ cursor: "pointer" }}>Resend code ?</h5>
                    <div
                        className={styles.verifyBtn}
                        onClick={() => handleClick()}
                    >
                        VERIFY
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
