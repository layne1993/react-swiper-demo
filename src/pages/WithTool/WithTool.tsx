import React, { FC, memo } from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const WithTool: FC = props => {
  return (
    <>
      <div className="swiper-top-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          threshold={40}
        >
          <SwiperSlide>Slide 41</SwiperSlide>
          <SwiperSlide>Slide 42</SwiperSlide>
          <SwiperSlide>Slide 43</SwiperSlide>
          <SwiperSlide>Slide 44</SwiperSlide>
          <SwiperSlide>Slide 45</SwiperSlide>
          <SwiperSlide>Slide 46</SwiperSlide>
          <SwiperSlide>Slide 47</SwiperSlide>
          <SwiperSlide>Slide 48</SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default memo(WithTool);
