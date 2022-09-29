import React from 'react';
import {CartProduct} from '../components';
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();
    var total = 0;
    return (
        <>
            <div className="rts-cart-section" >
                <div className="container">
                    <h4 className="section-title">Product List</h4>
                    <div className="row justify-content-between">
                        <div className="col-xl-7">
                            <div className="cart-table-area">
                                <table className="table table-bordered table-hover">
                                    <thead className="thead-dark">
                                    </thead>
                                    <tbody>
                                        {cart.map((item,index) => {
                                        total = total+item.price*item.quantity;
                                        return (
                                            <>
                                                <CartProduct 
                                                image={item.image}  
                                                pretitle={'Nighty'}
                                                title={item.title}
                                                price={item.price}
                                                quantity={item.quantity}
                                                id={item.id}
                                                dispatch={dispatch}
                                                key={index}
                                                />
                                            </>
                                            );
                                        })}
                                        {/* <CartProduct 
                                        image={'assets/images/products/inner/cart/1.jpg'}  
                                        pretitle={'Nighty'}
                                        title={'Shimmer Sheer Tights'}
                                        price={'$69.00'}
                                        />
                                        <CartProduct 
                                        image={'assets/images/products/inner/cart/2.jpg'}  
                                        pretitle={'Nighty'}
                                        title={'Shimmer Sheer Tights'}
                                        price={'$69.00'}
                                        />
                                        <CartProduct 
                                        image={'assets/images/products/inner/cart/3.jpg'}  
                                        pretitle={'Nighty'}
                                        title={'Shimmer Sheer Tights'}
                                        price={'$69.00'}
                                        />
                                        <CartProduct 
                                        image={'assets/images/products/inner/cart/4.jpg'}  
                                        pretitle={'Nighty'}
                                        title={'Shimmer Sheer Tights'}
                                        price={'$69.00'}
                                        /> */}
                                    </tbody>
                                </table>
                                <div className="coupon-apply">
                                    <span className="coupon-text">Coupon Code:</span>
                                    <div className="apply-input">
                                        <input type="text" placeholder="Apply coupon here" />
                                            <button type="submit" className="apply-btn">Apply </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="checkout-box">
                                <div className="checkout-box-inner">
                                    <div className="subtotal-area">
                                        <span className="title">Subtotal</span>
                                        <span className="subtotal-price">${total}</span>
                                    </div>
                                    <div className="shipping-check">
                                        <span className="title">Shipping</span>
                                        <div className="check-options">
                                            <form>
                                                <div className="form-group">
                                                    <input type="checkbox" id="fltrt" />
                                                        <label className="check-title" htmlFor="fltrt">Flat rate</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="frsh" />
                                                        <label className="check-title" htmlFor="frsh">Free shipping</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="shipping-location">
                                        <span className="shipping-to">Shipping to <span>NY.</span></span>
                                        <span className="change-address"><i className="fal fa-map-marker-alt mr--5"></i>Change address</span>
                                    </div>
                                    <div className="total-area">
                                        <span className="title">Total</span>
                                        <span className="total-price">${total}</span>
                                    </div>
                                </div>
                                <a href="checkout.html" className="procced-btn">Procced To Checkout</a>
                                <a href="shop.html" className="continue-shopping"><i className="fal fa-long-arrow-left"></i> Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;