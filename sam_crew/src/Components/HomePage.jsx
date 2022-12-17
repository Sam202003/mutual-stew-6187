import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

export default function MainPage() {
    const navigate = useNavigate();
    useEffect(() => {

       
        document.title = "S.Crew: Clothes, Shoes & Accessories";
        if (window.pageYOffset > 300) {
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        }
    }, []);
    return (
        
        <div className={styles.mainParent}>
            <div className={styles.hq}>Have a question? We can help.</div>
            <img style={{width:"100%"}} src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img0.jpg" alt="" />
            <div className={styles.sam}>
              
        </div>
               
        <div className={styles.MainPage_SubTop}>
        <div className={styles.Sam_1}>
            <div style={{
            marginTop:"-250px"
             }}>
            <h1 style={{ fontSize: 50 }}>Best in swim since 1983</h1>
                       
        <h4 style={{ textDecoration: "underline" }}>Shop Swimfor every body</h4>
        </div>
        </div>
        <div className={styles.Sam_2}>
                <div style={{
                marginTop:"50px"
                }}>
                       
                <h1 style={{ fontSize: 45 }}>Vacation vives, all summer </h1>
                        
                <h1 style={{ fontSize: 45 }}>long</h1>
                <h4 style={{ textDecoration: "underline" }}>Shop new sets & dress</h4>
                
                </div>
                </div>
                <div className={styles.Sam_3}>
                    <div style={{
                        marginTop:"-300px"
                       }}>
                        <h1 style={{ fontSize: 40, fontWeight: 600 }}> The seaside pants,</h1>
                            
                        <h1 style={{ fontSize: 40, fontWeight: 600 }}>now in soft gauze</h1>
                             
                        <h4 style={{ textDecoration: "underline" }}>shop our pant spotlight </h4>
                            
                       <h4 style={{ textDecoration: "underline" }}> shop all soft gauze</h4>
                           
                </div>
                </div>
                <div className={styles.Sam_4}>
                    <div style={{
                    marginTop:"100px"
                    }}>
                    <h1 style={{ fontSize: 40 }}>Get Your Steps</h1>
                    <h1 style={{ fontSize: 40 }}>In SculpStreach</h1>
                       
                    <h4 style={{ textDecoration: "underline" }}>Shop uor new rbbed active fabric </h4>
                </div>
                </div>
                <div className={styles.Sam_5}> </div>
                    
                <div className={styles.Sam_6}> </div>
                    
            </div>
            <div className={styles.Sam_7}>
            <div className={styles.Sam_8}>
            <div className={styles.Sam_9}>Shop New Arrivals</div>
                        
                    
                    <div className={styles.navigationBtnWrap}>
                        
                    <button className={styles.navigationBtn}
                    onClick={() => navigate("/women")}> Shop Women </button>
                           
                       
                    <button className={styles.navigationBtn}
                    onClick={() => navigate("/mens")}>Shop Men</button>
                            
                        
                    <button className={styles.navigationBtn}
                    onClick={() => navigate("/kids")} >Shop Boys </button>
                            
                       
                    <button className={styles.navigationBtn}
                    onClick={() => navigate("/kids")}>Shop Girls </button>
                        
                    </div>
                    </div>      
                            
            </div>

            <div className={styles.samMid}>
                <div className={styles.headlineHed}>
                    <img className={styles.headImg}
                    src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
                    alt=""/>
                    <div className={styles.headDes}>Meet our creative community <i className="fa-solid fa-arrow-right-long"></i>
                        
                </div>
                </div>

                <div className={styles.mainMidImg}>
                    <div className={styles.mainMidImgWrap}>
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img7.jpg"
                        alt=""/>
                        <h2 className={styles.mainMidH1}>1 swimsuits, 2 ways</h2>
                        <h2 className={styles.mainMidH2}> How I wear my ruched one piece with Jen Azoulay </h2>
                           
                       <div className={styles.mainSpan}>Copy these outfits</div>
                            
                    </div>
                    <div className={styles.mainMidImgWrap}>
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img8.jpg"
                        alt=""/>

                        <h2 className={styles.mainMidH1}>What to wear next</h2>
                        <h2 className={styles.mainMidH2}>The new Dress code with Beverly Nguyen </h2>
                            
                       <div className={styles.mainSpan}>Find herpeak-summer picks </div>
                            
                       
                    </div>
                    <div className={styles.mainMidImgWrap}>
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img9.jpg"
                        alt=""/>
                        <h2 className={styles.mainMidH1}>The new arrivals edit </h2>
                            
                        <h2 className={styles.mainMidH2}>Instant classics with Alison Bornstein </h2>
                            
                       <div className={styles.mainSpan}> Shop her timeless style </div>
                           
                       
                </div>
                </div>

                <span
                    style={{
                    marginLeft: 161,
                    fontSize: 54,
                    fontWeight: "400",
                    }}>More Stories</span>
                
                <div className={styles.mainMidBottom}> <div>
                   
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June2/2022jun_0601_hp_w_img10.jpg"
                        alt=""/>
                        <h2 className={styles.innerHead}>Love is for everybody</h2>
                            
                        <span className={styles.innerSpan}> Celebrate Pride season</span>
                           
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img11.jpg"
                        alt=""/>
                        
                        <h2 className={styles.innerHead}>The edit: nautical & natural</h2> 
                            
                        <span className={styles.innerSpan}>Shop the roundup</span>
                            
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img12-.jpg"
                        alt=""/>
                        
                        <h2 className={styles.innerHead}>Most wanted: the Irish linen shirt</h2>
                            
                        <span className={styles.innerSpan}>See why we're obsessed</span>
                            
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/homepage2022/06-June/2022jun_0524_hp_w_img10.jpg"
                        alt=""/>
                        
                        <h2 className={styles.innerHead}>Limited edition collab: Marrakshi Life X J.Crew </h2>
                            
                       <span className={styles.innerSpan}>Meet us in Marrakech</span>
                </div>
                </div>
            </div>

            <div className={styles.mainAboveFooter}>
                <h2 style={{ fontSize: 36, fontWeight: 400 }}>More you need to see</h2>
                    
                <div className={styles.aboveFooterImgWrap}>
                    <div className={styles.aboveFooterInner}>
                    <img src="https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416"
                    alt=""/>

                    <div> <h5>Shop Women's Dresses & Jumpsuits</h5> </div>
                           
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BJ081_BL7133_m?wid=416"
                        alt=""/>
                        
                        <div> <h5>Shop Women's Shirts & Tops</h5></div>
                           
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BG652_BK0001_m?wid=416"
                        alt=""/>
                        
                        <div><h5>Shop Women's Sweters </h5> </div>
                            
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BH925_NA6549_m?wid=416"
                        alt=""/>
                        
                        <div> <h5>Shop Women's Teas shop</h5> </div>
                           
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BH914_GR0086_m?wid=416"
                        alt=""/>
                        
                        <div><h5>Shop Women's sweetshirts & sweetpants</h5> </div>
                            
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BC108_PK5748_m?wid=416"
                        alt="" />
                       
                        <div> <h5>Shop Women's Swimwear</h5> </div>
                           
                   </div>
                </div>
            </div>
        </div>
    );
}

