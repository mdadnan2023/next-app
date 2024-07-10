"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import truck1 from "../../assets/images/truck1.jpg";
import truck2 from "../../assets/images/truck2.jpg";
import truck3 from "../../assets/images/truck3.jpg";

export default function imageslider() {
  return (
    <div>
      <Swiper
        loop={true}
        speed={2000}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-center">
              <div className="swiper-card relative z-10 container mx-auto">
                <h2 className="section-heading">TBB & ULT Tyres</h2>
                <p className="section-subheading">
                  Fortifying Commercial Vehicle
                </p>
                <Link className="explore-btn" href="">
                  Explore Now
                </Link>
              </div>
            </div>
            <Image
              src={truck1}
              alt="truck1"
              className="absolute top-0 w-full h-fit object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-center">
              <div className="swiper-card relative z-10 container mx-auto">
                <h2 className="section-heading">TBB & ULT Tyres</h2>
                <p className="section-subheading">
                  Fortifying Commercial Vehicle
                </p>
                <Link className="explore-btn" href="">
                  Explore Now
                </Link>
              </div>
            </div>
            <Image
              src={truck2}
              alt="logo"
              className="absolute top-0 w-full h-fit object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-center">
              <div className="swiper-card relative z-10 container mx-auto">
                <h2 className="section-heading">TBB & ULT Tyres</h2>
                <p className="section-subheading">
                  Fortifying Commercial Vehicle
                </p>
                <Link className="explore-btn" href="">
                  Explore Now
                </Link>
              </div>
            </div>
            <Image
              src={truck3}
              alt="logo"
              className="absolute top-0 w-full h-fit object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
