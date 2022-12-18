import React, { useEffect, useState } from 'react'
import styles from '../styles/Checkout.module.css'
const SingleProductItem = ({ item }) => {
  const [rupee, setRupee] = useState(0)
  const handleIndianRupees = (value) => {
    let x = value
    x = x.toString()
    let lastThree = x.substring(x.length - 3)
    let otherNumbers = x.substring(0, x.length - 3)
    if (otherNumbers !== '') lastThree = ',' + lastThree
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree
    return res
  }

  useEffect(() => {
    let res = handleIndianRupees(item.price)
    setRupee(res)
  }, [])
  return (
    <>
      {item.id && (
        <div className={styles.product}>
          <div className={styles.p_left}>
            <img src={item.variant.thumb} alt={item.title} />
          </div>

          <div className={styles.p_right}>
            <div className={styles.cap}>
              <p>{item.title}</p>
            </div>

            <div className={styles.cap}>
              <div className={styles.cap_left}>
                <p className={styles.title}>Color :</p>
              </div>

              <div className={styles.cap_right}>
                <p>{item.variant.color}</p>
              </div>
            </div>

            <div className={styles.cap}>
              <div className={styles.cap_left}>
                <p className={styles.title}>Size :</p>
              </div>

              <div className={styles.cap_right}>
                <p>{item.size.value}</p>
              </div>
            </div>

            <div className={styles.cap}>
              <div className={styles.cap_left}>
                <p className={styles.title}>Quantity :</p>
              </div>

              <div className={styles.cap_right}>
                <p>{item.quantity}</p>
              </div>
            </div>

            <div className={styles.cap}>
              <div className={styles.cap_left}>
                <p className={styles.title}>Price :</p>
              </div>

              <div className={styles.cap_right}>
                <p>{rupee}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleProductItem
