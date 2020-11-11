import React, { FC, memo } from 'react';

import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Virtual]);

const VirtualProp: FC = props => {
  const slides = Array.from({ length: 1000 }).map((el, index) => `Virtual Slide ${index + 1}`);
  return (
    <>
      <div className="swiper-top-container">
        <Swiper spaceBetween={10} slidesPerView={2} virtual>
          {slides.map(slideContent => (
            <SwiperSlide key={slideContent}>{slideContent}</SwiperSlide>
          ))}
          <span slot="container-start">虚拟Slide会在Dom结构中保持尽量少的Slide，只渲染当前可见的slide和前后的slide，而隐藏其他不可见的Slide，每次切换时就渲染新的Slide。当你的Slide很多的时候，尤其是Slide中有复杂的Dom树结构时，性能会有很大的提升。</span>
        </Swiper>
      </div>
    </>
  )
}

export default memo(VirtualProp);
