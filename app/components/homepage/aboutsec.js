import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/about-img1.jpg";
import img2 from "../../assets/images/about-img2.jpg";

export default function Aboutsec() {
  return (
    <section className="about-sec mt-[80px]">
      <div className="container mx-auto">
        <div className="about-main">
          <span className="section-heading">company brief</span>
          <h3 className="section-title">About us</h3>
          <div class="flex gap-[50px] mt-8">
            <div class="about-img-sec w-[45%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <figure className="w-full h-[200px]">
                  <Image
                    src={img1}
                    alt="card"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img2}
                    alt="card"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img1}
                    alt="card"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img2}
                    alt="card"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </figure>
              </div>
            </div>
            <div className="about-desc-sec w-[55%]">
              <h2 className="about-heading">
                The journey of the global innovative tyre conglomerate.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-6">
                <div className="about-usp">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" fill="#2E3192" />
                  </svg>
                  <h2 className="about-usp-title">Special Financing Offers</h2>
                  <p className="about-usp-detail">Lorem ipsum dolor sit amet, contur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
