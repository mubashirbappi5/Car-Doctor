"use client"; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../public/assets/images/banner/1.jpg'

import img2 from '../../public/assets/images/banner/2.jpg'
import img3 from '../../public/assets/images/banner/3.jpg'
import img4 from '../../public/assets/images/banner/4.jpg'
import img5 from '../../public/assets/images/banner/5.jpg'
import img6 from '../../public/assets/images/banner/6.jpg'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Banner from './Banner';
const BannerSlider = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper w-full max-w-5xl"
      >
        <SwiperSlide>
       <Banner img={img1}/>
        </SwiperSlide>
        <SwiperSlide>
        <Banner img={img2}/>
        </SwiperSlide>
        <SwiperSlide>
        <Banner img={img3}/>
        </SwiperSlide>
        <SwiperSlide>
        <Banner img={img4}/>
        </SwiperSlide>
        <SwiperSlide>
        <Banner img={img5}/>
        </SwiperSlide>
        <SwiperSlide>
        <Banner img={img6}/>
        </SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default BannerSlider;