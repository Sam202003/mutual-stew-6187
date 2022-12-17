import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleProductItem from "../Components/SingleProductItem";
import styles from "../styles/FinalPayment.module.css";
import OtpPage from "./OTP_Validation";

export default function FinalPayment() {
    const [openOtp, setOpenOtp] = useState(false);
    const { cartItems, payment_with_charge, estimated_subtoal } = useSelector(
    (state) => state.product
    );
    const [name, setName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [paymentWithCharge, setPaymentWithCharge] = useState(0);
    const [estimatedTotal, setEstimatedTotal] = useState(0);
    const navigate = useNavigate();
    const handleIndianRupees = (value) => {
        console.log(value);
        let x = value;
        x = x.toString();
        let lastThree = x.substring(x.length - 3);
        let otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== "") lastThree = "," + lastThree;
        let res =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    };
    useEffect(() => {
    document.title = "Payment Page | J.Crew";
      
        if (window.pageYOffset > 300) {
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        }

        let deCharge = handleIndianRupees(payment_with_charge);
        let esti = handleIndianRupees(estimated_subtoal);
        setEstimatedTotal(esti);
        setPaymentWithCharge(deCharge);
        let data = JSON.parse(localStorage.getItem("user_details"));
    
        setName(data.f_name + " " + data.l_name);
        setAddress1(data.add_line_1);
        setAddress2(data.add_line_2);
        setCity(data.city);
    }, []);
    return (
        <div className={styles.container}>
            {openOtp && <OtpPage />}
            <div className={styles.parent}>
                <div className={styles.parentLeft}>
                    <div className={styles.leftTop}>
                        <div className={styles.innerLeftTop}>
                            <div
                            className={styles.Header}
                            style={{ marginBottom: 15 }} >
                           
                            <i className="fa-solid fa-circle-check"></i>
                            <h2>Delivery Address</h2>
                            </div>
                            <div className={styles.address}>
                                <div
                                    style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    }} >
                               
                                    <div className={styles.addressPara}>
                                        <p>{name}</p>
                                        <p>{address1}</p>
                                        <p>{address2}</p>
                                        <p>{city}</p>
                                        <p>India</p>
                                    </div>
                                    <p
                                        style={{
                                            textDecoration: "underline",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            color: "gray",
                                            fontSize: 14,
                                        }}
                                        onClick={() => navigate(-1)} >
                                   
                                        EDIT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.leftBottom}>
                        <div className={styles.leftBottomWrapper}>
                            <h2
                                style={{
                                marginBottom: "20px",
                                }} >
                           
                                Payment
                            </h2>

                            <div className={styles.addressBar}>
                            <input type="checkbox" />
                            <p>Billing address same as delivery address</p>
                            </div>
                            <br />
                            <div className={styles.cardDiv}>
                            <i className="fa-solid fa-credit-card"></i>
                            <p>Card</p>
                            </div>
                            <br />
                            <div className={styles.displayCardDiv}>
                                <div>
                                    <div className={styles.cardInput1}>
                                        <input
                                        className={styles.cardNumber}
                                        type="text"
                                        placeholder="Card Number *" />
                                       
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                    <br />
                                    <div className={styles.cardLastDate}>
                                        <input
                                        type="text"
                                        placeholder="MM/YY *"/>
                                        
                                        <input
                                        type="text"
                                        placeholder="CVV *" />
                                       
                                        <i className="fa-solid fa-circle-question"></i>
                                    </div>
                                    <br />
                                    <div className={styles.nameOnTheCard}>
                                        <input
                                        type="text"
                                        placeholder="Name on card *" />
                                       
                                    </div>
                                    <br />
                                    <div className={styles.cardPhotos}>
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.3oJG6k7jSxQHmkjN9aRvNQHaDA&pid=Api&P=0&w=421&h=171"
                                            alt="" />
                                            
                                       
                                        <img  src="https://tse4.mm.bing.net/th?id=OIP.YbjoXNR5vHk40HALX9MmXAAAAA&pid=Api&P=0&w=56&h=35"
                                            alt="" />
                                           
                                       
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.fgkwCuz-ovfAcVMJP5srtwHaEK&pid=Api&P=0&w=276&h=155"
                                            alt="" />
                                            
                                       
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.FGAMR-XYlKe0iQTjmMtXNgHaHa&pid=Api&P=0&w=167&h=167"
                                            alt=""  />
                                            
                                      
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.iGzlVx9T1wLqIdERUJHvnAHaHa&pid=Api&P=0&w=161&h=161"
                                            alt="" />
                                            
                                       
                                        <img  src="https://tse3.mm.bing.net/th?id=OIP.kQEaukiihSbaYOj_8jCVDgHaEK&pid=Api&P=0&w=295&h=166"
                                            alt="" />
                                       
                                           
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.RMwjZ66K8SvqAfffRH6pGgAAAA&pid=Api&P=0&w=169&h=169" 
                                            alt=""/>
                                            
                                       
                                    </div>

                                    <br />
                                    <div>
                                        <div>
                                            <p className={styles.payNowLast}>
                                            By clicking Pay Now, you agree
                                            to eShopWorld's{" "}
                                            <a href="">
                                            Terms and Conditions
                                            </a>{" "}
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            }}>
                                       
                                            <div
                                            className={styles.paymentButton}
                                            onClick={() => setOpenOtp(true)}  >
                                          
                                            PAY NOW
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.products}>
                    {cartItems.length > 0 &&
                        cartItems.map((item) => {
                        return (
                        <SingleProductItem key={item.id} item={item} />
                        );
                        })}
                    <div className={styles.price_summary}>
                        <div className={styles.cap}>
                        <div className={styles.cap_left}>
                        <p className={styles.title}>Items :</p>
                        </div>
                        <div className={styles.cap_right}>
                        <p>{estimatedTotal}</p>
                        </div>
                        </div>
                        <div className={styles.cap}>
                        <div className={styles.cap_left}>
                        <p className={styles.title}>Total :</p>
                        </div>
                        <div className={styles.cap_right}>
                        <p>{paymentWithCharge}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
