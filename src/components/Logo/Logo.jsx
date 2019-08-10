import React from 'react';
import logo from '../../sources/logo.png';
import PropTypes from 'prop-types';

function Logo(props){
  const {style} = props;

  return  <img className="logo" style={style} src={logo} alt="logo"/>
}

Logo.propTypes = {
  style: PropTypes.object,
}
  
  
export default Logo;