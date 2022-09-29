import React from 'react';
import { Link } from 'react-router-dom';

const QuickContact = (props) => {
    return (
        <>
            <div className={`${props.extraclassName} contact-item`}>
                <div className="icon">
                    {props.svgIcone}
                </div>
                <div className="contact-info">
                    <span className="title">{props.title}</span>
                    <Link to={props.link} className="service-time info">
                        {props.text}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default QuickContact