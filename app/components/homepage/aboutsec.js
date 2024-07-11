import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/about-img1.jpg";
import img2 from "../../assets/images/about-img2.jpg";

export default function aboutsec() {
  return (
    <section className="about-sec mt-[80px]">
      <div className="container mx-auto">
        <div className="about-upper-sec flex justify-between">
          <div className="about-heading-sec w-[45%]">
            <h3 className="section-title">About us</h3>
            <h2 className="section-heading">
              The journey of the global innovative tyre conglomerate. 
            </h2>
          </div>
          <div className="about-detail-sec w-[55%]">
            <p className="about-detail">
              Birla Tyres was established in 1991, and popularly known as one of
              the world-class tyre manufacturers. Birla Tyres has built a solid
              reputation for quality, strength and best in class tyres in
              different categories.
            </p>
            <Link className="read-btn" href="">
              Read more
            </Link>
          </div>
        </div>
        <div className="about-img-sec grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-10">
          <figure className="w-full h-[475px]">
            <Image
              src={img1}
              alt="card"
              className="w-full h-full object-cover rounded-[4px]"
            />
          </figure>
          <figure className="w-full h-[475px]">
            <Image
              src={img2}
              alt="card"
              className="w-full h-full object-cover rounded-[4px]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
