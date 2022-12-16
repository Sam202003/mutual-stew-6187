import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from './MainModal'

export default function MainModa() {
  const dispatch = useDispatch()

  return (
    <>
      <aside className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.upperModal}>
          </div>
          <div className={styles.ModalTop}>
            <span style={{ fontSize: 12 }}>INDIA</span>
            <h4 style={{ fontSize: 15 }}>Sam'z Crew.COM ALL</h4>
            <h2 style={{ fontSize: 46, fontWeight: 400 }}>Around the World</h2>
            <hr className={styles.hr}></hr>
          </div>

          <div className={styles.modalMid}>
            <h3 style={{ fontSize: 15 }}>FLAT-RATE SHIPPING</h3>
            <h3 style={{ fontSize: 15 }}>DUTY-FREE SHIPPING IN YOUR</h3>
            <h3 style={{ fontSize: 15 }}>LOCAL CURRENCY</h3>
            <h3 style={{ fontSize: 15 }}>NEED HELP</h3>
            <p style={{ fontSize: 15 }}>E-mail: julie@jcrew.com or</p>
            <p style={{ fontSize: 15 }}>Call: 1-434-385-5775</p>
          </div>

          <div
            styles={{
              height: 111,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              className={styles.modalBtn}
              onClick={() => dispatch(openModal())}
            >
              START SHOPPING
            </button>
            <p>Take me to the U.S site.</p>
          </div>
        </div>
        <div className={styles.lowerModal}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            By clicking "start shopping," you agree to ourTerms of Use and
            Privacy Policy, including the use ofcookiesand the transfer of your
            personal information to the United States, a jurisdiction that may
            not provide an equivalent level of data protection to the laws in
            your home country.
          </p>
        </div>
      </aside>
    </>
  )
}
