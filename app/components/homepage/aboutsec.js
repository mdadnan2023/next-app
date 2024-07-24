import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/mask1.png";
import img2 from "../../assets/images/mask2.png";
import img3 from "../../assets/images/mask3.png";
import img4 from "../../assets/images/mask4.png";
import tiger from "../../assets/images/tiger.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

export default function Aboutsec() {
  return (
    <section className="about-sec mt-[100px]">
      <div className="container mx-auto">
        <div className="about-main">
          <span className="section-heading">company brief</span>
          <h3 className="section-title">About us</h3>
          <div class="flex flex-col lg:flex-row gap-[50px] mt-8">
            <div class="about-img-sec w-[45%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[70px] relative">
                <figure className="about-centre-fig">
                  <Image
                    src={tiger}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img1}
                    alt="card"
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img2}
                    alt="card"
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img3}
                    alt="card"
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </figure>
                <figure className="w-full h-[200px]">
                  <Image
                    src={img4}
                    alt="card"
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </figure>
              </div>
            </div>
            <div className="about-desc-sec w-[55%]">
              <h2 className="about-heading">
                The journey of the global innovative tyre conglomerate.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
                <div className="about-usp">
                  <Image
                    src={icon1}
                    alt="card"
                    className="w-10 h-10 object-cover"
                  />

                  <h2 className="about-usp-title">Special Financing Offers</h2>
                  <p className="about-usp-detail">
                    Lorem ipsum dolor sit amet, contur adipiscing elit.
                  </p>
                </div>
                <div className="about-usp">
                  <Image
                    src={icon2}
                    alt="card"
                    className="w-10 h-10 object-cover"
                  />

                  <h2 className="about-usp-title">Special Financing Offers</h2>
                  <p className="about-usp-detail">
                    Lorem ipsum dolor sit amet, contur adipiscing elit.
                  </p>
                </div>
                <div className="about-usp">
                  <Image
                    src={icon3}
                    alt="card"
                    className="w-10 h-10 object-cover"
                  />

                  <h2 className="about-usp-title">Special Financing Offers</h2>
                  <p className="about-usp-detail">
                    Lorem ipsum dolor sit amet, contur adipiscing elit.
                  </p>
                </div>
                <div className="about-usp">
                  <Image
                    src={icon4}
                    alt="card"
                    className="w-10 h-10 object-cover"
                  />

                  <h2 className="about-usp-title">Special Financing Offers</h2>
                  <p className="about-usp-detail">
                    Lorem ipsum dolor sit amet, contur adipiscing elit.
                  </p>
                </div>
              </div>
              <Link href="" className="primary-btn w-fit mt-6 !px-6">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
