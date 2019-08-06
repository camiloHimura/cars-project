import React from 'react';
import "./Details.css";
import PropTypes from 'prop-types';

function Details(props){
  const { match } = props;
  
  return  <h3>Requested Param: {match.params.id}</h3>;
}

Details.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired, 
      }), 
    }).isRequired, 
}

export default Details;
