import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';

function Button(props){
    const {value, onClick= () =>{}} = props; 

    return  <Wrapper as="button" onClick={onClick}>{value}</Wrapper>
}

Button.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string.isRequired,
  }
  
  
export default Button;
