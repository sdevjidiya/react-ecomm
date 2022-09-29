import React from 'react'

import { Link } from "react-router-dom"

export default function OffersPoster(props) {
  return (
    <React.Fragment>

      {(props.type == 1) ?
        <Link
          to={"/" + props.link} class="product-box product-box-medium product-box-medium3">
          <div class="contents">
            <span className="pretitle">{props.sub_title}</span>
            <h1 className="product-title">
              {props.title}
            </h1>
            <div class="view-collections go-btn">Shop Now <i class="rt-arrow-right-long"></i></div>
          </div>
          <div class="product-thumb"><img src={"assets/images/featured/" + props.image} alt="product-thumb" /></div>
        </Link>

        :
        <Link
          to={"/" + props.link} class="product-box product-box-medium mid">
          <div class="contents">
            <span class="pretitle">{props.sub_title}</span>
            <h1 class="product-title">{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <div class="product-thumb product-thumb1"><img src={"assets/images/featured/" + props.image} alt="product-thumb" /></div>
        </Link>
      }
    </React.Fragment >
  )
}
