import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ProductDetailsPopup = () => {
const dispatch = useDispatch();
  return (
    <>
        <div className="product-details-popup-wrapper">
            <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                <div className="product-details-popup">
                    <button className="product-details-close-btn"><i className="fal fa-times"></i></button>
                    <div className="details-product-area">
                        <div className="product-thumb-area">
                            <div className="cursor"></div>
                            <div className="thumb-wrapper one filterd-items figure">
                                <div className="product-thumb zoom" 
                                    style={{backgroundImage: `url("assets/images/products/product-details.jpg")`}}>
                                        <img src="assets/images/products/product-details.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper two filterd-items hide">
                                    <div className="product-thumb zoom"
                                        style={{ backgroundImage: `url("assets/images/products/product-filt2.jpg")` }} ><img
                                            src="assets/images/products/product-filt2.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper three filterd-items hide">
                                    <div className="product-thumb zoom"
                                        style={{ backgroundImage: `url("assets/images/products/product-filt3.jpg")` }} ><img
                                            src="assets/images/products/product-filt3.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="product-thumb-filter-group">
                                    <div className="thumb-filter filter-btn active" data-show=".one"><img
                                        src="assets/images/products/product-filt1.jpg" alt="product-thumb-filter" /></div>
                                    <div className="thumb-filter filter-btn" data-show=".two"><img
                                        src="assets/images/products/product-filt2.jpg" alt="product-thumb-filter" /></div>
                                    <div className="thumb-filter filter-btn" data-show=".three"><img
                                        src="assets/images/products/product-filt3.jpg" alt="product-thumb-filter" /></div>
                                </div>
                            </div>
                            <div className="contents">
                                <div className="product-status">
                                    <span className="product-catagory">Dress</span>
                                    <div className="rating-stars-group">
                                        <div className="rating-star"><i className="fas fa-star"></i></div>
                                        <div className="rating-star"><i className="fas fa-star"></i></div>
                                        <div className="rating-star"><i className="fas fa-star-half-alt"></i></div>
                                        <span>10 Reviews</span>
                                    </div>
                                </div>
                                <h2 className="product-title">Wide Cotton Tunic Dress <span className="stock">In Stock</span></h2>
                                <span className="product-price"><span className="old-price">$9.35</span> $7.25</span>
                                <p>
                                    Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a
                                    completely modern design and you feel comfortable to put on this hijab.
                                    Buy it at the best price.
                                </p>
                                <div className="product-bottom-action">
                                    <div className="cart-edit">
                                        <div className="quantity-edit action-item">
                                            <button className="button"><i className="fal fa-minus minus"></i></button>
                                            <input type="text" className="input" defaultValue="01" />
                                            <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                        </div>
                                    </div>
                                    <Link to="/cart" className="addto-cart-btn action-item"><i className="rt-basket-shopping"></i>
                                        Add To
                                        Cart</Link>
                                    <Link to="/wishlist" className="wishlist-btn action-item"><i className="rt-heart"></i></Link>
                                </div>
                                <div className="product-uniques">
                                    <span className="sku product-unipue"><span>SKU: </span> BO1D0MX8SJ</span>
                                    <span className="catagorys product-unipue"><span>Categories: </span> T-Shirts, Tops, Mens</span>
                                    <span className="tags product-unipue"><span>Tags: </span> fashion, t-shirts, Men</span>
                                </div>
                                <div className="share-social">
                                    <span>Share:</span>
                                    <Link className="platform" to="http://facebook.com/" target="_blank"><i
                                        className="fab fa-facebook-f"></i></Link>
                                    <Link className="platform" to="http://twitter.com/" target="_blank"><i
                                        className="fab fa-twitter"></i></Link>
                                    <Link className="platform" to="http://behance.com/" target="_blank"><i
                                        className="fab fa-behance"></i></Link>
                                    <Link className="platform" to="http://youtube.com/" target="_blank"><i
                                        className="fab fa-youtube"></i></Link>
                                    <Link className="platform" to="http://linkedin.com/" target="_blank"><i
                                        className="fab fa-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPopup