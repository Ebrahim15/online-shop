"use client"

import React from 'react'
import "./dropdown.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dropdown = ({title, icon, content}) => {
    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
  
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
    <div className="dropdown" data-dropdown>
      <button className="dropdown_btn" data-dropdown-button>
        {title}
        <span className="align-middle pl-2">
          <FontAwesomeIcon icon={icon} size="xs" />
        </span>
      </button>
      <div className="dropdown_menu">Dropdown Content</div>
    </div>
  );
}

export default Dropdown