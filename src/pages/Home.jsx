import React from 'react';

import { Link } from 'react-router-dom';

import { ProductDetailsPopup, Offer, CategoryItemsList, FeaturedItemsList, Banner, OffersPoster, Deals } from '../components'


function Home() {
  return (
    <React.Fragment>
      <Banner />
      {/*================= Offer Section Start Here =================*/}
      <Offer />
      {/*================= Offer Section End Here =================*/}
      {/*================= New Collection Section Start Here =================*/}
      <div className="rts-new-collection-section section-gap">
        <div className="container">
          <div className="recent-products-header section-header"></div>
          <div className="swiper rts-cmmnSlider-over" data-swiper="pagination">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <CategoryItemsList name={"WOMEN"} image={"item-1.png"} total={20} />
              </div>
              <div className="swiper-slide">
                <CategoryItemsList name={"MAN"} image={"item-2.png"} total={33} />
              </div>
              <div className="swiper-slide">
                <CategoryItemsList name={"KIDS"} image={"item-3.png"} total={25} />
              </div>
              <div className="swiper-slide">
                <CategoryItemsList name={"ACCESORIES"} image={"item-4.png"} total={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= New Collection Section End Here =================*/}
      {/*================= Hand Picked Section Start Here =================*/}
      <FeaturedItemsList icon={"wvbo-icon.png"} title={"HAND-PICKED PRODUCT"} sub_title={"Featured"} />
      {/*================= Hand Picked Section End Here =================*/}
      {/*================= Deal Section Start Here =================*/}
      <Deals />
      {/*================= Deal Section End Here =================*/}
      {/*================= Featured Product Section Start Here =================*/}
      <FeaturedItemsList icon={"wvbo-icon.png"} title={"FEATURED PRODUCT"} sub_title={"Featured"} />
      {/*================= Featured Product Section End Here =================*/}
      {/*================= Posters Section Start Here =================*/}
      <div className="rts-posters-section1">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
              <OffersPoster
                link={"product-details"}
                image={"pot.png"}
                sub_title={"50% Offer"}
                title={"Last call for up to 30% off"}
                btn_link={"/shop"}
                type={1}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-sm-12 col-12 last-child">
              <OffersPoster
                link={"product-details"}
                image={"dress.png"}
                sub_title={"-45% Offer"}
                title={"SUMMER COLLECTION"}
                description={"Don't miss the last opportunity"}
                type={2}
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
              <OffersPoster
                link={"product-details"}
                image={"3rd-image.png"}
                sub_title={"SUMMER DRESS"}
                title={"BEST COLLECTION"}
                btn_link={"/shop"}
                type={1}
              />
            </div>
          </div>
        </div>
      </div>
      {/*================= Posters Section End Here =================*/}
      {/*================= Brand Section Start Here =================*/}
      <div className="rts-brands-section1 brand-bg3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="slider-div">
                <div className="swiper rts-brandSlide1">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <Link className="brand-front" to="/">
                        <img
                          src="assets/images/brands/client-01.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                    <div className="swiper-slide">
                      <Link className="brand-front" to="/">
                        <img
                          src="assets/images/brands/client-02.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                    <div className="swiper-slide">
                      <Link className="brand-front" to="/">
                        <img
                          src="assets/images/brands/client-03.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                    <div className="swiper-slide">
                      <Link className="brand-front" to="/">
                        <img
                          src="assets/images/brands/client-04.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                    <div className="swiper-slide">
                      <Link className="brand-front" to="/">
                        <img
                          src="assets/images/brands/client-05.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                    <div className="swiper-slide">
                      <Link className="brand-front" to="/">
                        <img
                          src="assets/images/brands/client-06.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Brand Section End Here =================*/}
      {/*================= Featured Product Section Start Here =================*/}
      <FeaturedItemsList icon={"wvbo-icon.png"} title={"FEATURED PRODUCT 3"} sub_title={"Featured"} />
      {/*================= Featured Product Section End Here =================*/}
      {/*================= Newsletter Popup Start Here =================*/}
      <div className="rts-newsletter-popup">
        <div className="newsletter-close-btn">
          <i className="fal fa-times" />
        </div>
        <div className="newsletter-inner">
          <h3 className="newsletter-heading">Get Weekly Newsletter</h3>
          <p>
            Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a
            completely modern design
          </p>
          <form>
            <div className="input-area">
              <div className="input-div">
                <input type="text" placeholder="Your name" />
                <div className="input-icon">
                  <i className="far fa-user" />
                </div>
              </div>
              <div className="input-div">
                <input type="email" placeholder="Email address" required="" />
                <div className="input-icon">
                  <i className="far fa-envelope" />
                </div>
              </div>
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe Now <i className="fal fa-long-arrow-right ml--5" />
            </button>
          </form>
        </div>
      </div>
      {/*================= Newsletter Popup End Here =================*/}
    </React.Fragment>
  )
}

export default Home;