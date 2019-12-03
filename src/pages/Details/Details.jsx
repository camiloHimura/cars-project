import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import FavoritesManager from "../../components/FavoritesManager"
import {Wrapper, Cover, ContInfo} from "./styles";
import {getCarByStockNumberAction} from "../../state/actions";

const mapStateToProps = state => ({
                          car: state.carByStockNumber,
                        })

const mapDispachToProps = dispatch => ({
                            getCarByStockNumber: (id, history) => dispatch(getCarByStockNumberAction(id, history)),
                          })

function Details(props){
  const { match, car, getCarByStockNumber, history} = props;
  const {color, fuelType, manufacturerName, mileage = {}, modelName, pictureUrl, stockNumber} = car;

  useEffect(() => {
    getCarByStockNumber(match.params.id, history)
  }, []);

  return  <div className="container bodyContainer">
            <Cover/>
            <Wrapper>
              <ContInfo>
                <h2>{manufacturerName} {modelName}</h2>
                <h3>Stock # {stockNumber} - {mileage.number} {mileage.unit} - {fuelType} - {color}</h3>
                <p>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</p>
              </ContInfo>
              <FavoritesManager id={match.params.id}/>
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
