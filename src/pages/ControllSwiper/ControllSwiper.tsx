import React, { FC, memo, useState } from 'react';

import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Controller])

const ControllSwiper: FC = props => {
  const [firstSwiper, setFirstSwiper] = useState(null as any);
  const [secondSwiper, setSecondSwiper] = useState(null as any);

  return (
    <>
      <div className="swiper-top-container">
        <Swiper style={{ marginBottom: 15 }} onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}>
          <SwiperSlide>Slide 71 -- top</SwiperSlide>
          <SwiperSlide>Slide 72 -- top</SwiperSlide>
          <SwiperSlide>Slide 73 -- top</SwiperSlide>
          <SwiperSlide>Slide 74 -- top</SwiperSlide>
        </Swiper>
        <Swiper onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}>
          <SwiperSlide>Slide 71 -- bottom</SwiperSlide>
          <SwiperSlide>Slide 72 -- bottom</SwiperSlide>
          <SwiperSlide>Slide 73 -- bottom</SwiperSlide>
          <SwiperSlide>Slide 74 -- bottom</SwiperSlide>
        </Swiper>
      </div>
    </>
    
  )
}

export default memo(ControllSwiper);
