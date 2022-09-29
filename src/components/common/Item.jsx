import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom"

export default function Item(props) {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="product-item element-item1">
        <Link
          to="/product-details"
          className="product-image image-hover-variations"
        >
          {props.images.map(({ image }, index) => {
            return (
              <div className={"image-vari" + (index + 1) + " image-vari"} key={index}>
                <img
                  src={"assets/images/hand-picked/" + image}
                  alt="product-image"
                />
              </div>
            )
          })}
        </Link>
        <div className="bottom-content">
          <Link to="/product-details"
            className="product-name">
            {props.title}
          </Link>
          <div className="action-wrap">
            <span className="price">${props.price}</span>
          </div>
        </div>
        <div className="quick-action-button">
          <div className="cta-single cta-plus">
            <a onClick={() => dispatch({ type: "ADD", payload: {id:props.id,title:props.title,image:'assets/images/hand-picked/'+props.images[0].image,quantity:1,price:props.price} })}>
              <i className="rt-plus" />
            </a>
          </div>
          <div className="cta-single cta-quickview">
            <button className="product-details-popup-btn">
              <i className="far fa-eye" />
            </button>
          </div>
          <div className="cta-single cta-wishlist">
            <Link to="/wishlist">
              <i className="far fa-heart" />
            </Link>
          </div>
          <div className="cta-single cta-addtocart">
            <a onClick={() => dispatch({ type: "ADD", payload: {id:props.id,title:props.title,image:'assets/images/hand-picked/'+props.images[0].image,quantity:1,price:props.price} })}>
              <i className="rt-basket-shopping" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
