import React, { useEffect, useState } from "react";
import styles from "./ProductItem.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../../Components/ProductDetails";
import { change_variant_color } from "../../features/Product/productSam";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const [rupee, setRupee] = useState(0);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const { products_data, data } = useSelector((store) => store.product);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleChangeColor = (variantID) => {
 
    dispatch(
      change_variant_color({
        id: item.id,
        variantID,
      })
    );
  };

  const tooggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const handleIndianRupees = () => {
      let x = item.price;
      x = x.toString();
      let lastThree = x.substring(x.length - 3);
      let otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers !== "") lastThree = "," + lastThree;
      let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      setRupee(res);
    };
    handleIndianRupees();
  }, [item]);
  return (
    <>
      {openModal ? (
        <ProductModal item={item} tooggleModal={tooggleModal} />
      ) : (
        <></>
      )}
      <div className={styles.product_item}>
        <div className={styles.relative}>
          <div className={styles.img_box}>
            {item.variant.map((el) => {
              return el.status && <img key={el.id} src={el.thumb} alt="" />;
            })}
          </div>
          <div className={styles.icon_box}>
            <FavoriteBorderIcon />
          </div>
          <div className={styles.quick_shop_btn}>
            <button onClick={tooggleModal}>Quick Shop</button>
          </div>
        </div>
        <div className={styles.product_details}>
          <p className={styles.product_name}>
            <Link to={`${item.id}`}> {item.title}</Link>
          </p>
          <p className={styles.product_price}>INR {rupee}</p>
          <div className={styles.colors}>
            {item.variant.map((el) => {
              return (
                <div
                  key={el.id}
                  onClick={() => handleChangeColor(el.id)}
                  className={`${styles.dummy} ${
                    el.status && styles.active_color_box
                  }`}
                >
                  <div className={`${styles.color_box}`}>
                    <img src={el.thumb} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
