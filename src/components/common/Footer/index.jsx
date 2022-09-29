import React from "react";
import Topcart from "./Topcart";
import QuickContact from "./QuickContact";
import SocialLink from "./SocialLink";
import { Link } from 'react-router-dom';
import ListItem from "./ListItem";

export default function Index() {
  return (
    <React.Fragment>
      {/*================= Footer Start Here =================*/}
      <div className="footer footer-1">
        <div className="container">
          <div className="footer-feature1">
            <div className="row align-items-center">
              <Topcart
                svgIcone={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="50px"
                  height="50px"
                >
                  <image
                    x="0px"
                    y="0px"
                    width="50px"
                    height="50px"
                    xlinkHref="data:img/png;base64,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"
                  />
                </svg>}
                title={'International Shipment'}
                content={'Orders are shipped seamlessly between countries'}
                extraclassName={''}
              />

              <Topcart
                svgIcone={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="50px"
                  height="55px"
                >
                  <image
                    x="0px"
                    y="0px"
                    width="50px"
                    height="55px"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA3CAMAAAB5LOkwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABlVBMVEXuQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3////tvdjFAAAAhXRSTlMAGr3te2unFd/ZQGSGdbYX9MNqhHOz8M9pzGZ84I7ASfecGH6KG9HILTwwDU0BJcXyYhOYjYNdvBzvcMQUMcHiYQM41jMqqvlOHqQZwv379XTNbEHxHT0+PwYH29zef+hYWVo5EaudBagOsLsJsniWAukW7P4mRX1D5vwkbpKioKwIZaGxtwh31QAAAAFiS0dEhozeO10AAAAHdElNRQfmCBkQIC3d1dpMAAABuElEQVRIx+2WR1MCQRCF2wQqBhBzBAOiiAHMIiLomnNAzBlzzjnN/3ZZB2TC6urBKkvf6fXr+mpnuuewAIQiIqPeFA0Qg60KQB37ZuPigZEGYSUAJGKbBJCsxV7HIilBRA+Qim2aiKRjn8EimZ8gWT+IZOfII7l5+RykwICMhVykSFtcIs7QlE8jpYE5mHlIWbkUWSqsFFJZJbrqGg4SJuouNnvA11pIpC5QWesb9I0Bo26iJtZsEIsWB/OVVqdo2lztYdsPDdntESsVgXg6OoUuvPHunl5EI9DXj1ApgaCBwZBFQ4hFYFg8GYnwFYZE/yP/yJ9CRlhk9BPExCJj4x8Sg3oWgYlJr7ymzMBBlOt7iO7rSJVPkabDEMPMrBLNCRiZR4q1gBF3tWIkNngy8+KSMi2vfHFMv0ero2v964ts7nepnBuuTQ7hMElTFPxUvrkl5ds7DGHdxZPfoxr7OBcOaGQsuKxDB5EfHeP85JRG3h8N+aN2JpOLOg+1vER+IY9MBjuXNiJXH+L86pq5v4BbN1R+i/M7K7sWp9Sxt1O55V7KHx45i5ke7t01LnEaT88vdxofLl4BUy+dndS3GiwAAAAASUVORK5CYII="
                  />
                </svg>}
                title={'Online Support 24/7'}
                content={'Orders are shipped seamlessly between countries'}
                extraclassName={''}
              />

              <Topcart
                svgIcone={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="50px"
                  height="50px"
                >
                  <image
                    x="0px"
                    y="0px"
                    width="50px"
                    height="50px"
                    xlinkHref="data:img/png;base64,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"
                  />
                </svg>}
                title={'Money Return'}
                content={'Orders are shipped seamlessly between countries'}
                extraclassName={''}
              />

              <Topcart
                svgIcone={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="38px"
                  height="50px"
                >
                  <image
                    x="0px"
                    y="0px"
                    width="38px"
                    height="50px"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAyCAMAAAAHpFkRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB71BMVEXuQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3uQD3///+7BUqWAAAAo3RSTlMAIGi44uvWn0gJA3HwzjcIrPf4YwK6ZCUXh/1AWP5uHbYRzYsT1yr71GLGZ5UO5gqJe8DuFI90GI51u8H6O5qnplmDbVpdpYQMQ28+8g/MikTnUepycGxl2qRgfnPfz9xpJgYFJBbzRzDg9Vb8yowBqOUy5BUS9uzRVX/pOBvY0vQcsKHvL8nx4cRXQTqv7cWqs+iBtZgirVu0Hz+NKTWd1V8L9o3uEgAAAAFiS0dEpFm+erkAAAAHdElNRQfmCBkQIjcSgUG0AAACCklEQVQ4y+XV11/TUBgG4LdYrbSV2GpVQBxgBS1QmzpQgRZwKwoFFVRQQRRUxI0DBBXEPXDgXu8/6knS2oAnyYUXXvjd5HtPnt/JOBmAqVw5s9yz53jm5sKmvD4/jZqXZ62U+ZoI6DS4wEot9IjdoUWLl+Tlu8mCQgu2lCxaZrTLV5DulfLJismSTFgVJnOkbHUpy5TfaQ25VsoiZHk2VVTSHZWxdWTMFFXG18vYBnKjKYbo3yRjVeRmU9zyd2zGQbeyumI6qKlNJBLJWF1dfTKRqWTDtu0eEXfs3JVWuwP6au8BSpitvfDu0xu10WD7jXEfcMDEmtDYbHQpg7U4sFaDNTsw379nB/XVd2SHgHwTq4FXyooPR9pMrP3I0WoZs6z/hx1zZMEONdQZcWDHT5zsEvu7bVkwJl4ZxXWqB3bs9Bmgt7zvbMCvnlMs2fkUlKrSdOjvtWIXMHAxmy5dlrMrV6c9VWy7JmW1cF3P9IMNN7S3WMZu4lamvT2E4TsckbHRu7inXcf9MbaMi9N/wAkZe5iLR+KePMaT/qdA9Bn5XMb6FLwgw2KeAbEK2sRSNjoMMUPRS22toq+0kQlMSi4hhdfapr0b0Tf6QBniEvYW7/TP2dT7D8ZAq/Y1/aPiH1FvzmHxyxkq/DSzmnrgncqqSpsfYtfngrTq/AK7+vrt++Rgh/rjp+h/AYz5uLX/8X/FAAAAAElFTkSuQmCC"
                  />
                </svg>}
                title={'Member Discount'}
                content={'Orders are shipped seamlessly between countries'}
                extraclassName={'last-child'}
              />
            </div>
          </div>
          <div className="footer-inner">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 box-widget-col">
                <div className="footer-widget footer-box-widget">
                  <div className="footer-logo">
                    <img src="assets/images/logo1.svg" alt="footer-logo" />
                  </div>
                  <p>
                    Solid is the information &amp; experience directed at an
                    end-user
                  </p>
                  <div className="quick-contact">
                    <QuickContact
                      title={"Mon - Fri: 9:00-20:00"}
                      link={"tel:0020500"}
                      text={"0020 500 - CALL - 000"}
                      extraclassName={'phone'}
                      svgIcone={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="40px"
                        height="40px"
                      >
                        <defs>
                          <filter id="Filter_0">
                            <feFlood
                              floodColor="rgb(238, 64, 61)"
                              floodOpacity={1}
                              result="floodOut"
                            />
                            <feComposite
                              operator="atop"
                              in="floodOut"
                              in2="SourceGraphic"
                              result="compOut"
                            />
                            <feBlend
                              mode="normal"
                              in="compOut"
                              in2="SourceGraphic"
                            />
                          </filter>
                        </defs>
                        <g filter="url(#Filter_0)">
                          <path
                            fillRule="evenodd"
                            fill="rgb(213, 18, 67)"
                            d="M39.333,37.332 L37.333,37.332 L37.333,39.332 C37.333,39.701 37.34,39.999 36.666,39.999 C36.298,39.999 35.999,39.701 35.999,39.332 L35.999,37.332 L27.333,37.332 C27.196,37.332 27.63,37.291 26.951,37.212 C26.649,37.1 26.576,36.585 26.787,36.284 L36.120,22.950 C36.245,22.772 36.448,22.667 36.666,22.666 C37.34,22.666 37.332,22.964 37.333,23.332 L37.333,35.999 L39.333,35.999 C39.701,35.999 39.999,36.298 39.999,36.665 C39.999,37.34 39.701,37.332 39.333,37.332 ZM35.999,25.447 L28.613,35.999 L35.999,35.999 L35.999,25.447 ZM35.805,19.137 C35.737,19.203 35.655,19.255 35.565,19.287 C35.538,19.294 35.511,19.299 35.483,19.302 C35.435,19.318 35.385,19.328 35.334,19.332 C35.328,19.332 35.322,19.332 35.315,19.332 C35.309,19.332 35.303,19.332 35.296,19.332 C35.248,19.326 35.200,19.314 35.155,19.297 C35.128,19.293 35.102,19.286 35.75,19.279 C34.973,19.237 34.883,19.172 34.813,19.87 L31.91,15.366 C30.842,15.107 30.842,14.698 31.91,14.440 C31.347,14.175 31.769,14.167 32.34,14.423 L34.634,17.23 C34.140,8.468 27.229,1.688 18.666,1.356 L18.666,3.332 C18.666,3.701 18.367,3.999 17.999,3.999 C17.631,3.999 17.333,3.701 17.333,3.332 L17.333,1.356 C8.651,1.690 1.690,8.651 1.356,17.332 L3.999,17.332 C4.367,17.332 4.666,17.631 4.666,17.999 C4.666,18.367 4.367,18.666 3.999,18.666 L1.356,18.666 C1.694,27.363 8.675,34.331 17.373,34.654 C17.373,34.654 17.373,34.654 17.373,34.654 C17.741,34.668 18.28,34.977 18.14,35.345 C18.0,35.703 17.706,35.986 17.348,35.986 L17.323,35.986 C7.670,35.627 0.25,27.706 0.9,18.46 C0.8,18.30 0.0,18.16 0.0,17.999 C0.0,17.983 0.9,17.968 0.9,17.952 C0.22,8.47 8.48,0.22 17.952,0.8 C17.969,0.7 17.983,0.0 17.999,0.0 C18.16,0.0 18.30,0.7 18.47,0.8 C27.614,0.22 35.494,7.530 35.970,17.86 L38.635,14.423 C38.893,14.174 39.303,14.174 39.561,14.423 C39.826,14.679 39.833,15.101 39.577,15.366 L35.805,19.137 ZM12.814,12.830 C13.70,12.565 13.492,12.558 13.757,12.814 L17.149,16.206 C17.690,15.964 18.308,15.964 18.849,16.206 L26.13,9.42 C26.274,8.782 26.696,8.782 26.956,9.42 C27.216,9.302 27.216,9.725 26.956,9.985 L19.799,17.142 C20.170,17.904 20.15,18.817 19.413,19.414 C18.815,20.12 17.904,20.169 17.140,19.804 C16.145,19.329 15.724,18.137 16.199,17.142 L12.814,13.756 C12.565,13.498 12.565,13.89 12.814,12.830 ZM17.528,18.470 C17.792,18.722 18.207,18.722 18.471,18.470 C18.471,18.470 18.471,18.470 18.471,18.470 C18.731,18.210 18.731,17.788 18.471,17.527 C18.210,17.267 17.788,17.267 17.528,17.527 C17.268,17.788 17.268,18.210 17.528,18.470 ZM25.733,29.193 C26.698,27.750 26.377,25.806 24.999,24.750 C24.319,24.261 23.503,23.998 22.666,23.998 C20.457,23.999 18.666,25.790 18.666,27.999 C18.666,28.367 18.367,28.666 17.999,28.666 C17.631,28.666 17.333,28.367 17.333,27.999 C17.332,26.882 17.683,25.793 18.335,24.886 C20.53,22.494 23.386,21.948 25.778,23.667 C27.745,25.154 28.205,27.920 26.825,29.963 C26.810,29.985 26.795,30.6 26.778,30.25 L19.440,38.666 L27.333,38.666 C27.701,38.666 27.999,38.964 27.999,39.332 C27.999,39.701 27.701,39.999 27.333,39.999 L17.999,39.999 C17.841,39.999 17.689,39.943 17.568,39.841 C17.288,39.602 17.253,39.182 17.491,38.901 L25.733,29.193 Z"
                          />
                        </g>
                      </svg>}
                    />
                    <QuickContact
                      title={"Get Free Support"}
                      link={"mailto:info@webmail.com"}
                      text={"info@webmail.com"}
                      extraclassName={'email'}
                      svgIcone={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="40px"
                        height="40px"
                      >
                        <image
                          x="0px"
                          y="0px"
                          width="40px"
                          height="40px"
                          xlinkHref="data:img/png;base64,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"
                        />
                      </svg>}
                    />
                  </div>
                  <ul className="social-links-footer2">
                    <SocialLink
                      extraclassName={'fb'}
                      link={'http://facebook.com/'}
                      iconclassName={'facebook'}
                    />
                    <SocialLink
                      extraclassName={'yt'}
                      link={'http://youtube.com/'}
                      iconclassName={'youtube'}
                    />
                    <SocialLink
                      extraclassName={'ttr'}
                      link={'http://twitter.com/'}
                      iconclassName={'twitter'}
                    />
                    <SocialLink
                      extraclassName={'lkd'}
                      link={'http://linkedin.com/'}
                      iconclassName={'linkedin'}
                    />
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 box-widget-col2">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">About Us</h3>
                  <p className="widget-text">
                    Elegant pink origami design three type of dimensional view and
                    decoration co Great for adding a decorative touch to any room’s
                    decor.
                  </p>
                  <Link to={'#0'} className="getin-touch">
                    Get In Touch <i className="fal fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-13 col-md-6 col-sm-6 no-gutters">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Information</h3>
                  <ul className="widget-items cata-widget">
                    <ListItem link={'#0'} title={'About'} />
                    <ListItem link={'#0'} title={"FAQ's"} />
                    <ListItem link={'#0'} title={'Wishlist'} />
                    <ListItem link={'#0'} title={'Wishlist'} />
                    <ListItem link={'#0'} title={'Cart'} />
                    <ListItem link={'#0'} title={'Checkout'} />
                  </ul>
                </div>
              </div>
              <div className="col-lg-13 col-md-6 col-sm-6 no-gutters">
                <h3 className="footer-widget-title">My Account</h3>
                <ul className="footer-widget">
                  <ListItem link={'#0'} title={'Wishlist'} />
                  <ListItem link={'#0'} title={'Cart'} />
                  <ListItem link={'#0'} title={'Checkout'} />
                  <ListItem link={'#0'} title={'My Account'} />
                  <ListItem link={'#0'} title={'Shop'} />
                </ul>
              </div>
              <div className="col-lg-25 col-md-6 col-sm-6">
                <h3 className="footer-widget-title">Get Newsletter</h3>
                <div className="footer-widget newsletter-widget">
                  <span className="widget-text">
                    Get 10% off your first order! Hurry up
                  </span>
                  <div className="input-div">
                    <input type="email" placeholder="Enter email address" />
                  </div>
                  <Link to={'#0'} className="subscribe-btn">
                    Subscribe Now <i className="fal fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-bottombar">
              <div className="app-download">
                <span className="download-text">Order faster with our App!</span>
                <Link
                  to="/"
                  target="_blank"
                  className="download-store"
                >
                  <img src="assets/images/items/appstore.jpg" alt="" />
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className="download-store"
                >
                  <img src="assets/images/items/playstore.jpg" alt="" />
                </Link>
              </div>
              <div className="payment-methods">
                <img
                  src="assets/images/footer/payment2.svg"
                  alt="payment-methods"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="footer-bottom-inner">
              <span className="copyright">
                Copyright &amp; Design By{" "}
                <Link to="/" className="brand" target="_blank">
                  Reacthemes
                </Link>{" "}
                -2022
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*================= Footer End Here =================*/}
    </React.Fragment>
  )
}