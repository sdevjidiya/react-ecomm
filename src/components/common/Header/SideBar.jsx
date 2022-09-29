import React from 'react'

import MobileMenu from "./MobileMenu"

import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <React.Fragment>
      <aside className="slide-bar">
        <div className="offset-sidebar">
          <Link className="hamburger-1 mobile-hamburger-1 ml--30" to="#">
            <span>
              <i className="rt-xmark" />
            </span>
          </Link>
        </div>
        {/* offset-sidebar start */}
        <div className="offset-sidebar-main">
          <div className="offset-widget mb-40">
            <div className="info-widget">
              <img src="assets/images/logo1.svg" alt="" />
              <p className="mb-30">
                We must explain to you how all seds this mistakens idea denouncing
                pleasures and praising account.
              </p>
            </div>
            <div className="info-widget info-widget2">
              <h4 className="offset-title mb-20">Get In Touch </h4>
              <ul>
                <li className="info phone">
                  <Link to="tel:78090790890208806803">
                    780 907 908 90, 208 806 803
                  </Link>
                </li>
                <li className="info email">
                  <Link to="email:info@webmail.com">info@webmail.com</Link>
                </li>
                <li className="info web">
                  <Link to="/">www.webexample.com</Link>
                </li>
                <li className="info location">13/A, New Pro State, NYC</li>
              </ul>
              <div className="offset-social-link">
                <h4 className="offset-title mb-20">Follow Us </h4>
                <ul className="social-icon">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-behance" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* offset-sidebar end */}
        {/* side-mobile-menu start */}
        <nav className="side-mobile-menu side-mobile-menu1">
          <ul id="mobile-menu-active">
            <MobileMenu />
          </ul>
        </nav>
        <div className="header-action-items header-action-items1 header-action-items-side">
          <div className="search-part">
            <div className="search-icon action-item icon">
              <i className="rt-search" />
            </div>
            <div className="search-input-area">
              <div className="container">
                <div className="search-input-inner">
                  <select id="custom-select">
                    <option value="hide">All Catagory</option>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="shoes">Shoes</option>
                    <option value="shoes">Glasses</option>
                    <option value="shoes">Bags</option>
                    <option value="shoes">Assesories</option>
                  </select>
                  <div className="input-div">
                    <div className="search-input-icon">
                      <i className="rt-search mr--10" />
                    </div>
                    <input
                      className="search-input"
                      type="text"
                      placeholder="Search by keyword or #"
                    />
                  </div>
                  <div className="search-close-icon">
                    <i className="rt-xmark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart action-item">
            <div className="cart-nav">
              <div className="cart-icon icon">
                <i className="rt-cart" />
                <span className="wishlist-dot icon-dot">3</span>
              </div>
            </div>
          </div>
          <div className="wishlist action-item">
            <div className="favourite-icon icon">
              <i className="rt-heart" />
              <span className="cart-dot icon-dot">0</span>
            </div>
          </div>
          <Link to="/login" className="account">
            <i className="rt-user-2" />
          </Link>
        </div>
        {/* side-mobile-menu end */}
      </aside>
    </React.Fragment>
  )
}
