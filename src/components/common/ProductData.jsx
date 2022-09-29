import React from 'react'


export default function ProductData() {
  return (
    <React.Fragment>
      <div className="details-product-area mb--70">
        <div className="product-thumb-area">
          <div className="cursor" />
          <div className="thumb-wrapper one filterd-items figure">
            <div
              className="product-thumb zoom"
              onmousemove="zoom(event)"
              style={{
                backgroundImage: "url(assets/images/products/product-details.jpg)"
              }}
            >
              <img
                src="assets/images/products/product-details.jpg"
                alt="product-thumb"
              />
            </div>
          </div>
          <div className="thumb-wrapper two filterd-items hide">
            <div
              className="product-thumb zoom"
              onmousemove="zoom(event)"
              style={{
                backgroundImage: "url(assets/images/products/product-filt2.jpg)"
              }}
            >
              <img
                src="assets/images/products/product-filt2.jpg"
                alt="product-thumb"
              />
            </div>
          </div>
          <div className="thumb-wrapper three filterd-items hide">
            <div
              className="product-thumb zoom"
              onmousemove="zoom(event)"
              style={{
                backgroundImage: "url(assets/images/products/product-filt3.jpg)"
              }}
            >
              <img
                src="assets/images/products/product-filt3.jpg"
                alt="product-thumb"
              />
            </div>
          </div>
          <div className="product-thumb-filter-group">
            <div className="thumb-filter filter-btn active" data-show=".one">
              <img
                src="assets/images/products/product-filt1.jpg"
                alt="product-thumb-filter"
              />
            </div>
            <div className="thumb-filter filter-btn" data-show=".two">
              <img
                src="assets/images/products/product-filt2.jpg"
                alt="product-thumb-filter"
              />
            </div>
            <div className="thumb-filter filter-btn" data-show=".three">
              <img
                src="assets/images/products/product-filt3.jpg"
                alt="product-thumb-filter"
              />
            </div>
          </div>
        </div>
        <div className="contents">
          <div className="product-status">
            <span className="product-catagory">Dress</span>
            <div className="rating-stars-group">
              <div className="rating-star">
                <i className="fas fa-star" />
              </div>
              <div className="rating-star">
                <i className="fas fa-star" />
              </div>
              <div className="rating-star">
                <i className="fas fa-star-half-alt" />
              </div>
              <span>10 Reviews</span>
            </div>
          </div>
          <h2 className="product-title">
            Wide Cotton Tunic Dress <span className="stock">In Stock</span>
          </h2>
          <span className="product-price">
            <span className="old-price">$9.35</span> $7.25
          </span>
          <p>
            Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is
            a completely modern design and you feel comfortable to put on this
            hijab. Buy it at the best price.
          </p>
          <div className="product-bottom-action">
            <div className="cart-edit">
              <div className="quantity-edit action-item">
                <button className="button">
                  <i className="fal fa-minus minus" />
                </button>
                <input type="text" className="input" defaultValue={1} />
                <button className="button plus">
                  {/* +<i className="fal fa-plus plus" /> */}
                </button>
              </div>
            </div>
            <a href="cart.html" className="addto-cart-btn action-item">
              <i className="rt-basket-shopping" /> Add To Cart
            </a>
            <a href="wishlist.html" className="wishlist-btn action-item">
              <i className="rt-heart" />
            </a>
          </div>
          <div className="product-uniques">
            <span className="sku product-unipue">
              <span>SKU: </span> BO1D0MX8SJ
            </span>
            <span className="catagorys product-unipue">
              <span>Categories: </span> T-Shirts, Tops, Mens
            </span>
            <span className="tags product-unipue">
              <span>Tags: </span> fashion, t-shirts, Men
            </span>
          </div>
          <div className="share-social">
            <span>Share:</span>
            <a className="platform" href="http://facebook.com" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="platform" href="http://twitter.com" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a className="platform" href="http://behance.com" target="_blank">
              <i className="fab fa-behance" />
            </a>
            <a className="platform" href="http://youtube.com" target="_blank">
              <i className="fab fa-youtube" />
            </a>
            <a className="platform" href="http://linkedin.com" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
