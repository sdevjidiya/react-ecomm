import React from 'react'

import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <React.Fragment>
      <li>
        <Link className="menu-item active1" to="/">
          Home
        </Link>
      </li>
      <li className="has-dropdown">
        <Link className="menu-item" to="#">
          Categories <i className="rt-plus" />
        </Link>
        <ul className="dropdown-ul mega-dropdown">
          <li className="mega-dropdown-li">
            <ul className="mega-dropdown-ul">
              <li className="dropdown-li">
                <Link className="dropdown-link2" to="/shop">
                  Categories 1
                </Link>
              </li>
              <li className="dropdown-li">
                <Link className="dropdown-link2" to="/shop">
                  Categories 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="mega-dropdown-li">
            <ul className="mega-dropdown-ul">
              <li className="dropdown-li">
                <Link className="dropdown-link2" to="/shop">
                  Categories 3
                </Link>
              </li>
              <li className="dropdown-li">
                <Link className="dropdown-link2" to="/shop">
                  Categories 4
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link className="menu-item" to="#">
          Brands <i className="rt-plus" />
        </Link>
        <ul className="dropdown-ul">
          <li className="dropdown-li">
            <Link className="dropdown-link" to="/brands">
              Brands 1
            </Link>
          </li>
          <li className="dropdown-li">
            <Link className="dropdown-link" to="/brands">
              Brands 2
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className="menu-item" to="/products">
          Prodcuts
        </Link>
      </li>
      <li>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
      </li>
    </React.Fragment>
  )
}
