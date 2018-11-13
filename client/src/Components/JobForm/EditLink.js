import React from 'react';
import { Link } from 'react-router-dom';
import { BorderColor } from '@material-ui/icons/';

const EditLink = props => {
  return (
    <Link to={props.to}><BorderColor style={{color: "black"}}/></Link>
  );
};

export default EditLink;
