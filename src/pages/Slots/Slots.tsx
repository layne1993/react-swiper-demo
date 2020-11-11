import React, { FC, memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
 
const Slots: FC = props => {

  return (
    <>
      <div className="swiper-top-container">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          initialSlide={0} // 初始化显示哪一个
          threshold={40}
        >
          <SwiperSlide>Slide 61</SwiperSlide>
          <SwiperSlide>Slide 62</SwiperSlide>
          <span slot="container-start">元素被添加到 swiper-container 前面</span>
          <span slot="container-end">元素被添加到 swiper-container 后面</span>
          <span slot="wrapper-start">元素被添加到 swiper-wrapper 前面</span>
          <span slot="wrapper-end">元素被添加到 swiper-wrapper 后面</span>
        </Swiper>
      </div>
    </>
    
  )
}

export default memo(Slots);
