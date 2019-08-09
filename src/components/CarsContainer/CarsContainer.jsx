import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Card from "../../components/Card";
import {getAllCars} from "../../state/actions";

const mapStateToProps = state => {
  return {
    cars: state.carsInfo.cars,
    sortSelected: state.sortSelected,
    pageSelected: state.pageSelected,
    filterSelected: state.filterSelected,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    getAllCars: (filterSelected, sortSelected, pageSelected) => dispatch(getAllCars(filterSelected, sortSelected, pageSelected)),
  }
}

function CarsContainer(props){
  const {cars, getAllCars, sortSelected, pageSelected, filterSelected} = props; 

  useEffect(() => {
    getAllCars(filterSelected, sortSelected, pageSelected);
  }, [filterSelected, sortSelected, pageSelected])


  return  <Fragment>{cars.map((car, index) => <Card key={`${car.modelName}${index}`} {...car}/>)}</Fragment>
}

CarsContainer.propTypes = {
    onClick: PropTypes.func,
    sortSelected: PropTypes.oneOfType([
      PropTypes.object,  
      PropTypes.bool,  
    ]).isRequired,
    pageSelected: PropTypes.number.isRequired,
    filterSelected: PropTypes.object.isRequired,
    cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default connect(mapStateToProps, mapDispachToProps)(CarsContainer);
