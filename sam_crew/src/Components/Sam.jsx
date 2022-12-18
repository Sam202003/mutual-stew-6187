import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

const images = [
  {
    url:
      'https://rukminim1.flixcart.com/flap/844/140/image/5728240238c98110.jpg?q=50',
  },
  {
    url:
      'https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-06-01/INvsSA_1170X362_SET3A-9ac2473a-0c45-4bf6-bd80-2f9f71ab5d36.jpg',
  },
  {
    url:
      'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7684/1277684-h-cea244e86ab3',
  },
  {
    url:
      'https://rukminim1.flixcart.com/flap/844/140/image/5728240238c98110.jpg?q=50',
  },
  {
    url:
      'https://rukminim1.flixcart.com/flap/844/140/image/5728240238c98110.jpg?q=50',
  },
  {
    url:
      'https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-06-01/INvsSA_1170X362_SET3A-9ac2473a-0c45-4bf6-bd80-2f9f71ab5d36.jpg',
  },
  {
    url:
      'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7684/1277684-h-cea244e86ab3',
  },
  {
    url:
      'https://rukminim1.flixcart.com/flap/844/140/image/5728240238c98110.jpg?q=50',
  },
]

const Crousel = () => {
  return (
    <div>
      <SimpleImageSlider
        width={'98%'}
        height={'40vh'}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ cursor: 'pointer', marginLeft: '14px', marginTop: '20px' }}
        navSize={60}
        navMargin={20}
        loop={true}
        autoPlay={true}
        autoPlayDelay={0.7}
      />
    </div>
  )
}

export default Crousel
