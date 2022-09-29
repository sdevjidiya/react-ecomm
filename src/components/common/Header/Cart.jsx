import React from 'react'

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Cart(props) {
  const dispatch = useDispatch();
  var total = 0;
  return (
    <React.Fragment>
      <div className="cart-bar">
        <div className="cart-header">
          <h3 className="cart-heading">MY CART ({props.data.length} ITEMS)</h3>
          <div className="close-cart">
            <i className="fal fa-times" />
          </div>
        </div>
        <div className="product-area">
          {props.data.map((items, index) => {
            total = total+items.price*items.quantity;
            return (
              <div className="product-item" key={index}>
                <div className="product-detail">
                  <div className="product-thumb">
                    <img src={items.image} alt="product-thumb" />
                  </div>
                  <div className="item-wrapper">
                    <span className="product-name">{items.title}</span>
                    <div className="item-wrapper">
                      <span className="product-variation">
                        <span className="color">{items.color} /</span>
                        <span className="size">{items.size}</span>
                      </span>
                    </div>
                    <div className="item-wrapper">
                      <span className="product-qnty">{items.quantity} ×</span>
                      <span className="product-price">${items.price}</span>
                    </div>
                  </div>
                </div>
                <div className="cart-edit">
                  <div className="quantity-edit">
                    <button className="button" onClick={() => {
                            if (items.quantity > 1) {
                                dispatch({ type: "DECREASE", payload: items });
                            } else {
                                dispatch({ type: "REMOVE", payload: items });
                            }
                            }}>
                      <i className="fal fa-minus minus" />
                    </button>
                    <input type="text" className="input" value={items.quantity} />
                    <button className="button plus" onClick={() => dispatch({ type: "INCREASE", payload: items })}>
                      +<i className="fal fa-plus plus" />
                    </button>
                  </div>
                  <div className="item-wrapper d-flex mr--5 align-items-center">
                    {/* <a href="#" className="product-edit">
                      <i className="fal fa-edit" />
                    </a> */}
                    <a className="delete-cart" onClick={() => dispatch({ type: "REMOVE", payload: items })}>
                      <i className="fal fa-times" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="cart-bottom-area">
          <span className="spend-shipping">
            <i className="fal fa-truck" /> SPENT{" "}
            <span className="amount">$199.00</span> MORE FOR FREE SHIPPING
          </span>
          <span className="total-price">
            TOTAL: <span className="price">${total}</span>
          </span>
          <Link to="/checkout" className="checkout-btn cart-btn">
            PROCEED TO CHECKOUT
          </Link>
          <Link to="/cart" className="view-btn cart-btn">
            VIEW CART
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
