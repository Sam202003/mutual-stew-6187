import React, { useEffect, useState } from 'react'
import SliderBox from './SliderBox'
import styles from '../styles/ProductDetails.module.css'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  change_variant_color,
  change_variant_size,
  update_quantity,
  update_cart_items,
} from '../features/Product/productSam'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'

const ProductModal = ({ item, tooggleModal }) => {
  const [currentVariant, setCurrentVariant] = useState({})
  const [rupee, setRupee] = useState(0)
  const [quantity, setQuantity] = useState([])
  const [q, setQ] = useState(1)
  const dispatch = useDispatch()
  const [vID, setVID] = useState(0)
  const [showAcc, setShowAcc] = useState(false)
  const { cartItems } = useSelector((state) => state.product)

  const handleChangeColor = (variantID) => {
    dispatch(
      change_variant_color({
        id: item.id,
        variantID,
      }),
    )
  }

  const handleCart = () => {
    let currentSize = item.sizes.filter((el) => {
      return el.status && el
    })
    let obj = {
      id: item.id,
      quantity: Number(q),
      category: item.category,
      size: currentSize[0],
      Trending: item.Trending,
      brand: item.brand,
      price: item.price,
      title: item.title,
      variant: currentVariant,
      desc: item.desc,
    }

    dispatch(
      update_cart_items({
        item: obj,
      }),
    )
    dispatch(
      update_quantity({
        id: item.id,
        variantID: vID,
        quantity: q,
      }),
    )
    alert('Item Added to Cart')
  }

  const handleChangeSize = (id) => {
    dispatch(
      change_variant_size({
        id: item.id,
        variantID: id,
      }),
    )
  }

  const handleChange = (e) => {
    dispatch(
      update_quantity({
        id: item.id,
        variantID: vID,
        quantity: Number(e.target.value),
      }),
    )
  }

  useEffect(() => {
    let filterCurrentVariant = item.variant.filter((el) => {
      return el.status && el
    })

    setCurrentVariant({ ...filterCurrentVariant[0] })
    const handleIndianRupees = () => {
      let x = item.price
      x = x.toString()
      let lastThree = x.substring(x.length - 3)
      let otherNumbers = x.substring(0, x.length - 3)
      if (otherNumbers !== '') lastThree = ',' + lastThree
      let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree
      setRupee(res)
    }
    handleIndianRupees()
    let filterItem = item.variant.filter((el) => {
      return el.status && el
    })
    let arr = []
    for (let i = 0; i < filterItem[0].quantity; i++) {
      arr.push({
        id: uuidv4(),
        value: i + 1,
      })
    }
    setQuantity([...arr])
    setVID(filterItem[0].id)
  }, [item])

  return (
    <div className={styles.fixed}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div onClick={tooggleModal} className={styles.close_btn}>
            <CloseIcon />
          </div>

          <div className={styles.left}>
            <SliderBox
              images={currentVariant.images ? currentVariant.images : ''}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.detailsWrap}>
              <div className={styles.trending}>
                <p>
                  {item.Trending === 'best_seller'
                    ? 'Best Seller'
                    : 'Top Rated'}
                </p>
              </div>
              <div className={styles.title}>
                <p>{item.title}</p>
              </div>
              <div className={styles.link}>
                <Link to={`${item.id}`}>View Full Details</Link>
              </div>
              <div className={styles.price}>
                <p>INR {rupee}</p>
              </div>
              <div className={styles.color}>
                <p>
                  <span>Color : </span>
                  {currentVariant.color}
                </p>
              </div>
              <div className={styles.small_price}>
                <p>INR {rupee}</p>
              </div>
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
                  )
                })}
              </div>

              <div className={styles.sizes}>
                {item.sizes.map((el) => {
                  return (
                    <div
                      onClick={() => handleChangeSize(el.id)}
                      key={el.id}
                      className={`${styles.size} ${
                        el.status && styles.active_size
                      } `}
                    >
                      <p>{el.value}</p>
                    </div>
                  )
                })}
              </div>

              <div className={styles.quantity}>
                <label>
                  Quantity:<span> </span>
                  <select
                    disabled={quantity.length > 0 ? false : true}
                    onChange={(e) => {
                      setQ(e.target.value)
                    }}
                    name="quantity"
                  >
                    {quantity.length > 0 ? (
                      quantity.map((q) => {
                        return (
                          <option value={q.value} key={q.id}>
                            {q.value}
                          </option>
                        )
                      })
                    ) : (
                      <option value="Not Available">Not Available</option>
                    )}
                  </select>
                </label>
              </div>
              <div className={styles.product_details}>
                <div
                  className={styles.title_bar}
                  onClick={() => setShowAcc(!showAcc)}
                >
                  <div className={styles.title_left}>
                    <p>Product Details</p>
                  </div>
                  <div className={styles.title_right}>
                    {showAcc ? <RemoveIcon /> : <AddIcon />}
                  </div>
                </div>
                {showAcc && (
                  <div className={styles.dropdown}>
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
              <div className={styles.add_to_cart}>
                <button
                  onClick={() =>
                    quantity.length > 0 ? handleCart() : () => {}
                  }
                  disabled={quantity.length > 0 ? false : true}
                >
                  {quantity.length > 0 ? 'ADD TO BAG' : 'UNAVAILABLE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
