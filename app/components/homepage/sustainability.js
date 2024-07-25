"use client";

import React from "react";

export default function Sustainability() {
  return (
    <section className="sustainability-sec mt-[100px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          <span className="section-heading">go green</span>
          <h3 className="section-title">Sustainability</h3>
            <video
              className="w-full h-full rounded-[20px] mt-6 aspect-[28/9]"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/vid5.mp4"} type="video/mp4" />
            </video>
          <p className="text-[#3D434C] text-[18px] font-medium leading-[1.7] mt-6">
            Lorem ipsum dolor sit amet, contur adipiscing elit. Maecenas
            dignissim justo eget nulla rutrum molestie et. Lorem ipsum dolor sit
            amet, contur adipiscing elit. Maecenas dignissim justo eget nulla
            rutrum molestie et. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}
