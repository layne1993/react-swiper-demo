import React, { FC, memo, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
 
const WithRender: FC = props => {
  const [isActive, setActive] = useState(true);

  const handleClick = () => {
    setActive(prevActive => {
      return !prevActive
    })
  };

  return (
    <>
      <div className="swiper-top-container">
        <Swiper
          initialSlide={0} // 初始化显示哪一个
          loop={true} // 是否循环
          threshold={40}
          onClick={handleClick}
        >
          <SwiperSlide>
          {() => (
            <div>Current slide is {isActive ? 'active' : 'not active'}</div>
          )}
          </SwiperSlide>
          <SwiperSlide>
          {(params: { isDuplicate: any; }) => {
            return <div>Current slide is {params.isDuplicate ? 'isDuplicate' : 'not isDuplicate'}</div>
          }}
          </SwiperSlide>
          <SwiperSlide>Slide 53</SwiperSlide>
          <SwiperSlide>Slide 54</SwiperSlide>
        </Swiper>
      </div>
    </>
    
  )
}

export default memo(WithRender);
