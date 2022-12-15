import "./nav.css";
import { Link } from "react-router-dom";

 const Navbar = () => {

  return (
    <div className="maincon">  
      <h1 className="logo"> J.CREW</h1>

      <div className="navbut">
        {/* option 0 */}
        <h3 className="power">
          <h3> Women </h3>
          <div className="hide2">
            <h3> Shop Cashmere </h3>  
            <Link className="dec" to="/Active" > Active </Link>
            <Link className="dec" to="/Bag" > Bag </Link>
            <Link className="dec" to="/BestSeller" > Best Seller </Link>
            <Link className="dec" to="/Blazers" > Blazers </Link>
            <Link className="dec" to="/BrandWelove" > Brand Welove </Link>  
            <Link className="dec" to="/Denim" > Denim </Link>
            <Link className="dec" to="/DressJumpsuites" > Dress Jump suites </Link>
            <Link className="dec" to="/Espandrils" > Espandrils </Link>
            <Link className="dec" to="/Flats" > Flats </Link>
            <Link className="dec" to="/Hats" > Hats </Link>
            <Link className="dec" to="/Heels" >Heels </Link> 
            <Link className="dec" to="/Jackets" > Jackets </Link>
            <Link className="dec" to="/Jewelry" > Jewelry </Link>
            <Link className="dec" to="/Matching" > Matching </Link>  
            <Link className="dec" to="/NewArrivals" > New Arrivals </Link>
            <Link className="dec" to="/Pajamas" > Pajamas </Link>
            <Link className="dec" to="/Pants" > Pants </Link>  
            <Link className="dec" to="/ReImagined" > Re-Imagined </Link>
            <Link className="dec" to="/Sale" > Sale </Link>  
            <Link className="dec" to="/Sandals" > Sandals </Link>
            <Link className="dec" to="/Sweaters" > Sweaters </Link>
            <Link className="dec" to="/SweaterPants" > Sweater Pants </Link>
            <Link className="dec" to="/Swimwear" > Swimwear </Link>  
            <Link className="dec" to="/Scarfs" > Scarfs </Link>  
            <Link className="dec" to="/ShirtsTops" > Shirts Tops </Link>
            <Link className="dec" to="/Shoes" > Shoes </Link>
            <Link className="dec" to="/Shorts" > Shorts </Link>
            <Link className="dec" to="/Skirts" > Skirts </Link> 
            <Link className="dec" to="/ShopAll" > ShopAll </Link>
            <Link className="dec" to="/TheTeesShop" > The Tees Shop </Link>
            <Link className="dec" to="/TopRated " > TopRated </Link>   
          </div>   
        </h3>  
        {/* option 11 */}  
        <h3 className="power">
          <h3> Men </h3>  
          <div className="hide">
            <h3> Shop Cashmere </h3>  
            <Link className="dec" to="/MensBrandsWeLove" > Mens Brands We Love </Link>
            <Link className="dec" to="/MensNewArrival" > Mens New Arrival </Link>
            <Link className="dec" to="/MenTopRated" > Men Top Rated </Link>  
            <Link className="dec" to="/BestSellersMen" > Best Sellers Men </Link>  
            <Link className="dec" to="/Sneakers" > Sneakers </Link>  
           
          </div>
        </h3>
        {/* option 1 */}
        <h3 className="power">
          <h3>Cashmere </h3>
          <div className="hide">
            <h3> Shop Cashmere </h3>
            <Link className="dec" to="/forwomen">              
              Forwomen
            </Link>
            <Link className="dec" to="/formen">              
              Formen
            </Link>
            <Link className="dec" to="/forgirls">              
              Forgirls
            </Link>
            <Link className="dec" to="/forboy">              
              Forboy
            </Link>
            <Link className="dec" to="/forkids">              
              Forkids
            </Link>
          </div>
        </h3>
        {/* option 2 */}
        <h3 className="power">
          <h3> Home </h3>
          <div className="hide">
            <h3>
              Shop Home
              <Link className="dec" to="/Bedding">                
                Bedding
              </Link>
              <Link className="dec" to="/Decor">
                
                Decor
              </Link>
            </h3>
          </div>
        </h3>
        {/* option 3 */}
        <h3 className="power">
          <h3> Sale </h3>
          <div className="hide g1">
            <h3>
              Women
              <Link className="dec" to="/Womenshopall">                
                Shop all
              </Link>
              <Link className="dec" to="/Women60off">                
                Over 60% Off
              </Link>
            </h3>
            <h3>
              Men
              <Link className="dec" to="/Menshowall">                
                Shop all
              </Link>
              <Link className="dec" to="/Menoff">                
                Over 60% Off
              </Link>
            </h3>
            <h3>
              Girls
              <Link className="dec" to="/Girlshopall">                
                Shop all
              </Link>
              <Link className="dec" to="/Girl60off">                
                Over 60% Off
              </Link>
            </h3>
            <h3>
              Boys
              <Link className="dec" to="/Boyshopall">                
                Shop all
              </Link>
              <Link className="dec" to="/Boy60off">                
                Over 60% Off
              </Link>
            </h3>
          </div>
        </h3>
        {/* option 4 */}
        <h3 className="power">
          <h3> Kids </h3>
          <div className="hide">
            <h3>
              Clothing
              <Link className="dec" to="/GirlsSkirt">    
                Skirt
              </Link>
              <Link className="dec" to="/Girljumpsuite">   
                Jump Suite
              </Link>
              <Link className="dec" to="/Girlshorts">    
                Shorts
              </Link>
              <Link className="dec" to="/GirlLeginsPant">     
                Legins Pants
              </Link>
              <Link className="dec" to="/GirlsPJ">                 
                Pajamas
              </Link>
              <Link className="dec" to="/GirlsSweatShirt">                
                Sweat Shirts
              </Link>
              <Link className="dec" to="/GirlsSwimandRashguards">                
                Swimwear
              </Link>
              <Link className="dec" to="/GirlstopsTees">                
                The Tees Shop
              </Link>
              <Link className="dec" to="/Boyshort">
                shorts & shirt   
              </Link>
              <Link className="dec" to="/Getoutside">
                Out Side   
              </Link>
              <Link className="dec" to="/Boyshirts">
                Shirt
              </Link>
              <Link className="dec" to="/Boysshorts">
                shorts
              </Link>
            </h3>   
          </div>   
        </h3>  
      </div>  
      <img className="iimg" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="" />     
      <input type="text" placeholder="Search " className="search" />   
      <Link to="/Signin">  <button id="sign"> Sign In </button>    </Link>
    
      <img 
        className="heart"
        src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"
        alt=""
      /> 
      <Link to="/Cart">  <img
        className="cartimg"
        src="https://www.kindpng.com/picc/m/443-4431015_website-shopping-bag-icon-hd-png-download.png"
        alt=""
      />   </Link>  
    
    </div>   
  );
};





export default Navbar;