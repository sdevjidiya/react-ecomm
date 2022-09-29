import React from 'react'

import { ProductData, FeaturedItemsList } from "../components"

export default function ProductDetails() {

  return (
    <React.Fragment>
      <div className="rts-product-details-section section-gap">
        <div className="container">
          <ProductData />
          <div className="product-full-details-area">
            <div className="details-filter-bar2">
              <button
                className="details-filter filter-btn active"
                data-show=".dls-one"
              >
                Description
              </button>
              <button className="details-filter filter-btn" data-show=".dls-two">
                Additional information
              </button>
              <button className="details-filter filter-btn" data-show=".dls-three">
                Reviews (0)
              </button>
            </div>
            <div className="full-details dls-one filterd-items">
              <div className="full-details-inner">
                <p className="mb--30">
                  In marketing a product is an object or system made available for
                  consumer use it is anything that can be offered to a market to
                  satisfy the desire or need of a customer. In retailing, products are
                  merchandise, and in manufacturing, products are bought as raw
                  materials and then sold as finished goods. A service is also
                  regarded to as a type of product. Commodities are usually raw
                  material and agricultural products, but a commodity can also be
                  anything widely available in the open market. In project management,
                  products are the formal definition of the project deliverables that
                  to delivering the objectives of the project.
                </p>
                <p>
                  A product can be classified as tangible or intangible. A tangible
                  product is a physical object that can be perceived by touch such as
                  a building, vehicle, gadget, or clothing. An intangible product is
                  can only be perceived indirectly such as an insurance policy.
                  Services can be broadly classified under intangible products which
                  can be durable or non durable. A product line is "a group of closely
                  related, either because they function in a similar manner, are sold
                  to the same customer groups, are marketed through the same types of
                  outlets, or fall within given price ranges."Many range of product
                  lines which may be unique to a single organisation or may be common
                  across the business's industry. In 2002 the US Census compiled
                  revenue figures for the finance and various product lines such as
                  "accident, health and medical insurance premiums" and "income from
                  secured consumer loans.
                </p>
              </div>
            </div>
            <div className="full-details dls-two filterd-items hide">
              <div className="full-details-inner">
                <p className="mb--30">
                  In marketing a product is an object or system made available for
                  consumer use it is anything that can be offered to a market to
                  satisfy the desire or need of a customer. In retailing, products are
                  merchandise, and in manufacturing, products are bought as raw
                  materials and then sold as finished goods. A service is also
                  regarded to as a type of product. Commodities are usually raw
                  material and agricultural products, but a commodity can also be
                  anything widely available in the open market. In project management,
                  products are the formal definition of the project deliverables that
                  to delivering the objectives of the project.
                </p>
                <p>
                  A product can be classified as tangible or intangible. A tangible
                  product is a physical object that can be perceived by touch such as
                  a building, vehicle, gadget, or clothing. An intangible product is
                  can only be perceived indirectly such as an insurance policy.
                  Services can be broadly classified under intangible products which
                  can be durable or non durable. A product line is "a group of closely
                  related, either because they function in a similar manner.
                </p>
              </div>
            </div>
            <div className="full-details dls-three filterd-items hide">
              <div className="full-details-inner">
                <p>There are no reveiws yet.</p>
                <div className="row">
                  <div className="col-lg-12 col-md-12 mr-10">
                    <div className="reveiw-form">
                      <h2 className="section-title">
                        Be the first to reveiw{" "}
                        <strong>
                          {" "}
                          <a href="product-details.html">"Wide Cotton Tunic Dress"</a>
                        </strong>
                      </h2>
                      <h4 className="sect-title">
                        Your email address will not be published. Required fields are
                        marked*{" "}
                      </h4>
                      <div className="reveiw-form-main mb-10">
                        <div className="contact-form">
                          <div className="row">
                            <div className="col-lg-6 col-sm-12">
                              <div className="input-box text-input mb-20">
                                <textarea
                                  name="Message"
                                  id="validationDefault01"
                                  cols={30}
                                  rows={10}
                                  placeholder="Your Review*"
                                  required=""
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                              <div className="col-lg-12">
                                <div className="input-box mb-20">
                                  <input
                                    type="text"
                                    id="validationDefault02"
                                    placeholder="Name*"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="input-box mail-input mb-20">
                                  <input
                                    type="text"
                                    id="validationDefault03"
                                    placeholder="E-mail*"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="rating">
                                  <p>Your Rating :</p>
                                  <div className="rating-icon">
                                    <span className="one">
                                      <a href="#">
                                        {" "}
                                        <i className="fal fa-star" />
                                      </a>
                                    </span>
                                    <span className="two">
                                      <a href="#">
                                        {" "}
                                        <i className="fal fa-star" />
                                      </a>
                                    </span>
                                    <span className="three">
                                      <a href="#">
                                        {" "}
                                        <i className="fal fa-star" />
                                      </a>
                                    </span>
                                    <span className="four">
                                      <a href="#">
                                        {" "}
                                        <i className="fal fa-star" />
                                      </a>
                                    </span>
                                    <span className="five">
                                      <a href="#">
                                        {" "}
                                        <i className="fal fa-star" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 mb-15">
                                <button className="form-btn form-btn4">
                                  Submit <i className="fal fa-long-arrow-right" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedItemsList icon={"wvbo-icon.png"} title={"FEATURED PRODUCT 3"} sub_title={"Featured"} />
    </React.Fragment>
  )
}
