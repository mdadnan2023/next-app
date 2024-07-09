"use client";

import { useState, useEffect } from "react";
import logo1 from "../../assets/images/logo1.png";
import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  const [menu, setMenu] = useState([]);
  // const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://birlatyres.viaconprojects.com:1337/api/header")
      .then((res) => res.json())
      .then((header) => {
        setMenu(header.data.attributes.button);
        console.log(menu);
        // setLoading(false)
      });
  }, []);

  return (
    <div className="nav-main">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center relative">
          <div className="navbar-start flex gap-4 items-center">
            <div className="flex gap-2 items-center w-fit">
              <button className="primary-btn">Find a Tyre</button>
              <button className="secondary-btn">Find a Dealer</button>
            </div>
            <div className="language-sec flex items-center gap-1">
              En
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0.5L6 5.5L1 0.5"
                  stroke="#606977"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.771488 14.9991C0.564277 15.3577 0.687051 15.8165 1.04571 16.0237C1.40437 16.2309 1.8631 16.1081 2.07031 15.7495L0.771488 14.9991ZM15.9295 15.7496C16.1367 16.1083 16.5955 16.231 16.9541 16.0238C17.3128 15.8166 17.4356 15.3579 17.2284 14.9993L15.9295 15.7496ZM2.07031 15.7495C2.77287 14.5334 3.78309 13.5236 4.99946 12.8216L4.24965 11.5224C2.80529 12.3561 1.60574 13.5551 0.771488 14.9991L2.07031 15.7495ZM4.99946 12.8216C6.21584 12.1196 7.59554 11.75 8.99996 11.75L8.99998 10.25C7.33232 10.25 5.69402 10.6888 4.24965 11.5224L4.99946 12.8216ZM8.99996 11.75C10.4044 11.75 11.7841 12.1196 13.0004 12.8217L13.7503 11.5225C12.3059 10.6889 10.6676 10.25 8.99998 10.25L8.99996 11.75ZM13.0004 12.8217C14.2168 13.5237 15.227 14.5335 15.9295 15.7496L17.2284 14.9993C16.3942 13.5552 15.1946 12.3562 13.7503 11.5225L13.0004 12.8217ZM13.2499 6C13.2499 8.34723 11.3472 10.25 8.99997 10.25V11.75C12.1756 11.75 14.7499 9.17562 14.7499 6H13.2499ZM8.99997 10.25C6.65274 10.25 4.74988 8.34719 4.74988 6H3.24988C3.24988 9.17565 5.82435 11.75 8.99997 11.75V10.25ZM4.74988 6C4.74988 3.65279 6.65267 1.75 8.99988 1.75V0.25C5.82424 0.25 3.24988 2.82436 3.24988 6H4.74988ZM8.99988 1.75C11.3471 1.75 13.2499 3.65279 13.2499 6H14.7499C14.7499 2.82436 12.1755 0.25 8.99988 0.25V1.75Z"
                fill="#606977"
              />
            </svg>
          </div>

          <div className="navbar-center">
            <ul className="menu menu-horizontal relative text-lg lg:gap-4 xl:gap-7 hidden lg:flex p-0">
              <li className="nav-drop group">
                <a href="#" className="nav-links nav-hov">
                  About Us
                  <svg
                    className="nav-arrow"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="#333333"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00045 3.44752L8.30032 0.147705L9.24312 1.09051L5.00045 5.33319L0.757812 1.09051L1.70063 0.147705L5.00045 3.44752Z"
                      fill=""
                    />
                  </svg>
                </a>
                <ul className="center-dropdown">
                  <li>
                    <a className="drop-list" href="">
                      MARKETING
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      GREEN
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      FINANCE
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      ENTREPRENEURSHIP
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      ENEGRY
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      AUTOMOTIVE
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      REAL ESTATE
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      SMALL BUSINESS
                    </a>
                  </li>
                  <li>
                    <a className="drop-list" href="">
                      STARTUPS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-drop group">
                <a href="#" className="nav-links nav-hov">
                  Categories
                  <svg
                    className="nav-arrow"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="#333333"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00045 3.44752L8.30032 0.147705L9.24312 1.09051L5.00045 5.33319L0.757812 1.09051L1.70063 0.147705L5.00045 3.44752Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-drop group">
                <a href="#" className="nav-links nav-hov">
                  Sustainability
                  <svg
                    className="nav-arrow"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="#333333"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00045 3.44752L8.30032 0.147705L9.24312 1.09051L5.00045 5.33319L0.757812 1.09051L1.70063 0.147705L5.00045 3.44752Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-drop group">
                <a href="#" className="nav-links nav-hov">
                  Tyre Advice
                </a>
              </li>
              <li className="nav-drop group">
                <a href="#" className="nav-links nav-hov">
                  contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-2 md:gap-3 group flex justify-end items-center w-[25%]">
            <Link href="/">
              <figure className="rounded-none m-0 w-[136px] h-[60px]">
                <Image
                  src={logo1}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </figure>
            </Link>
          </div>
          
        </div>
        {/* {menu.map((btn) => (
          <h2 style={{ color: `${btn.color}` }}>{btn.title}</h2>
        ))} */}
      </div>
    </div>
  );
}
