import React from "react";

import { Link } from "react-router-dom";

import TopHeader from "./TopHeader";
import SideBar from "./SideBar"
import Cart from "./Cart"
import Menu from "./Menu"
import { useSelector, useDispatch } from "react-redux";
export default function Index() {
  const cart = useSelector((state) => state);
  const DummyTopHeadObj = [
    { title: 'Open Door To A worlds Of Fashion' }, { title: 'Open Door To A worlds Of Fashion2' }
  ]

  const DummyItemsObj = cart;

  return (
    <React.Fragment>
      <div className="anywere anywere-home" />
      {/*================= Header Section Start Here =================*/}
      <header id="rtsHeader">
        <TopHeader data={DummyTopHeadObj} />
        <div className="header-topbar-menu-area">
          <div className="container">
            <div className="menu-area1">
              <div className="menu-item">
                <nav className="nav navbar">
                  <div className="navbar-menu">
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/my-account">My Account</Link>
                      </li>
                      <li>
                        <Link to="/whishlist">Whishlist</Link>
                      </li>
                      <li>
                        <Link to="/">Order Tracking</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-area-right-side">
                <div className="contact">
                  <i aria-hidden="true" className="fas fa-phone" />
                  Need help?{" "}
                  <strong>
                    Call us:
                    <Link to="call:0020500">+ 0020 500</Link>
                  </strong>
                </div>
                <div className="topbar-select-area">
                  <select className="topbar-select custom-select">
                    <option value="eng">English</option>
                    <option value="esp">Español</option>
                    <option value="ban">Bangla</option>
                  </select>
                  <select className="topbar-select custom-select2">
                    <option value="usd">USD</option>
                    <option value="eur">Euro</option>
                    <option value="tk">Taka</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-sticky">
          <div className="container">
            <div className="navbar-part navbar-part1">
              <div className="navbar-inner">
                <div className="left-side">
                  <div className="hamburger-1">
                    <Link to="#" className="nav-menu-link">
                      <span className="dot1" />
                      <span className="dot2" />
                      <span className="dot3" />
                      <span className="dot4" />
                      <span className="dot5" />
                      <span className="dot6" />
                      <span className="dot7" />
                      <span className="dot8" />
                      <span className="dot9" />
                    </Link>
                  </div>
                  <Link to="/" className="logo">
                    <img src="assets/images/logo1.svg" alt="weiboo-logo" />
                  </Link>
                </div>
                <div className="rts-menu">
                  <nav className="menus menu-toggle">
                    <ul className="nav__menu">
                      <Menu />
                    </ul>
                  </nav>
                </div>
                <div className="responsive-hamburger">
                  <div className="hamburger-1">
                    <Link to="#" className="nav-menu-link">
                      <span className="dot1" />
                      <span className="dot2" />
                      <span className="dot3" />
                      <span className="dot4" />
                      <span className="dot5" />
                      <span className="dot6" />
                      <span className="dot7" />
                      <span className="dot8" />
                      <span className="dot9" />
                    </Link>
                  </div>
                </div>
                <div className="header-action-items header-action-items1">
                  <div className="search-part">
                    <div className="search-icon action-item icon">
                      <i className="rt-search" />
                    </div>
                    <div className="search-input-area">
                      <div className="container">
                        <div className="search-input-inner">
                          <div className="input-div">
                            <input
                              id="searchInput1"
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
                  <Link to="/login" className="account">
                    <i className="rt-user-2" />
                  </Link>
                  <div className="cart action-item">
                    <div className="cart-nav">
                      <div className="cart-icon icon">
                        <Link to="#0">
                          <i
                            aria-hidden="true"
                            className="fas fa-shopping-basket"
                          />
                        </Link>
                        <span className="wishlist-dot icon-dot">{DummyItemsObj.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cart data={DummyItemsObj} />
        {/*================= Hero Section Start Here =================*/}
        <SideBar />
        {/*================= Hero Section End Here =================*/}
      </header>
      {/*================= Header Section End Here =================*/}
    </React.Fragment>
  )
}