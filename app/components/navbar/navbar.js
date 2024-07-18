"use client";

import { useState, useEffect } from "react";
import logo1 from "../../assets/images/logo1.png";
import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  // const [active, setActive] = useState("change");
  const [navBtn, setNavBtn] = useState([]);
  const [navMenu, setNavMenu] = useState([]);
  const [lang, setLang] = useState([]);
  // const [isLoading, setLoading] = useState(true)

  // const openNavMenu = () => {
  //   if (active !== "set-change") setActive("set-change");
  //   else setActive("change");
  // };

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

  // if (isLoading) return <p>Loading...</p>

  return (
    <div className="nav-main">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center relative">
          <div className="navbar-start">
            <div class="hidden lg:flex gap-4 items-center">
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
              </div>

              <div className="language-sec">
                <select
                  className="w-[50px] capitalize"
                  name="language"
                  id="language"
                >
                  {lang.map((lang) => (
                    <option className="">{lang.slug}</option>
                  ))}
                </select>
              </div>
            </div>
            <button>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.167 21.0003H5.83366C5.13366 21.0003 4.66699 20.5337 4.66699 19.8337C4.66699 19.1337 5.13366 18.667 5.83366 18.667H15.167C15.867 18.667 16.3337 19.1337 16.3337 19.8337C16.3337 20.5337 15.867 21.0003 15.167 21.0003Z"
                  fill="#1A1D21"
                />
                <path
                  d="M15.167 21.0003H5.83366C5.13366 21.0003 4.66699 20.5337 4.66699 19.8337C4.66699 19.1337 5.13366 18.667 5.83366 18.667H15.167C15.867 18.667 16.3337 19.1337 16.3337 19.8337C16.3337 20.5337 15.867 21.0003 15.167 21.0003Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M15.167 21.0003H5.83366C5.13366 21.0003 4.66699 20.5337 4.66699 19.8337C4.66699 19.1337 5.13366 18.667 5.83366 18.667H15.167C15.867 18.667 16.3337 19.1337 16.3337 19.8337C16.3337 20.5337 15.867 21.0003 15.167 21.0003Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M15.167 21.0003H5.83366C5.13366 21.0003 4.66699 20.5337 4.66699 19.8337C4.66699 19.1337 5.13366 18.667 5.83366 18.667H15.167C15.867 18.667 16.3337 19.1337 16.3337 19.8337C16.3337 20.5337 15.867 21.0003 15.167 21.0003Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M22.167 15.1663H5.83366C5.13366 15.1663 4.66699 14.6997 4.66699 13.9997C4.66699 13.2997 5.13366 12.833 5.83366 12.833H22.167C22.867 12.833 23.3337 13.2997 23.3337 13.9997C23.3337 14.6997 22.867 15.1663 22.167 15.1663Z"
                  fill="#1A1D21"
                />
                <path
                  d="M22.167 15.1663H5.83366C5.13366 15.1663 4.66699 14.6997 4.66699 13.9997C4.66699 13.2997 5.13366 12.833 5.83366 12.833H22.167C22.867 12.833 23.3337 13.2997 23.3337 13.9997C23.3337 14.6997 22.867 15.1663 22.167 15.1663Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M22.167 15.1663H5.83366C5.13366 15.1663 4.66699 14.6997 4.66699 13.9997C4.66699 13.2997 5.13366 12.833 5.83366 12.833H22.167C22.867 12.833 23.3337 13.2997 23.3337 13.9997C23.3337 14.6997 22.867 15.1663 22.167 15.1663Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M22.167 15.1663H5.83366C5.13366 15.1663 4.66699 14.6997 4.66699 13.9997C4.66699 13.2997 5.13366 12.833 5.83366 12.833H22.167C22.867 12.833 23.3337 13.2997 23.3337 13.9997C23.3337 14.6997 22.867 15.1663 22.167 15.1663Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M22.167 9.33333H12.8337C12.1337 9.33333 11.667 8.86667 11.667 8.16667C11.667 7.46667 12.1337 7 12.8337 7H22.167C22.867 7 23.3337 7.46667 23.3337 8.16667C23.3337 8.86667 22.867 9.33333 22.167 9.33333Z"
                  fill="#1A1D21"
                />
                <path
                  d="M22.167 9.33333H12.8337C12.1337 9.33333 11.667 8.86667 11.667 8.16667C11.667 7.46667 12.1337 7 12.8337 7H22.167C22.867 7 23.3337 7.46667 23.3337 8.16667C23.3337 8.86667 22.867 9.33333 22.167 9.33333Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M22.167 9.33333H12.8337C12.1337 9.33333 11.667 8.86667 11.667 8.16667C11.667 7.46667 12.1337 7 12.8337 7H22.167C22.867 7 23.3337 7.46667 23.3337 8.16667C23.3337 8.86667 22.867 9.33333 22.167 9.33333Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M22.167 9.33333H12.8337C12.1337 9.33333 11.667 8.86667 11.667 8.16667C11.667 7.46667 12.1337 7 12.8337 7H22.167C22.867 7 23.3337 7.46667 23.3337 8.16667C23.3337 8.86667 22.867 9.33333 22.167 9.33333Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>
            </button>
            <div class="mix bg-red-600 absolute w-full">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos magni saepe tempora autem debitis fugiat, eius
                nostrum sapiente cupiditate, assumenda facere quae, odio modi
                explicabo? Ut quae aliquam cum beatae voluptate officiis amet
                voluptas laudantium explicabo molestias accusamus praesentium
                debitis repellat quasi quisquam facilis exercitationem, natus
                quod ad, nostrum maxime soluta quis. Velit atque beatae
                recusandae ut minima obcaecati? Excepturi, aperiam. Non
                doloribus fugiat officiis laudantium facere fugit impedit atque
                a blanditiis quibusdam? Tempora rem sit repudiandae corrupti.
                Error sunt eveniet porro consequuntur ipsa accusantium fugiat
                quam modi tenetur quos dolorem laudantium quae odit maxime
                laboriosam, neque fugit eaque beatae veniam qui itaque enim,
                dolorum dolore! Dolorem, quis repellendus excepturi vitae,
                officia sunt incidunt eius veniam minima deleniti nesciunt ea.
                Cumque molestiae illo quibusdam consequatur dicta amet ad sed
                doloribus expedita eos nobis officia, illum odio fuga ratione
                minus in vitae magnam obcaecati at quas? Rem officiis ducimus
                veniam, ipsam dignissimos, ea ullam accusamus labore dolorum
                assumenda obcaecati recusandae eos quia? Sequi dolor nobis
                deleniti. Et excepturi corrupti quae cum, odit commodi natus
                praesentium. Voluptatum veritatis tempore dicta velit
                consectetur ut inventore laboriosam nesciunt corporis tenetur
                mollitia, fugit suscipit sunt fuga nam veniam. Autem velit
                numquam, minima architecto sint et!
              </p>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal relative text-lg lg:gap-4 xl:gap-7 p-0">
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
      </div>
    </div>
  );
}
