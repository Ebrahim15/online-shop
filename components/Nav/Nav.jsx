"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [toggleCategoriesDropDownMenu, setToggleCategoriesDropDownMenu] =
    useState(false);
  const [toggleLangDropDownMenu, setToggleLangDropDownMenu] = useState(false);
  const [toggleLocationDropDownMenu, setToggleLocationDropDownMenu] =
    useState(false);
  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  document.addEventListener("click", (e) => {
    if (e.target !== document.getElementById("catgories-dropdown-btn")) {
      setToggleCategoriesDropDownMenu(false);
    }
    if (e.target !== document.getElementById("lang-dropdown-btn")) {
      setToggleLangDropDownMenu(false);
    }
    if (e.target !== document.getElementById("location-dropdown-btn")) {
      setToggleLocationDropDownMenu(false);
    }
  });

  return (
    <nav>
      {/* Top Nav */}
      <div className="bg-main text-white p-2 flex items-center justify-center xl:justify-between xl:px-10 ">
        <p className="hidden xl:flex xl:gap-3">
          <Image
            src="/assets/images/phone.png"
            alt="cart"
            width={20}
            height={20}
          />
          +000121212943
        </p>
        <p>
          Get 50% Off on Selected items <span className="pl-2 pr-2">|</span>{" "}
          <a href="/" className="hover:underline whitespace-normal">
            Shop Now
          </a>
        </p>
        <div className="hidden xl:flex xl:gap-5">
          <div className="dropdown">
            <button
              className="dropdown_btn"
              id="lang-dropdown-btn"
              onClick={() => setToggleLangDropDownMenu(!toggleLangDropDownMenu)}
            >
              Eng
              <span className="pl-1 pointer-events-none">
                <FontAwesomeIcon icon={faAngleDown} size="xs" />
              </span>
            </button>
            <div
              className={`${
                toggleLangDropDownMenu
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              } transition-opacity duration-300 text-black flex flex-col bg-white absolute drop-shadow-xl rounded overflow-hidden`}
            >
              <a
                href="/"
                className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
              >
                عربي
              </a>
              <a
                href="/"
                className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
              >
                Spanish
              </a>
              <a
                href="/"
                className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
              >
                Francais
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="dropdown_btn"
              id="location-dropdown-btn"
              onClick={() =>
                setToggleLocationDropDownMenu(!toggleLocationDropDownMenu)
              }
            >
              Location
              <span className="pl-1 pointer-events-none">
                <FontAwesomeIcon icon={faAngleDown} size="xs" />
              </span>
            </button>
            <div
              className={`${
                toggleLocationDropDownMenu
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              } transition-opacity duration-300 text-black flex flex-col bg-white absolute drop-shadow-xl rounded overflow-hidden`}
            >
              <a
                href="/"
                className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
              >
                Egypt
              </a>
              <a
                href="/"
                className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
              >
                USA
              </a>
              <a
                href="/"
                className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
              >
                UK
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <ul className="flex py-3 px-4 justify-between items-center xl:py-8 xl:px-16">
        {/* Icon & title */}
        <li className="text-xl">
          <a href="/" className="flex gap-3 text-main font-bold">
            <Image
              src="/assets/images/trolley.png"
              className="self-baseline"
              alt="cart "
              width={30}
              height={30}
            />
            Shopcart
          </a>
        </li>
        {/* navigation buttons */}
        <div className="hidden xl:flex gap-16">
          <li>
            <div className="dropdown" id="dropdown">
              <button
                className="dropdown_btn"
                id="catgories-dropdown-btn"
                onClick={() =>
                  setToggleCategoriesDropDownMenu(!toggleCategoriesDropDownMenu)
                }
              >
                Categories
                <span className="align-middle pl-2 pointer-events-none">
                  <FontAwesomeIcon icon={faAngleDown} size="xs" />
                </span>
              </button>
              <div
                className={`${
                  toggleCategoriesDropDownMenu ? "" : "hidden"
                } bg-white overflow-hidden absolute z-30 flex flex-col gap-1 drop-shadow-xl rounded`}
              >
                <a
                  href="/categories/furniture"
                  className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
                >
                  Furniture
                </a>
                <a
                  href="/categories/electronics"
                  className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
                >
                  Electronics
                </a>
                <a
                  href="/categories/clothes"
                  className="cursor-pointer px-3 py-1 hover:bg-hover-bg"
                >
                  Clothes
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="">Deals</a>
          </li>
          <li>
            <a href="">What's New</a>
          </li>
          <li>
            <a href="">Delivery</a>
          </li>
        </div>
        {/* Search bar */}
        <div className="hidden xl:flex items-center">
          <input type="text" placeholder="Search Product" maxLength={70} />
          <Image
            className="w-4 h-4"
            src="/assets/images/search2.png"
            alt="cart"
            width={0}
            height={0}
          />
        </div>
        <div className="hidden xl:flex gap-20">
          {/* account/profile */}
          <li>
            <a href="/" className="flex gap-2">
              <Image
                src="/assets/images/account.png"
                alt="cart"
                width={25}
                height={20}
              />
              {/* Account */}
            </a>
          </li>
          {/* Cart */}
          <li className="cart">
            <a href="/" className="flex gap-2">
              <Image
                src="/assets/images/addToCart.png"
                alt="cart"
                width={25}
                height={20}
              />
              {/* Cart */}
            </a>
          </li>
        </div>

        <div
          className="xl:hidden flex flex-col w-fit cursor-pointer hover:opacity-70 transition-opacity duration-300"
          onClick={() => setToggleNavMenu(!toggleNavMenu)}
        >
          <span className="h-1 px-3 m-[1px] rounded bg-main"></span>
          <span className="h-1 px-3 m-[1px] rounded bg-main"></span>
          <span className="h-1 px-3 m-[1px] rounded bg-main"></span>
        </div>
      </ul>

      {/* Small screens nav menu */}
      <div
        className={`${
          toggleNavMenu ? "" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 bg-white sm_nav_menu p-5 z-20 absolute h-full w-full bg-white flex flex-col`}
      >
        <div className="flex w-full justify-between">
          {/* Search bar */}
          <div className="search_bar_container grow">
            <input
              className=""
              type="text"
              placeholder="Search Product"
              maxLength={70}
            />
          </div>
          {/* User's Account & Cart  */}
          <div className="flex gap-7 relative z-50">
            {/* account/profile */}
            <a href="/" className="flex gap-2">
              <Image
                src="/assets/images/account.png"
                alt="cart"
                width={25}
                height={20}
              />
              {/* Account */}
            </a>
            {/* Cart */}
            <a href="/" className="flex gap-2">
              <Image
                src="/assets/images/addToCart.png"
                alt="cart"
                width={25}
                height={20}
              />
              {/* Cart */}
            </a>
          </div>
        </div>

        {/* navigation buttons */}
        <ul className="flex flex-col">
          <li>
            <button
              className="dropdown_btn"
              onClick={() =>
                setToggleCategoriesDropDownMenu(!toggleCategoriesDropDownMenu)
              }
            >
              Categories
              <span className="align-middle pl-2 pointer-events-none">
                <FontAwesomeIcon icon={faAngleDown} size="xs" />
              </span>
            </button>
            <div
              id="dropdown"
              className={`flex flex-col gap-3 p-3 ${
                toggleCategoriesDropDownMenu ? "flex" : "hidden"
              }`}
            >
              <a href="/" onClick={() => console.log(height)}>
                Electronics
              </a>
              <a href="/">Clothes</a>
              <a href="/">Furniture</a>
            </div>
          </li>
          <li>
            <a href="">Deals</a>
          </li>
          <li>
            <a href="">What's New</a>
          </li>
          <li>
            <a href="">Delivery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
