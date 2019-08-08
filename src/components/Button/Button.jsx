import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';

function Button(props){
    const {value} = props; 

    return  <Wrapper as="button" onClick={event => console.log(event)}>{value}</Wrapper>
}

Button.propTypes = {
    value: PropTypes.string.isRequired
  }
  
  
export default Button;
