import React from 'react'
import { useSwiper } from 'swiper/react';

const SwiperNextButton = () => {
    const swiper = useSwiper();
  return (
    <div className='swiper-nav-btns'>
        <button onClick={() => swiper.slidePrev()}>Prev</button>
      
    </div>
  )
}

export default SwiperNextButton
