import React from 'react'

export default function Deals() {
  return (
    <React.Fragment>
      <div className="rts-deal-section1">
        <div className="container">
          <div className="section-inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" />
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="single-inner">
                  <div className="content-box">
                    <div className="sub-content">
                      <img
                        className="line-1"
                        src="assets/images/banner/wvbo-icon.png"
                        alt=""
                      />
                      <span className="sub-text">Deal Of The Week</span>
                    </div>
                    <h2 className="slider-title">
                      Roland Grand White <br /> short T-shirt{" "}
                    </h2>
                    <div className="slider-description">
                      <p>
                        Our intent and our actions have always been informed by
                        progress. We look at an impact report as a way to measure.
                      </p>
                    </div>
                    <div className="countdown" id="countdown">
                      <ul>
                        <li>
                          <span id="days" />D
                        </li>
                        <li>
                          <span id="hours" />H
                        </li>
                        <li>
                          <span id="minutes" />M
                        </li>
                        <li>
                          <span id="seconds" />S
                        </li>
                      </ul>
                    </div>
                    <div className="content-bottom">
                      <div className="img-box">
                        <img src="assets/images/hand-picked/deal-icon.png" alt="" />
                      </div>
                      <p className="content">
                        Limited time offer. The deal will expires <br />
                        on November 12, 2022 HURRY UP!
                      </p>
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
