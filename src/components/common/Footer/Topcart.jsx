import React from 'react'

function Topcart(props) {
    return (
        <>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className={`wrapper ${props.extraclassName}`}>
                    <div className="icon">
                        {props.svgIcone}
                    </div>
                    <div className="title">
                        <h1 className="box-title">{props.title}</h1>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topcart