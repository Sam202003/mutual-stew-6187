import React from 'react'
import Slider from 'react-slick'
import styles from '../styles/SliderBox.module.css'

const SliderBox = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {images.length > 0 &&
        images.map((item) => {
          return (
            <div key={item.id} className={styles.imgBox}>
              <img src={item.img} alt="" />
            </div>
          )
        })}
    </Slider>
  )
}

export default SliderBox
