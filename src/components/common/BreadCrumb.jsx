import React from 'react'

import { Link } from "react-router-dom"

export default function BreadCrumb() {
  return (
    <React.Fragment>
      <div className="page-path">
        <div className="container">
          <div className="breadcrumbs-inner">
            <h1 className="path-title">Product</h1>
            <ul>
              <li><Link className="home-page-link" to="/">Home <i className="fal fa-angle-right"></i></Link></li>
              <li><Link className="current-page" to="/product">Product</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
