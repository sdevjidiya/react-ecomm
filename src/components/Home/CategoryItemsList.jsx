import React from 'react'

import { Link } from "react-router-dom";

export default function CategoryItemsList(props) {
  return (
    <React.Fragment>
      <div className="collection-item">
        <Link to="/category">
          <img
            src={"assets/images/catagory/" + props.image}
            alt="collection-image"
          />
        </Link>
        <p className="item-quantity">
          {props.total} <span>items</span>
        </p>
        <Link to="/category" className="item-catagory-box">
          <h3 className="title">FOR {props.name}</h3>
        </Link>
      </div>
    </React.Fragment>
  )
}
