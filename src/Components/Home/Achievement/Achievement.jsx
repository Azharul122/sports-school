import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Achievement.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Achievement = () => {
    return (
        <div className="achievement">
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
      
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto"
      >
        <SwiperSlide>
            <img src="https://i0.wp.com/thesportsschool.com/wp-content/uploads/2021/09/Screenshot-215-2.png?ssl=1" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.4)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Rashid ali</p>
                        <p className="text-xs md:text-lg">
                        Selected in Bangali Team for World Mini Football U23 World Cup 2021.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i0.wp.com/thesportsschool.com/wp-content/uploads/2021/03/Nikki-Poonacha-Gold-Medalist-at-SAF-Games-scaled.jpg?ssl=1" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.4)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Meraj khani</p>
                        <p className="text-xs md:text-lg">
                        Gold Medalist at SAF Games 2019| Davis Cup 2022 (Reserves).</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i0.wp.com/thesportsschool.com/wp-content/uploads/2022/02/WhatsApp-Image-2021-12-16-at-4.41.05-PM.jpeg?ssl=1" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.4)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Dr. muleil</p>
                        <p className="text-xs md:text-lg">
                        Ranked No. 1 in India U14 Boys Category - Tennis (March 2020).</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i0.wp.com/thesportsschool.com/wp-content/uploads/2022/02/maxresdefault-1-e1644319902231.jpg?ssl=1" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.4)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Romjan kadiref</p>
                        <p className="text-xs md:text-lg">
                        Selected for Davis Cup 2022.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i0.wp.com/thesportsschool.com/wp-content/uploads/2021/09/Screenshot-215-2.png?ssl=1" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.4)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Rashid ali</p>
                        <p className="text-xs md:text-lg">
                        Selected in Bangali Team for World Mini Football U23 World Cup 2021.</p>
                </div>
            </div>
        </SwiperSlide>
  
      </Swiper>
        </div>
    );
};

export default Achievement;
