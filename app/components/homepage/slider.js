"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import GradualSpacing from "@/components/GradualSpacing";
import LetterPullup from "@/components/LetterPullup";

export default function slider() {
  return (
    <div>
      <Swiper
        loop={true}
        speed={2000}
        autoplay={{
          delay: 4000,
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
                {/* <h2 className="hero-sec-heading">TBB & ULT Tyres</h2> */}
                <GradualSpacing
                  className="hero-sec-heading"
                  text="TBB & ULT Tyres"
                />
                {/* <p className="section-subheading">
                  Fortifying Commercial Vehicle
                </p> */}
                <LetterPullup
                  className="section-subheading"
                  words={"Fortifying Commercial Vehicle"}
                  delay={0.05}
                />
                <Link className="explore-btn" href="">
                  Explore Now
                </Link>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              src={
                "https://videocdn.cdnpk.net/videos/d0db0570-dc13-4dae-8029-9db88e88e580/horizontal/previews/watermarked/large.mp4"
              }
              loop
              autoPlay
              muted
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-center">
              <div className="swiper-card relative z-10 container mx-auto">
                <h2 className="hero-sec-heading">OTR Tyre</h2>
                <p className="section-subheading">
                  Designed for Durability and Strength
                </p>
                <Link className="explore-btn" href="">
                  Explore Now
                </Link>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              src={"https://assets.mixkit.co/videos/45906/45906-720.mp4"}
              loop
              autoPlay
              muted
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-center">
              <div className="swiper-card relative z-10 container mx-auto">
                <h2 className="hero-sec-heading">Agriculture Tyres</h2>
                <p className="section-subheading">
                  The Power To strengthen your field
                </p>
                <Link className="explore-btn" href="">
                  Explore Now
                </Link>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              src={
                "https://videos.pexels.com/video-files/6685779/6685779-hd_1920_1080_30fps.mp4"
              }
              loop
              autoPlay
              muted
            ></video>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
