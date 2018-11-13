import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props => {
  return (
    <div style={{display: "flex", position: "relative", left: 725}}>
      <Link className="nav" id="back" to={props.back}>Back</Link>
      <Link className="nav" id="next" to={props.next}>Next</Link>
    </div>
  );
};

export default Nav;
