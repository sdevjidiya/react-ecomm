import React from 'react'

export default function Banner() {
  return (
    <React.Fragment>
      <div className="banner banner-1 bg-image">
        <div className="container">
          <div className="banner-inner">
            <div className="row">
              <div className="col-xl-2 col-md-4 col-sm-12 gutter-1">
                <div className="catagory-sidebar">
                  <div className="widget-bg">
                    <h2 className="widget-title">
                      All Categories <i className="rt-angle-down" />
                    </h2>
                    <nav>
                      <ul>
                        <li>
                          <a href="shop.html">
                            Activewear <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Bikinis <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Dresses <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Jumpsuits <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Smart Dress <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Sneakers <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Sweetshirts <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Trousers <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Furniture <i className="rt rt-arrow-right-long" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-md-8 col-sm-12 gutter-2">
                <div className="swiper bannerSlide2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="banner-single bg-image bg-image-3-1">
                        <div className="container">
                          <div className="single-inner">
                            <div className="content-box">
                              <p className="slider-subtitle">
                                <img
                                  src="assets/images/banner/wvbo-icon.png"
                                  alt=""
                                />{" "}
                                Spring summer 22 women’s collection{" "}
                              </p>
                              <h2 className="slider-title">
                                {" "}
                                HOT COLLECTION <br /> FOR WOMEN
                              </h2>
                              <div className="slider-description">
                                <p>
                                  Easy &amp; safe payment with PayPal. sequines
                                  &amp; embroidered for all
                                </p>
                              </div>
                              <a href="shop.html" className="slider-btn2">
                                View Collections
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="banner-single bg-image bg-image-3-3">
                        <div className="container">
                          <div className="single-inner">
                            <div className="content-box">
                              <p className="slider-subtitle">
                                <img
                                  src="assets/images/banner/wvbo-icon.png"
                                  alt=""
                                />{" "}
                                Spring summer 22 women’s collection{" "}
                              </p>
                              <h2 className="slider-title">
                                {" "}
                                NEW COLLECTION <br /> FOR WOMEN
                              </h2>
                              <div className="slider-description">
                                <p>
                                  Easy &amp; safe payment with PayPal. sequines
                                  &amp; embroidered for all
                                </p>
                              </div>
                              <a href="shop.html" className="slider-btn2">
                                View Collections
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="banner-single bg-image bg-image-3-4">
                        <div className="container">
                          <div className="single-inner">
                            <div className="content-box">
                              <p className="slider-subtitle">
                                <img
                                  src="assets/images/banner/wvbo-icon.png"
                                  alt=""
                                />{" "}
                                Spring summer 22 women’s collection{" "}
                              </p>
                              <h2 className="slider-title">
                                {" "}
                                WINTER DRESS <br /> FOR WOMEN
                              </h2>
                              <div className="slider-description">
                                <p>
                                  Easy &amp; safe payment with PayPal. sequines
                                  &amp; embroidered for all
                                </p>
                              </div>
                              <a href="shop.html" className="slider-btn2">
                                View Collections
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-navigation">
                    <div className="swiper-button-prev slider-btn prev">
                      <i className="rt rt-arrow-left-long" />
                    </div>
                    <div className="swiper-button-next slider-btn next">
                      <i className="rt rt-arrow-right-long" />
                    </div>
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
