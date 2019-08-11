import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Card from "../../components/Card";
import LoadingCard from "../../components/LoadingCard";
import {getAllCars, setPage} from "../../state/actions";
import Pagination from "../../components/Pagination";
import {ITEMS_PER_PAGE} from "../../const";

const mapStateToProps = state => {
  return {
    cars: state.carsInfo.cars,
    carsLoaded: state.carsInfo.loaded,
    sortSelected: state.sortSelected,
    pageSelected: state.pageSelected,
    filterSelected: state.filterSelected,
    totalCarsCount: state.carsInfo.totalCarsCount,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    setPage: num => dispatch(setPage(num)),
    getAllCars: (filterSelected, sortSelected, pageSelected) => dispatch(getAllCars(filterSelected, sortSelected, pageSelected)),
  }
}

function CarsContainer(props){
  const {cars = [], getAllCars, sortSelected, pageSelected, setPage, filterSelected, totalCarsCount, carsLoaded} = props; 

  useEffect(() => {
    getAllCars(filterSelected, sortSelected, pageSelected);
  }, [filterSelected, sortSelected, pageSelected])


  return  <Fragment>
            {!carsLoaded && Array.from({length: ITEMS_PER_PAGE}, (info, index) => <LoadingCard key={`${index}-loading`}/>)}
            {carsLoaded && cars.map((car, index) => <Card key={`${car.modelName}${index}`} {...car}/>)}

            <Pagination 
              setPage={setPage}
              pageSelected={pageSelected} 
              itemsPerPage={ITEMS_PER_PAGE}
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
