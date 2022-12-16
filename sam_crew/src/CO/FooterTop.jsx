import React from "react";
import styles from "../styles/FooterTop.module.css";
import { Twitter } from "./SvgIcons";

export default function FooterTop() {
    return (
        <div className={styles.parent}>
        <div className={styles.main}>
        <div className={styles.inner}>
                  
        <Twitter />
        @Screw_help
        </div>
        <div className={styles.inner}>
        <i className="fa-solid fa-phone"></i>1 434 385 5775</div>
        
        <div className={styles.inner}>
        <i className="fa-solid fa-envelope"></i>Email Us </div>
       
        </div>
        </div>
    );
}
