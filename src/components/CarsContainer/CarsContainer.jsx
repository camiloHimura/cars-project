import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Card from "../../components/Card";
import {getAllCars, setPage} from "../../state/actions";
import Pagination from "../../components/Pagination";

const mapStateToProps = state => {
  return {
    cars: state.carsInfo.cars,
    sortSelected: state.sortSelected,
    pageSelected: state.pageSelected,
    filterSelected: state.filterSelected,
    totalCarsCount: state.carsInfo.totalCarsCount,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    getAllCars: (filterSelected, sortSelected, pageSelected) => dispatch(getAllCars(filterSelected, sortSelected, pageSelected)),
    setPage: num => dispatch(setPage(num)),
  }
}

function CarsContainer(props){
  const {cars, getAllCars, sortSelected, pageSelected, setPage, filterSelected, totalCarsCount} = props; 

  useEffect(() => {
    getAllCars(filterSelected, sortSelected, pageSelected);
  }, [filterSelected, sortSelected, pageSelected])


  return  <Fragment>
            {cars.map((car, index) => <Card key={`${car.modelName}${index}`} {...car}/>)}
            <Pagination 
              setPage={setPage}
              pageSelected={pageSelected} 
              totalCarsCount={totalCarsCount}
            />
          </Fragment>
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
