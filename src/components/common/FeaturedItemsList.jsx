import React from 'react'

import Item from './Item'

export default function FeaturedItemsList(props) {
  return (
    <React.Fragment>
      <div className="rts-hand-picked-products-section section-gap">
        <div className="container">
          <div className="section-header section-header3 text-center">
            <div className="wrapper">
              <div className="sub-content">
                <img
                  className="line-1"
                  src={"assets/images/banner/" + props.icon}
                  alt=""
                />
                <span className="sub-text">{props.sub_title}</span>
                <img
                  className="line-2"
                  src={"assets/images/banner/" + props.icon}
                  alt=""
                />
              </div>
              <h2 className="title">{props.title}</h2>
            </div>
          </div>
          <div className="slider-div">
            <div className="swiper rts-sixSlide-over">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Item
                    images={[{ image: "slider-img8.webp" }, { image: "slider-img8_1.webp" }]}
                    title={"Underarm Smoothing Bra"}
                    price={31.00}
                    id={1}
                  />
                </div>
                <div className="swiper-slide">
                  <Item
                    images={[{ image: "slider-img11.webp" }, { image: "slider-img11_1.webp" }]}
                    title={"Bali Underwire Bra"}
                    price={25.00}
                    id={2}
                  />
                </div>
                <div className="swiper-slide">
                  <Item
                    images={[{ image: "slider-img7.webp" }, { image: "slider-img7_1.webp" }]}
                    title={"Bali Underwire Bra"}
                    price={20.00}
                    id={3}
                  />
                </div>
                <div className="swiper-slide">
                  <Item
                    images={[{ image: "slider-img7.webp" }, { image: "slider-img7_1.webp" }]}
                    title={"Bali Underwire Bra"}
                    price={20.00}
                    id={4}
                  />
                </div>
                <div className="swiper-slide">
                  <Item
                    images={[{ image: "slider-img9.webp" }, { image: "slider-img9_1.webp" }]}
                    title={"Bali Underwire Bra"}
                    price={20.00}
                    id={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
