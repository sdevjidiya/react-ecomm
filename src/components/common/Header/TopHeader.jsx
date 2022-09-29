import React from 'react'

export default function TopHeader(props) {
  return (
    <React.Fragment>
      <div className="header-topbar header-topbar1">
        <div className="container">
          <div className="header-top-area">
            <div className="slider-div">
              <div className="swiper rts-topSlide1">
                <div className="swiper-wrapper">
                  {props.data.map(({ title }, index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <h3 className="welcome-text">
                          {" "}
                          {title}
                        </h3>
                      </div>
                    )
                  })}
                </div>
                <div className="slider-navigation2">
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
    </React.Fragment>
  )
}
