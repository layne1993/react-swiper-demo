import React, { FC, memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Basic: FC = props => {
  return (
    <>
      <div className="swiper-top-container">
        <Swiper
          initialSlide={0} // 初始化显示哪一个
          loop={true} // 是否循环
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          onClick={() => console.info('clicked')}
          threshold={40}
        >
          <SwiperSlide>Slide 11</SwiperSlide>
          <SwiperSlide>Slide 12</SwiperSlide>
          <SwiperSlide>Slide 13</SwiperSlide>
          <SwiperSlide>Slide 14</SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          initialSlide={1} // 初始化显示哪一个
          slideToClickedSlide={true}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onClick={() => console.info('clicked')}
          threshold={40}
        >
          <SwiperSlide>Slide 21</SwiperSlide>
          <SwiperSlide>Slide 22</SwiperSlide>
          <SwiperSlide>Slide 23</SwiperSlide>
          <SwiperSlide>Slide 24</SwiperSlide>
          <SwiperSlide>Slide 25</SwiperSlide>
          <SwiperSlide>Slide 26</SwiperSlide>
          <SwiperSlide>Slide 27</SwiperSlide>
          <SwiperSlide>Slide 28</SwiperSlide>
        </Swiper>
      </div>
    </>
    
  )
}

export default memo(Basic);
