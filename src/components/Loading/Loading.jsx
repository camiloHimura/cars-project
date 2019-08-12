import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';

function Loading(props){
    const {text} = props; 

    return  <Wrapper>{text}</Wrapper>
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}
  
export default Loading;
