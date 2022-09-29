import React from 'react'
import { Link } from 'react-router-dom';

const SocialLink = (props) => {
  return (
    <>
      <li>
        <Link
          className={`platform ${props.extraclassName}`}
          target="_blank"
          to={props.link}
        >
          <i className={`fab fa-${props.iconclassName}`} />
        </Link>
      </li>
    </>
  )
}

export default SocialLink