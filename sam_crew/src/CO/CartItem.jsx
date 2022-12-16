import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import { remove_cart_item } from "../features/Product/productSam";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const { cartItems } = useSelector((state) => state.product);
  console.log(item);
  const [rupee, setRupee] = useState(0);
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
  }, []);
  const dispatch = useDispatch();
  const handleRemove = () => {
    let changedData = [];
    cartItems.map((el) => {
      if (el.id !== item.id) {
        changedData.push(el);
      }
    });
    dispatch(
      remove_cart_item({
        changedData,
      })
    );
  };
  return (
    <>
      {item.id && (
        <div key={item.id} className={styles.product_wrap}>
          <div className={styles.p_details}>
            <div className={styles.img_box}>

              <img src={item.variant.thumb} alt={item.title} />
            </div>
            <div className={styles.details}>
              <div className={styles.title}>

                <p>{item.title}</p>
              </div>
              <div className={styles.size}>

                <p>
                  <span>Size: </span>
                  {item.size.value}{" "}
                </p>
              </div>
              <div className={styles.color}>

                <p>
                  <span>Color: </span>
                  {item.variant.color}{" "}
                </p>
              </div>
              <div className={styles.buttons}>
                <button onClick={handleRemove}>Remove</button>
              </div>
            </div>
          </div>

          <div className={styles.price}>
            <p>INR {rupee}</p>
          </div>
          <div className={styles.qty}>
            <div className={styles.qty_box}>
              <p>{item.quantity}</p>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
