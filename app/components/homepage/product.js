"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import tyre1 from "../../assets/images/tyre1.png";
import tyre2 from "../../assets/images/tyre2.png";
import tyre3 from "../../assets/images/tyre3.png";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Product() {
  return (
    <section className="product-sec mt-[100px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec flex justify-between items-end">
          <div className="new">
            <span className="section-heading">our products</span>
            <h3 className="section-title">Featuring our product range</h3>
          </div>
          <div class="cat-btn-sec flex items-center gap-3">
            <button className="cat-btn">TBB</button>
            <button className="cat-btn">Otr</button>
            <button className="cat-btn">Agriculture</button>
          </div>
        </div>
        <div class="product-slider mt-[100px]">
          <Swiper
          navigation={true} modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper !overflow-visible"
          >
            <SwiperSlide>
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre1}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3117_6229)">
                        <path
                          d="M37.5145 47.0912C34.5637 47.0912 32.1716 44.6991 32.1716 41.7483C32.1716 38.7975 34.5637 36.4054 37.5145 36.4054C40.4653 36.4054 42.8574 38.7975 42.8574 41.7483C42.8574 44.6991 40.4653 47.0912 37.5145 47.0912Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M-0.000168505 0.691711H28.5713V25.6918H-0.000168505V0.691711Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M8.70824 45.526C6.62168 43.4395 6.62168 40.0566 8.70824 37.97C10.7947 35.8835 14.1777 35.8835 16.2642 37.97C18.3507 40.0566 18.3507 43.4395 16.2642 45.526C14.1777 47.6126 10.7947 47.6126 8.70824 45.526Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M32.1428 29.2614V7.83282H42.8571L50 22.1185V39.9757H46.2522C45.4305 35.9012 41.8309 32.8328 37.5143 32.8328C33.1975 32.8328 29.5976 35.9012 28.7762 39.9757H21.2241C20.4024 35.9012 16.8027 32.8328 12.486 32.8328C8.16937 32.8328 4.56947 35.9012 3.74802 39.9757H0.000310103V29.2614H32.1428ZM35.7143 23.876H48.2143L41.0714 9.59036H35.7143V23.876Z"
                          fill="#2E3192"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3117_6229">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="matrix(-1 0 0 1 50 0)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2>Truck Bus Bias</h2>
                  <p>Fortifying Commercial Vehicles</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre2}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3117_6229)">
                        <path
                          d="M37.5145 47.0912C34.5637 47.0912 32.1716 44.6991 32.1716 41.7483C32.1716 38.7975 34.5637 36.4054 37.5145 36.4054C40.4653 36.4054 42.8574 38.7975 42.8574 41.7483C42.8574 44.6991 40.4653 47.0912 37.5145 47.0912Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M-0.000168505 0.691711H28.5713V25.6918H-0.000168505V0.691711Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M8.70824 45.526C6.62168 43.4395 6.62168 40.0566 8.70824 37.97C10.7947 35.8835 14.1777 35.8835 16.2642 37.97C18.3507 40.0566 18.3507 43.4395 16.2642 45.526C14.1777 47.6126 10.7947 47.6126 8.70824 45.526Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M32.1428 29.2614V7.83282H42.8571L50 22.1185V39.9757H46.2522C45.4305 35.9012 41.8309 32.8328 37.5143 32.8328C33.1975 32.8328 29.5976 35.9012 28.7762 39.9757H21.2241C20.4024 35.9012 16.8027 32.8328 12.486 32.8328C8.16937 32.8328 4.56947 35.9012 3.74802 39.9757H0.000310103V29.2614H32.1428ZM35.7143 23.876H48.2143L41.0714 9.59036H35.7143V23.876Z"
                          fill="#2E3192"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3117_6229">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="matrix(-1 0 0 1 50 0)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2>Ultra Miler Platina</h2>
                  <p>Lorem Ipsum product short details</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre3}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3117_6229)">
                        <path
                          d="M37.5145 47.0912C34.5637 47.0912 32.1716 44.6991 32.1716 41.7483C32.1716 38.7975 34.5637 36.4054 37.5145 36.4054C40.4653 36.4054 42.8574 38.7975 42.8574 41.7483C42.8574 44.6991 40.4653 47.0912 37.5145 47.0912Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M-0.000168505 0.691711H28.5713V25.6918H-0.000168505V0.691711Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M8.70824 45.526C6.62168 43.4395 6.62168 40.0566 8.70824 37.97C10.7947 35.8835 14.1777 35.8835 16.2642 37.97C18.3507 40.0566 18.3507 43.4395 16.2642 45.526C14.1777 47.6126 10.7947 47.6126 8.70824 45.526Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M32.1428 29.2614V7.83282H42.8571L50 22.1185V39.9757H46.2522C45.4305 35.9012 41.8309 32.8328 37.5143 32.8328C33.1975 32.8328 29.5976 35.9012 28.7762 39.9757H21.2241C20.4024 35.9012 16.8027 32.8328 12.486 32.8328C8.16937 32.8328 4.56947 35.9012 3.74802 39.9757H0.000310103V29.2614H32.1428ZM35.7143 23.876H48.2143L41.0714 9.59036H35.7143V23.876Z"
                          fill="#2E3192"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3117_6229">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="matrix(-1 0 0 1 50 0)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2>Road Miler</h2>
                  <p>Lorem Ipsum product short details</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre1}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3117_6229)">
                        <path
                          d="M37.5145 47.0912C34.5637 47.0912 32.1716 44.6991 32.1716 41.7483C32.1716 38.7975 34.5637 36.4054 37.5145 36.4054C40.4653 36.4054 42.8574 38.7975 42.8574 41.7483C42.8574 44.6991 40.4653 47.0912 37.5145 47.0912Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M-0.000168505 0.691711H28.5713V25.6918H-0.000168505V0.691711Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M8.70824 45.526C6.62168 43.4395 6.62168 40.0566 8.70824 37.97C10.7947 35.8835 14.1777 35.8835 16.2642 37.97C18.3507 40.0566 18.3507 43.4395 16.2642 45.526C14.1777 47.6126 10.7947 47.6126 8.70824 45.526Z"
                          fill="#2E3192"
                        ></path>
                        <path
                          d="M32.1428 29.2614V7.83282H42.8571L50 22.1185V39.9757H46.2522C45.4305 35.9012 41.8309 32.8328 37.5143 32.8328C33.1975 32.8328 29.5976 35.9012 28.7762 39.9757H21.2241C20.4024 35.9012 16.8027 32.8328 12.486 32.8328C8.16937 32.8328 4.56947 35.9012 3.74802 39.9757H0.000310103V29.2614H32.1428ZM35.7143 23.876H48.2143L41.0714 9.59036H35.7143V23.876Z"
                          fill="#2E3192"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3117_6229">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="matrix(-1 0 0 1 50 0)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2>Truck Bus Bias</h2>
                  <p>Fortifying Commercial Vehicles</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
