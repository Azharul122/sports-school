import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";



const Corousel = () => {

    return (
        <div className="carousel py-10">
            
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto"
      >

        <SwiperSlide className="bg-[url('https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/swimming.jpg')]">
            <img src="https://a.espncdn.com/combiner/i?img=/photo/2023/0227/r1137254_1296x729_16-9.jpg" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.2)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Badminton Academy</p>
                        <p className="text-xs md:text-lg">
Since its inception in 2004, Singapore Sports School’s Swimming Academy has shown itself to be the pipeline for the national team having 
produced more than 80 national representatives for Singapore.</p>

                <Link to={""} className="px-1 md:px-3 md:py-2 py-1  rounded bg-slate-600 text-xs md:text-lg">Enroll Now</Link>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className="bg-[url('https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/swimming.jpg')]">
            <img src="https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/bowling.jpg" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.2)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Bowling Academy</p>
                        <p className="text-xs md:text-lg">
Since its inception in 2004, Singapore Sports School’s Swimming Academy has shown itself to be the pipeline for the national team having 
produced more than 80 national representatives for Singapore.</p>

                <Link to={""} className="px-1 md:px-3 md:py-2 py-1  rounded bg-slate-600 text-xs md:text-lg">Enroll Now</Link>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/swimming.jpg')]">
            <img src="https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/swimming.jpg" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.2)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Swimming Academy</p>
                        <p className="text-xs md:text-lg">
Since its inception in 2004, Singapore Sports School’s Swimming Academy has shown itself to be the pipeline for the national team having 
produced more than 80 national representatives for Singapore.</p>

                <Link to={""} className="px-1 md:px-3 md:py-2 py-1  rounded bg-slate-600 text-xs md:text-lg">Enroll Now</Link>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className="bg-[url('https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/swimming.jpg')]">
            <img src="https://www.sportsschool.edu.sg/qql/slot/u262/2021/Sports/Sports%20Programme/PROGRAMMES%20AND%20COMPETITIONS/table%20tennis.jpg" alt="" />
            <div className="absolute flex justify-center items-center w-full h-full text-white">
                <div className="bg-[rgba(0,0,0,0.2)] w-[80%] h-[80%]  flex flex-col items-center justify-center gap-2">
                        <p className="text-lg md:text-2xl">Table Tennis Academy</p>
                        <p className="text-xs md:text-lg">
Since its inception in 2004, Singapore Sports School’s Swimming Academy has shown itself to be the pipeline for the national team having 
produced more than 80 national representatives for Singapore.</p>

                <Link to={""} className="px-1 md:px-3 md:py-2 py-1  rounded bg-slate-600 text-xs md:text-lg">Enroll Now</Link>
                </div>
            </div>
            </SwiperSlide>
    
      </Swiper>

        </div>
    );
};

export default Corousel;