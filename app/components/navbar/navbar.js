"use client";

import { useState, useEffect } from "react";
import logo1 from "../../assets/images/logo1.png";
import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  const [navBtn, setNavBtn] = useState([]);
  const [navMenu, setNavMenu] = useState([]);
  const [lang, setLang] = useState([]);
  // const [isLoading, setLoading] = useState(true)



  // button for navbar
  useEffect(() => {
    fetch("http://birlatyres.viaconprojects.com:1337/api/header")
      .then((res) => res.json())
      .then((header) => {
        setNavBtn(header.data.attributes.button);
        setLang(header.data.attributes.language.dropdown_item);
        setNavMenu(header.data.attributes.menu.data.attributes.menu);
        // console.log(navBtn);
        // setLoading(false)
      });
  }, []);

  // // language dropdown
  // useEffect(() => {
  //   fetch("http://birlatyres.viaconprojects.com:1337/api/header")
  //     .then((res) => res.json())
  //     .then((lang) => {
  //       setLang(lang.data.attributes.language.dropdown_item);
  //       // console.log(navLang);
  //       // setLoading(false)
  //     });
  // }, []);



// menu dropdown
  // useEffect(() => {
  //   fetch("http://birlatyres.viaconprojects.com:1337/api/header")
  //     .then((res) => res.json())
  //     .then((navMenus) => {
  //       setNavMenu(navMenus.data.attributes.menu.data.attributes.menu);
  //       // console.log(setNavMenu);
  //       // setLoading(false)
  //     });
  // }, []);

  return (
    <div className="nav-main">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center relative">
          <div className="navbar-start flex gap-4 items-center">
            <div className="flex gap-2 items-center w-fit">
              {navBtn.map((btn) => (
                <Link
                  href="/"
                  style={{ backgroundColor: `${btn.color}` }}
                  className="primary-btn"
                >
                  {btn.button_link.name}
                </Link>
              ))}
              {/* <button className="primary-btn">Find a Tyre</button>
              <button className="secondary-btn">Find a Dealer</button> */}
            </div>
            <div className="language-sec">
              <select className="w-[50px] capitalize" name="language" id="language">
                {lang.map((lang) =>(
                  <option className="">{lang.slug}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="navbar-center">
            <ul className="menu menu-horizontal relative text-lg lg:gap-4 xl:gap-7 hidden lg:flex p-0">
              {navMenu.map((navMenu) => (
                <li className="nav-drop group">
                  <Link href={`/${navMenu.link}`} className="nav-links nav-hov">
                    {navMenu.menu_item.name}
                    {navMenu.sub_menu_item.length > 0 && (
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
                    )}
                  </Link>
                  {navMenu.sub_menu_item.length > 0 && (
                    <ul className="center-dropdown">
                      {navMenu.sub_menu_item.map((subMenu) => (
                        <li>
                          <Link href={`/${subMenu.link}`} className="drop-list">
                            {subMenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* <ul className="center-dropdown">
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
              </ul> */}
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
