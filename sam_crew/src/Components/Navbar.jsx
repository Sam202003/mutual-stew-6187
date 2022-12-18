import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { HeartIcon, MainLogo } from './SvgIcons'
import { useDispatch, useSelector } from 'react-redux'
import { openLogin } from '../features/Login/LoginSlice'
import { User } from './Icons'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { cartItems, cartTotalItems } = useSelector((store) => store.product)
  // console.log("cartItems: ", cartItems);
  const { isLogin } = useSelector((store) => store.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className={styles.nav_parent}>
      <div className={styles.nav_logo}>
        <h1
          style={{
            fontFamily: 'serif',
            paddingRight: '10px',
            fontSize: '40px',
          }}
        >
          S.CREW
        </h1>
        <div className={styles.nav_linkWrap}>
          <Link to="/">
            <h4>New</h4>
          </Link>
          <Link to="/mens">
            <h4>Men</h4>
          </Link>
          <Link to="/women">
            <h4>Women</h4>
          </Link>
          <Link to="/kids">
            <h4>Kids</h4>
          </Link>
          <Link to="/products/home">
            <h4>Home</h4>
          </Link>
          <Link to="/stories">
            <h4>Stories</h4>
          </Link>
          <Link to="/sale">
            <h4>Sale</h4>
          </Link>
        </div>
      </div>

      <div className={styles.nav_end}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ marginRight: '-25px', zIndex: 2 }}
            src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_search_d.svg"
            alt=""
          />
          <input
            type="search"
            aria-label="Site wide search"
            className={styles.nav_searchInput}
            placeholder="Search S.Crew"
            // value=""
            data-qaid="navDesktopSearchInput"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength="50"
            style={{ height: 36, width: 180 }}
          ></input>
        </div>
        <div
          className={styles.nav_logIN}
          onClick={isLogin ? undefined : () => dispatch(openLogin())}
        >
          {isLogin ? <User /> : 'Sign In'}
        </div>
        <div className={styles.nav_icons}>
          <HeartIcon />
        </div>
        <div
          className={styles.nav_icons}
          onClick={() => {
            navigate('/cart')
          }}
        >
          <img
            src="https://www.jcrew.com/next-static/images/jcrew/svg/icon_bag_d.svg"
            alt=""
          />

          {cartItems.length != 0 ? (
            <div className={styles.amount_container}>
              <p className={styles.total_amount}>{cartTotalItems}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
