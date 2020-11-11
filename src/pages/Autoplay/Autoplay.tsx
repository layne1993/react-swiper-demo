import React, { FC, memo } from 'react';


import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay])

const AutoplayProp: FC = props => {
  return (
    <>
      <div className="swiper-top-container">
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true} // 是否循环
          threshold={40}
        >
          <SwiperSlide>Slide 31</SwiperSlide>
          <SwiperSlide>Slide 32</SwiperSlide>
          <SwiperSlide>Slide 33</SwiperSlide>
          <SwiperSlide>Slide 34</SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default memo(AutoplayProp);
