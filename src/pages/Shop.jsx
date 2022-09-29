import React from 'react'

import { BreadCrumb, Pagination } from '../components'


export default function Shop() {
  return (
    <React.Fragment>
      <BreadCrumb />
      <div className="rts-shop-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="shop-product-topbar">
                <span className="items-onlist">Showing 1-12 of 70 results</span>
                <div className="filter-area">
                  <p className="select-area">
                    <select className="select">
                      <option value="*">Sort by average rating</option>
                      <option value=".popular">Sort by popularity</option>
                      <option value=".best-rate">Sort by latest</option>
                      <option value=".on-sale">Sort by price: low to high</option>
                      <option value=".featured">Sort by price: high to low</option>
                    </select>
                  </p>
                </div>
              </div>
              <div className="products-area products-area3">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item3">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img8_2.jpg"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Men’s Canvas
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$310.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item2">
                      <a
                        href="product-details.html"
                        className="product-image image-slider-variations image-slider-variations3"
                      >
                        <div className="swiper productSlide swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                          <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-00916849c3fa79cf"
                            aria-live="polite"
                            style={{
                              transitionDuration: "0ms",
                              transform: "translate3d(-305px, 0px, 0px)"
                            }}
                          >
                            <div
                              className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                              data-swiper-slide-index={1}
                              role="group"
                              aria-label="2 / 2"
                              style={{ width: 305 }}
                            >
                              <div className="image-vari2 image-vari">
                                <img
                                  src="assets/images/hand-picked/woman-shirt-2.jpg"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-active"
                              data-swiper-slide-index={0}
                              role="group"
                              aria-label="1 / 2"
                              style={{ width: 305 }}
                            >
                              <div className="image-vari1 image-vari">
                                <img
                                  src="assets/images/hand-picked/woman-shirt-338x450.png"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                              data-swiper-slide-index={1}
                              role="group"
                              aria-label="2 / 2"
                              style={{ width: 305 }}
                            >
                              <div className="image-vari2 image-vari">
                                <img
                                  src="assets/images/hand-picked/woman-shirt-2.jpg"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                              data-swiper-slide-index={0}
                              role="group"
                              aria-label="1 / 2"
                              style={{ width: 305 }}
                            >
                              <div className="image-vari1 image-vari">
                                <img
                                  src="assets/images/hand-picked/woman-shirt-338x450.png"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          />
                        </div>
                        <div className="slider-buttons">
                          <div
                            className="button-prev slider-btn"
                            tabIndex={0}
                            role="button"
                            aria-label="Previous slide"
                            aria-controls="swiper-wrapper-00916849c3fa79cf"
                          >
                            <i className="fal fa-long-arrow-left" />
                          </div>
                          <div
                            className="button-next slider-btn"
                            tabIndex={0}
                            role="button"
                            aria-label="Next slide"
                            aria-controls="swiper-wrapper-00916849c3fa79cf"
                          >
                            <i className="fal fa-long-arrow-right" />
                          </div>
                        </div>
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Woman’s Blouse
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$220.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-features">
                        <div className="new-tag product-tag">NEW</div>
                        <div className="discount-tag product-tag">-35%</div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item3 popular">
                      <a
                        href="product-details.html"
                        className="product-image image-gallery-variations image-gallery-variations3"
                      >
                        <div className="swiper productGallerySlide swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                          <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-8ce978ed9ad6ebe4"
                            aria-live="polite"
                            style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          >
                            <div
                              className="swiper-slide swiper-slide-active"
                              role="group"
                              aria-label="1 / 2"
                              style={{ width: 305, marginRight: 10 }}
                            >
                              <div className="image-vari1 image-vari">
                                <img
                                  src="assets/images/hand-picked/slider-img1.jpg"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next"
                              role="group"
                              aria-label="2 / 2"
                              style={{ width: 305, marginRight: 10 }}
                            >
                              <div className="image-vari2 image-vari">
                                <img
                                  src="assets/images/hand-picked/slider-img1-1.jpg"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          />
                        </div>
                      </a>
                      <div className="thumbs-area">
                        <div className="swiper productGallerySlideThumb swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden swiper-thumbs">
                          <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-1c951ffc11089e61e"
                            aria-live="polite"
                            style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          >
                            <div
                              className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                              role="group"
                              aria-label="1 / 2"
                              style={{ width: "68.75px", marginRight: 10 }}
                            >
                              <div className="image-vari1 image-vari">
                                <img
                                  src="assets/images/hand-picked/slider-img1.jpg"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-visible swiper-slide-next"
                              role="group"
                              aria-label="2 / 2"
                              style={{ width: "68.75px", marginRight: 10 }}
                            >
                              <div className="image-vari2 image-vari">
                                <img
                                  src="assets/images/hand-picked/slider-img1-1.jpg"
                                  alt="product-image"
                                />
                              </div>
                            </div>
                          </div>
                          <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          />
                        </div>
                      </div>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Woman’s Blouse
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$250.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item1">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img14.webp"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Legacy Leather Sneaker
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$270.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item1">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img12-1.webp"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Chloe by Karl Lagerfeld
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$225.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-features">
                        <div className="new-tag product-tag">NEW</div>
                        <div className="hot-tag product-tag">HOT</div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item1">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img12-2.webp"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Adapt Camo Seamless Shorts
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$310.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item1">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img12-3.webp"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Minimalist Beard Mug
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$210.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item1">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img12.webp"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Adapt Camo Seamless Shorts
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$225.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-features">
                        <div className="hot-tag product-tag">HOT</div>
                        <div className="discount-tag product-tag">-35%</div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-6">
                    <div className="product-item product-item2 element-item1">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="assets/images/hand-picked/slider-img13.webp"
                          alt="product-image"
                        />
                      </a>
                      <div className="bottom-content">
                        <a href="product-details.html" className="product-name">
                          Minimalist Beard Mug
                        </a>
                        <div className="action-wrap">
                          <span className="product-price">$270.00</span>
                          <a href="cart.html" className="addto-cart">
                            <i className="fal fa-shopping-cart" /> Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a href="wishlist.html" className="product-action">
                          <i className="fal fa-heart" />
                        </a>
                        <button className="product-action product-details-popup-btn">
                          <i className="fal fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
            <div className="col-xl-3">
              <div className="side-sticky">
                <div className="shop-side-action">
                  <div className="action-item">
                    <div className="action-top">
                      <span className="action-title">PRODUCT CATEGORY</span>
                    </div>
                    <div className="category-item">
                      <div className="category-item-inner">
                        <div className="category-title-area">
                          <span className="point" />
                          <span className="category-title">Kids (10)</span>
                        </div>
                        <div className="down-icon">
                          <i className="far fa-angle-down" />
                        </div>
                      </div>
                      <div className="sub-categorys">
                        <ul className="sub-categorys-inner">
                          <li>
                            <span className="point" />
                            <a href="shop.html">Clothes</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Shoes</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Toys</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="category-item">
                      <div className="category-item-inner">
                        <div className="category-title-area">
                          <span className="point" />
                          <span className="category-title">Mens (23)</span>
                        </div>
                        <div className="down-icon">
                          <i className="far fa-angle-down" />
                        </div>
                      </div>
                      <div className="sub-categorys">
                        <ul className="sub-categorys-inner">
                          <li>
                            <span className="point" />
                            <a href="shop.html">Clothes</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Shoes</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Glasses</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Watches</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Assesories</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="category-item">
                      <div className="category-item-inner">
                        <div className="category-title-area">
                          <span className="point" />
                          <span className="category-title">Women (14)</span>
                        </div>
                        <div className="down-icon">
                          <i className="far fa-angle-down" />
                        </div>
                      </div>
                      <div className="sub-categorys">
                        <ul className="sub-categorys-inner">
                          <li>
                            <span className="point" />
                            <a href="shop.html">Clothes</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Shoes</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Glasses</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Makeups</a>
                          </li>
                          <li>
                            <span className="point" />
                            <a href="shop.html">Assesories</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="action-item">
                    <div className="action-top">
                      <span className="action-title">FILTER BY PRICE</span>
                    </div>
                    <div
                      className="nstSlider"
                      data-range_min={50}
                      data-range_max={20000}
                      data-cur_min={20}
                      data-cur_max={10000}
                    >
                      <div className="bar" style={{ left: 0, width: 126 }} />
                      <div
                        className="leftGrip price-range-grip"
                        tabIndex={0}
                        style={{ left: 0 }}
                      />
                      <div
                        className="rightGrip price-range-grip"
                        tabIndex={0}
                        style={{ left: 115 }}
                      />
                    </div>
                    <div className="range-label-area">
                      <div className="min-price d-flex">
                        <span className="range-lbl">Min:</span>
                        <span className="currency-symbol">$</span>
                        <div className="leftLabel price-range-label">50</div>
                      </div>
                      <div className="min-price d-flex">
                        <span className="range-lbl">Max:</span>
                        <span className="currency-symbol">$</span>
                        <div className="rightLabel price-range-label">10000</div>
                      </div>
                    </div>
                  </div>
                  <div className="action-item">
                    <div className="action-top">
                      <span className="action-title">FILTER BY COLOR</span>
                    </div>
                    <div className="color-item">
                      <div className="color black">
                        <i className="fas fa-check" />
                      </div>
                      <span className="color-name">Black</span>
                      <div className="color-arrow">
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                    <div className="color-item">
                      <div className="color blue">
                        <i className="fas fa-check" />
                      </div>
                      <span className="color-name">blue</span>
                      <div className="color-arrow">
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                    <div className="color-item selected">
                      <div className="color gray">
                        <i className="fas fa-check" />
                      </div>
                      <span className="color-name">Gray</span>
                      <div className="color-arrow">
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                    <div className="color-item">
                      <div className="color green">
                        <i className="fas fa-check" />
                      </div>
                      <span className="color-name">Green</span>
                      <div className="color-arrow">
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                    <div className="color-item">
                      <div className="color red">
                        <i className="fas fa-check" />
                      </div>
                      <span className="color-name">Red</span>
                      <div className="color-arrow">
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                    <div className="color-item">
                      <div className="color yellow">
                        <i className="fas fa-check" />
                      </div>
                      <span className="color-name">Yellow</span>
                      <div className="color-arrow">
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                  </div>
                  <div className="action-item">
                    <div className="action-top">
                      <span className="action-title">FILTER BY BRAND</span>
                    </div>
                    <div className="product-brands">
                      <div className="brands-inner">
                        <ul>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Alexander McQueen
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Adidas
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Balenciaga
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Balmain
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Burberry
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Chloé
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Dsquared2
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Givenchy
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Kenzo
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Leo
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Maison Margiela
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Moschino
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Nike
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Versace
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Alexander McQueen
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Adidas
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Balenciaga
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Balmain
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Burberry
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Chloé
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Dsquared2
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Givenchy
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Kenzo
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Leo
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Maison Margiela
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Moschino
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Nike
                            </a>
                          </li>
                          <li>
                            <a className="product-brand" href="shop.html">
                              Versace
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="shop.html" className="banner-item">
                      <div className="banner-inner">
                        <span className="pretitle">Winter Fashion</span>
                        <h1 className="title">Behind the deseart</h1>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
