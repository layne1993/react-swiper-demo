import React, { FC, memo, useState } from 'react';

import SwiperCore, { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/thumbs/thumbs.scss';

SwiperCore.use([Thumbs])

const ThumbSwiper: FC = props => {
  const [thumbSwiper, setThumbSwiper] = useState(null as any);

  return (
    <>
      <div className="swiper-top-container">
        <Swiper thumbs={{ swiper: thumbSwiper }}>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933390&di=e3d9443fabc7fd4d96a64d483a77294d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F22%2F59%2F19300001325156131228593878903.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933391&di=a69dcfb19241f4eaf00418193518c98a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933390&di=ab6bcc98ad88712e17ff312f9c43099a&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933390&di=5a6b6a52953714ac1a273567d9447392&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F55%2F22%2F20300000929429130630222900050.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          onSwiper={setThumbSwiper}
          watchSlidesVisibility
          watchSlidesProgress
        >
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933390&di=e3d9443fabc7fd4d96a64d483a77294d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F22%2F59%2F19300001325156131228593878903.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933391&di=a69dcfb19241f4eaf00418193518c98a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933390&di=ab6bcc98ad88712e17ff312f9c43099a&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605074933390&di=5a6b6a52953714ac1a273567d9447392&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F55%2F22%2F20300000929429130630222900050.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
              width="100%"
              height="100%"
              alt="demo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
    
  )
}

export default memo(ThumbSwiper);
