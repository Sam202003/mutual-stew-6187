import React from 'react'
import { Styles } from './Styles/' 
const FooterTop = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <i className="fa-brands fa-twitter"></i>
          <Twitter />
          @jcrew_help
        </div>
        <div className={styles.inner}>
          <i className="fa-solid fa-phone"></i>1 434 385 5775
        </div>
        <div className={styles.inner}>
          <i className="fa-solid fa-envelope"></i>Email Us
        </div>
      </div>
    </div>
  )
}

export default FooterTop
