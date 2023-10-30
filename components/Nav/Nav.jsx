"use client"

import Image from 'next/image'
import React from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    document.addEventListener("click", e => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]")
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
      console.log(e.target.closest('[data-dropdown]'))
      let currentDropdown
      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active')
      }
      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
      })
    })
  
  return (
    <nav>
      <div className="top_nav">
        <p className="phone_number">
          <Image
            src="/assets/images/phone.png"
            alt="cart"
            width={20}
            height={20}
          />
          +000121212943
        </p>
        <p className='nav_offer'>
          Get 50% Off on Selected items <span className="pl-2 pr-2">|</span>{" "}
          <a href="/" className="hover:underline">
            Shop Now
          </a>
        </p>
        <div className="lang_location">
          <div className="dropdown" data-dropdown>
            <button className="dropdown_btn" data-dropdown-button>
              Eng
              <span className="pl-1 pointer-events-none">
                <FontAwesomeIcon icon={faAngleDown} size="xs" />
              </span>
            </button>
            <div className="dropdown_menu text-black flex flex-col">
              <a href="/">عربي</a>
              <a href="/">Spanish</a>
              <a href="/">Francais</a>
            </div>
          </div>
          <div className="dropdown" data-dropdown>
            <button className="dropdown_btn" data-dropdown-button>
              Location
              <span className="pl-1 pointer-events-none">
                <FontAwesomeIcon icon={faAngleDown} size="xs" />
              </span>
            </button>
            <div className="dropdown_menu text-black flex flex-col">
              <a href="/">Egypt</a>
              <a href="/">USA</a>
              <a href="/">UK</a>
            </div>
          </div>
        </div>
      </div>
      <ul>
        {/* Icon & title */}
        <li className="icon">
          <a href="/">
            <Image
              src="/assets/images/trolley.png"
              alt="cart"
              width={30}
              height={30}
            />
            Shopcart
          </a>
        </li>
        {/* navigation buttons */}
        <div className="nav_buttons">
          <li>
            <div className="dropdown" data-dropdown>
              <button className="dropdown_btn" data-dropdown-button>
                Categories
                <span className="align-middle pl-2 pointer-events-none">
                  <FontAwesomeIcon icon={faAngleDown} size="xs" />
                </span>
              </button>
              <div className="dropdown_menu">
                <a href="/">TVs</a>
                <a href="/">Cameras</a>
                <a href="/">Mobiles</a>
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
        <div className="search_bar">
          <input type="text" placeholder="Search Product" maxLength={70} />
          <Image
            src="/assets/images/search2.png"
            alt="cart"
            width={0}
            height={0}
          />
        </div>
        {/* account/profile */}
        <li className="account">
          <a href="/">
            <Image
              src="/assets/images/account.png"
              alt="cart"
              width={25}
              height={20}
            />
            Account
          </a>
        </li>
        {/* Cart */}
        <li className="cart">
          <a href="/">
            <Image
              src="/assets/images/addToCart.png"
              alt="cart"
              width={25}
              height={20}
            />
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav