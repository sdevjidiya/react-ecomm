import React from 'react'

import { Link } from "react-router-dom"

export default function MobileMenu() {
  return (
    <React.Fragment>
      <>
        <li className="firstlvl">
          <Link className="mm-link" to="/" aria-expanded="false">
            Home
          </Link>
        </li>
        <li className="has-dropdown firstlvl">
          <a className="mm-link" href="shop.html" aria-expanded="false">
            Shop <i className="rt-angle-down" />
          </a>
          <ul
            className="sub-menu mega-dropdown-mobile mm-collapse"
            style={{ height: 14 }}
          >
            <li className="mega-dropdown-li">
              <ul className="mega-dropdown-ul mm-show mm-collapse">
                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/shop">
                    Categories 1
                  </Link>
                </li>
                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/shop">
                    Categories 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mega-dropdown-li">
              <ul className="mega-dropdown-ul mm-show mm-collapse">
                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/shop">
                    Categories 3
                  </Link>
                </li>
                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/shop">
                    Categories 4
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-dropdown firstlvl">
          <Link className="mm-link" to="#" aria-expanded="false">
            Brands <i className="rt-angle-down" />
          </Link>
          <ul className="sub-menu mm-collapse" style={{ height: 0 }}>
            <li>
              <Link to="/brand">Brand1</Link>
            </li>
            <li>
              <Link to="/brand">Brand2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="mm-link" to="/prodcuts" aria-expanded="false">
            Prodcuts
          </Link>
        </li>
        <li>
          <Link className="mm-link" to="/contact" aria-expanded="false">
            Contact
          </Link>
        </li>
      </>

    </React.Fragment>
  )
}
