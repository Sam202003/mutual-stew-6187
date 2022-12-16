import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Mens.module.css";

export default function Mens() {
  useEffect(() => {
    document.title = "Men's Clothing | J.Crew";
    
    if (window.pageYOffset > 300) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.headWrap}>
          <div className={styles.headImg}>
            <div className={styles.headContent}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }} >
             
                <h1 className={styles.headContent1}>Suited</h1>
                <h2 className={styles.headContent2}>FOR SUMMER</h2>
              </div>
              <h4 className={styles.headContent3}>
                All the laid-back (yet polished) fits and premium fabrics for your warm-weather occasions.
            </h4>
            <h5 className={styles.headContent4}>Visit the suit shop</h5>
            </div>
          </div>
        </div>
        <div className={styles.midWrap}>
          <h3>Shops, stories & more</h3>
          <div className={styles.midImgWrap}>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img  src="https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0607_flyouts_m_img0.jpg"
                alt="" />
                  
               
              <h4>Summer Classics</h4>
              </Link>
            </div>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img src="https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0614_flyouts_m_img1.jpg"
                  alt=""  />
                   
              
              <h4>New In The Swim Shop</h4>
              </Link>
            </div>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img  src="https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0614_flyouts_m_img2.jpg"
                  alt=""/>
                 
                
              <h4>It's Short-sleve Season</h4>
              </Link>
            </div>
            <div className={styles.midImg}>
              <Link to="/products/mens">
              <img  src="https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0614_flyouts_m_img3.jpg"  
              alt="" />
                 
                 
               
            <h4>Welcome To the Shorts season</h4>
            </Link>
            </div>
          </div>
        </div>
        <div className={styles.mainAboveFooter}>

          <h2 style={{ fontSize: 36, fontWeight: 400 }}> More you need to see </h2>
           
         
          <div className={styles.aboveFooterImgWrap}>
          <div className={styles.aboveFooterInner}>

              <img src="https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416"  
              alt="" />
                
              <div>  <h5>Shop Women's Dresses & Jumpsuits</h5> </div>
             
            </div>
            <div className={styles.aboveFooterInner}>
            <img  src="https://www.jcrew.com/s7-img-facade/BI437_PT1317_m?wid=416"  
            alt=""  />
               
            <div>
            <h5>Shop Women's Shirts & Tops</h5>
            </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img src="https://www.jcrew.com/s7-img-facade/BG652_BK0001_m?wid=416"
                alt=""/>
                
              
            <div>
            <h5>Shop Women's Sweaters</h5>
            </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img  src="https://www.jcrew.com/s7-img-facade/BH925_NA6549_m?wid=416"
              alt=""  />
               
             
            <div>
            <h5>Shop Women's The Tees Shop</h5>
            </div>
            </div>
            <div className={styles.aboveFooterInner}>
            <img  src="https://www.jcrew.com/s7-img-facade/BH914_GR0086_m?wid=416"
            alt=""  />
               
            
            <div>
            <h5>Shop Women's Sweatshirts & Sweatpants</h5>
            </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img src="https://www.jcrew.com/s7-img-facade/BC108_PK5748_m?wid=416"
              alt="" />
                
              
            <div>
            <h5>Shop Women's Swimwear</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
