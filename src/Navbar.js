import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [show, handleShow] = useState(false)

  // handle scroll and navbar background
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className="nav__logo"
      />
      <div className="nav__avatar">🌠</div>
    </div>
  )
}

export default Navbar
