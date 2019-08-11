import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Wrapper, Content, Img} from './styles';

function Card(props){
  const {color, fuelType, manufacturerName, mileage = {number: 0, unit: ""}, 
          modelName, pictureUrl, stockNumber} = props; 

  return  <Wrapper>
            <Img>
              <img alt="" src={pictureUrl}/>
            </Img>
            <Content>
              <h2>{manufacturerName} {modelName}</h2>
              <p>Stock # {stockNumber} - {mileage.number} {mileage.unit} - {fuelType} - {color}</p>
              <Link to={`/details/${stockNumber}`}>View details</Link>
            </Content>
          </Wrapper>
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  manufacturerName: PropTypes.string.isRequired,
  mileage: PropTypes.shape({
      unit: PropTypes.string,
      number: PropTypes.number
    }).isRequired,
  modelName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  stockNumber: PropTypes.number.isRequired,
}

export default Card;
