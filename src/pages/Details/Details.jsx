import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Button from "../../components/Button"
import {Wrapper, Cover, ContInfo, ContFavorites} from "./styles";
import {getCarByStockNumberAction} from "../../state/actions";

const mapStateToProps = state => {
  return {
    car: state.carByStockNumber,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    getCarByStockNumber: id => dispatch(getCarByStockNumberAction(id)),
  }
}

function Details(props){
  const { match, car, getCarByStockNumber } = props;
  const {color, fuelType, manufacturerName, mileage = {}, modelName, pictureUrl, stockNumber} = car;
  console.log("car", car)

  useEffect(() => {
    getCarByStockNumber(match.params.id)
  }, []);

  return  <div className="container bodyContainer">
            <Cover/>
            <Wrapper>
              <ContInfo>
                <h2>{manufacturerName} {modelName}</h2>
                <h3>Stock # {stockNumber} - {mileage.number} {mileage.unit} - {fuelType} - {color}</h3>
                <p>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</p>
              </ContInfo>
              <ContFavorites>
                <p>If you like this car, click the button and save it in your collection of favourite items.</p>
                <Button value={"Save"} onClick={info => console.log("save")}/> 
              </ContFavorites>
            </Wrapper>
          </div>
}

Details.propTypes = {
    car: PropTypes.object.isRequired,
    getCarByStockNumber: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired, 
      }), 
    }).isRequired, 
}

export default connect(mapStateToProps, mapDispachToProps)(Details);
