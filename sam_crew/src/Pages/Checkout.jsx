import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SingleProductItem from "../Components/SingleProductItem";
import styles from "../styles/Checkout.module.css";
import { update_total_with_charge } from "../features/Product/productSam";

const delivery_option = [
    {
        id: 1,
        title: "STANDARD Delivery",
        status: true,
        delivered_in: "Delivery in 7 Days",
        price: 1710,
    },
    {
        id: 2,
        title: "EXPRESS Delivery",
        status: false,
        delivered_in: "Delivery in 3 Days",
        price: 2052,
    },
];

const Checkout = () => {
    const {
    cartItems,payment_with_charge,estimated_subtoal,express_charge, standard_charge,current_charge,  sub_total,
        
      
        
        
       
        
    } = useSelector((state) => state.product);
    const [check, setCheck] = useState(false);
    const [options, setOptions] = useState(delivery_option);
    const [standardCharge, setStandardCharge] = useState(0);
    const [expressCharge, setExpressCharge] = useState(0);
    const [paymentWithCharge, setPaymentWithCharge] = useState(0);
    const [estimatedTotal, setEstimatedTotal] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);

   
    const [formData, setFormData] = useState({
        f_name: "", l_name: "", add_line_1: "", add_line_2: "", city: "",postal_code: "",  mobile: "", email: "",
       });

    useEffect(() => {
        document.title = "Check-out Page | J.Crew";
  
        if (window.pageYOffset > 300) {
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        }
    }, []);

    const handleChage = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
    };
    const dispatch = useDispatch();
    const handleDeleiveryChange = (id) => {
        if (id == 1) {
        options[0].status = true;
        options[1].status = false;
        setOptions([...options]);
        dispatch(
        update_total_with_charge({
        key: "s",
        })
        );
        } else {
            options[1].status = true;
            options[0].status = false;
            setOptions([...options]);
            dispatch(
            update_total_with_charge({
            key: "e",
            })
            );
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user_details", JSON.stringify(formData));
    navigate("/checkOut/payment");
    };

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
        
        let stCharge = handleIndianRupees(standard_charge);
        let exCharge = handleIndianRupees(express_charge);
        let deCharge = handleIndianRupees(payment_with_charge);
        let esti = handleIndianRupees(estimated_subtoal);
        let cuurent = handleIndianRupees(current_charge);
        setStandardCharge(stCharge);
        setExpressCharge(exCharge);
        setPaymentWithCharge(deCharge);
        setEstimatedTotal(esti);
        setDeliveryCharge(cuurent);
    }, [payment_with_charge, current_charge]);

    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.parent}>
        <div className={styles.content_wrap}>
        <div className={styles.top}>
        <div className={styles.head}>
         <p>Delivery Mehtod</p>
        </div>
        <div className={styles.inputs}>
        {options.map((el) => {


                return (
                    <div
                        key={el.id}
                        onClick={() =>
                        handleDeleiveryChange(el.id)
                        }
                        className={styles.input}>
                                            
                        <div className={styles.fix}>
                        <input
                        value={el.title}
                        onChange={() =>
                        handleDeleiveryChange(
                        el.id
                        )
                        }
                        checked={
                        el.status
                        ? true
                        : false
                        }
                        type="checkbox" />
                                                   
                        <span
                        className={
                        styles.checkmark
                        }></span>
                        </div>
                        <div
                        className={
                        styles.delivery_method
                        } >
                                               
                        <div
                        className={ styles.delivery_method_left }    >
                                                            
                                                       
                                                 
                        <p  className={ styles.bold  } >
                       
                        {el.title}
                        </p>
                        <p  className={  styles.light } >
                        {el.delivered_in}
                        </p>                                 
                                                               
                        </div>
                        <div className={  styles.delivery_method_right } >
                        <p className={ styles.price  } >                               
                                                          
                                                       
                        INR{" "}
                        {el.id == 1
                        ? standardCharge
                        : expressCharge}
                        </p>
                        </div>
                        </div>
                        </div>
                        );
                         })}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className={styles.parent}>
                        <div className={styles.content_wrap}>
                        <div className={styles.head}>
                        <p>Delivery Address</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className={styles.two_ip}>
                        <div className={styles.ip_left}>
                        <input
                        onChange={handleChage}
                        required
                        type="text"
                        name="f_name" />
                                      
                        </div>
                        <div className={styles.ip_right}>
                        <input
                        required
                        onChange={handleChage}
                        type="text"
                        name="l_name"
                        placeholder="Lastname" />
                                       
                                </div>
                                </div>
                                <div className={styles.item}>
                                    <input
                                        type="text"
                                        onChange={handleChage}
                                        required
                                        placeholder="Address Line 1"
                                        name="add_line_1" />
                                   
                                </div>
                                <div className={styles.item}>
                                    <input
                                        required
                                        onChange={handleChage}
                                        type="text"
                                        placeholder="Address Line 2"
                                        name="add_line_2"/>
                                    
                                </div>
                                <div className={styles.two_ip}>
                                    <div className={styles.ip_left}>
                                        <input
                                        required
                                        onChange={handleChage}
                                        type="number"
                                        name="postal_code"
                                        placeholder="Postal Code" />
                                       
                                    </div>
                                    <div className={styles.ip_right}>
                                        <input
                                        onChange={handleChage}
                                        required
                                        type="text"
                                        name="city"
                                        placeholder="City" />
                                       
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <input
                                    required
                                    onChange={handleChage}
                                    type="number"
                                    placeholder="Mobile Number"
                                    name="mobile" />
                                   
                                </div>
                                <div className={styles.item}>
                                    <input
                                    required
                                    onChange={handleChage}
                                    type="email"
                                    placeholder="Email"
                                    name="email"/>
                                    
                                </div>
                                <div className={styles.check_box}>
                                    <div className={styles.c_left}>
                                        <input
                                        onChange={() => setCheck(!check)}
                                        checked={check ? true : false}
                                        type="checkbox"/>
                                        
                                    </div>
                                    <div className={styles.c_right}>
                                        <p>
                                            I have read and consent toeShop World processing my information in accordance with the Privacy Statement and Cookie Policy.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.submit}>
                                    <input
                                    type="submit"
                                    value="CONTINUE TO PAYMENT"/>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.content_wrap}>
                        <div className={styles.parent}>
                        <div className={styles.back_btn}>
                        <Link to="/cart">BACK TO CART</Link>
                        </div>
                        <div className={styles.products}>
                        {cartItems.length > 0 &&
                        cartItems.map((item) => {
                         return (
                        <SingleProductItem
                             key={item.id}
                            item={item}/>
                                            
                             );
                            })}
                            </div>
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
                                    <p className={styles.title}>
                                    Delivery :
                                        </p>
                                    </div>
                                    <div className={styles.cap_right}>
                                    <p>{deliveryCharge}</p>
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
            </div>
        </div>
    );
};

export default Checkout;
