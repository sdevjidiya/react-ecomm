import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  return (
    <>
      <li className="widget-list-item">
        <Link to={props.link}>{props.title}</Link>
      </li>
    </>
  )
}

export default ListItem;