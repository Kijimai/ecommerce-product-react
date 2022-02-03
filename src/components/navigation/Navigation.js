import React from "react"
import CartBtn from "../cart/CartBtn"
import { navButtonImages } from "../../utils/data"
import { currentUser } from "../../utils/data"
import logoSrc from "../../images/logo.svg"
const { navOpen, navClose } = navButtonImages

const linkNames = ["collections", "men", "women", "about", "contact"]

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__inner-container">
        <div className="navigation__button-container">
          <button>
            <img src={navOpen} alt="" />
          </button>
        </div>
        <div className="logo-container">
          <img src={logoSrc} alt="sneakers company logo" className="logo" />
        </div>
        <div className="navigation__navLinks-container">
          <ul className="navigation__navLinks">
            {linkNames.map((link, index) => {
              return (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="navigation__user-controls-container">
          <button className="navigation__cart-btn">
            <CartBtn />
          </button>
          <button>
            <img src={currentUser.userImage} alt={currentUser.userName} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
