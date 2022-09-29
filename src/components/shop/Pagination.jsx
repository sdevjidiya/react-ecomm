import React from 'react'

export default function Pagination() {
  return (
    <React.Fragment>
      <div className="product-pagination-area mt--20">
        <button className="prev">
          <i className="far fa-long-arrow-left" />
        </button>
        <button className="number active">01</button>
        <button className="number">02</button>
        <button className="skip-number">---</button>
        <button className="number">07</button>
        <button className="number">08</button>
        <button className="next">
          <i className="far fa-long-arrow-right" />
        </button>
      </div>
    </React.Fragment>
  )
}
