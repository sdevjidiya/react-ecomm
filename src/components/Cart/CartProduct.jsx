import React from 'react';
import { useDispatch } from "react-redux";

const CartProduct = (props) => {
  const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td><div className="product-thumb"><img src={props.image} alt="product-thumb" /></div></td>
                <td>
                    <div className="product-title-area">
                        <span className="pretitle">{props.pretitle}</span>
                        <h4 className="product-title">{props.title}</h4>
                    </div>
                </td>
                <td><span className="product-price">${props.price}</span></td>
                <td>
                    <div className="cart-edit">
                        <div className="quantity-edit">
                            <button className="button" onClick={() => {
                            if (props.quantity > 1) {
                                dispatch({ type: "DECREASE", payload: props });
                            } else {
                                dispatch({ type: "REMOVE", payload: props });
                            }
                            }}
                            ><i className="fal fa-minus minus"></i></button>
                            <input type="text" className="input" value={props.quantity} />
                            <button className="button plus" onClick={() => dispatch({ type: "INCREASE", payload: props })}>+<i className="fal fa-plus plus"></i></button>
                        </div>
                    </div>
                </td>
                <td className="last-td"><button className="remove-btn" onClick={() => dispatch({ type: "REMOVE", payload: props })}>Remove</button></td>
            </tr>
        </>
    )
}

export default CartProduct;