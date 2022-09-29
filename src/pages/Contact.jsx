import React from 'react'

import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <React.Fragment>
      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <form className="contact-form mb-10">
                <div className="section-header section-header5 text-start">
                  <div className="wrapper">
                    <div className="sub-content">
                      <img
                        className="line-1"
                        src="assets/images/banner/wvbo-icon.png"
                        alt=""
                      />
                      <span className="sub-text">Contact Us</span>
                    </div>
                    <h2 className="title">MAKE CUSTOM REQUEST</h2>
                  </div>
                </div>
                <div className="info-form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="input-box mb-20">
                        <input
                          type="text"
                          id="validationDefault01"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="input-box mail-input mb-20">
                        <input
                          type="email"
                          id="validationDefault02"
                          placeholder="E-mail Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="input-box number-input mb-30">
                        <input
                          type="number"
                          id="validationDefault03"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="input-box sub-input mb-30">
                        <input
                          type="text"
                          id="validationDefault04"
                          placeholder="Subject..."
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <div className="input-box text-input mb-20">
                        <textarea
                          name="Message"
                          id="validationDefault05"
                          cols={30}
                          rows={10}
                          placeholder="Enter message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-15">
                      <Link to="#" className="form-btn form-btn4">
                        Get A Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="right-side">
                <div className="get-in-touch">
                  <h3 className="section-title2">GET IN TOUCH</h3>
                  <div className="contact">
                    <ul>
                      <li className="one">
                        24/26 Strait Bargate, Boston, PE21, United Kingdom
                      </li>
                      <li className="two">
                        <Link to="tel:+0989057868978">+098 (905) 786 897 8</Link>
                        <Link to="tel:61463895748">6 - 146 - 389 - 5748</Link>
                      </li>
                      <li className="three">
                        Store Hours: <br />
                        10 am - 10 pm EST, 7 days a week
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-button">
                  <div className="btn-1">
                    <Link to="#">
                      Get Support On Call <i className="fal fa-headphones-alt" />
                    </Link>
                  </div>
                  <div className="btn-2">
                    <Link to="#">
                      Get Direction <i className="rt-location-dot" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.0452483624595!2d90.424043!3d23.781403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3cc42b4e4b430164!2sReacThemes!5e0!3m2!1sen!2sbd!4v1656420500360!5m2!1sen!2sbd"
              height={500}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </p>
        </div>
      </div>

    </React.Fragment>
  )
}
