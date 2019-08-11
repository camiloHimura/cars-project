import React, {useEffect} from 'react';
import {connect} from "react-redux";

import FilterBox from "../../components/FilterBox";
import CarsContainer from "../../components/CarsContainer";
import ContInfoFilter from "../../components/ContInfoFilter";

import {Wrapper, ContData} from "./styles";

import {getColors, getManufacturers, filtersSelected, sortSelected} from "../../state/actions";

const mapStateToProps = state => {
  return {
    colors: state.colors,
    cars: state.carsInfo.cars,
    filterSelected: state.filterSelected,
    manufacturers: state.manufacturers,
    totalCarsCount: state.carsInfo.totalCarsCount,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    getColors: () => dispatch(getColors()),
    getManufacturers: () => dispatch(getManufacturers()),
    setSortSelected: info => dispatch(sortSelected(info)),
    setFiltersSelected: filters => dispatch(filtersSelected(filters)),
  }
}

function Home(props){
  /* console.log("Home", props); */
  const { getColors, getManufacturers, setFiltersSelected, setSortSelected, cars, 
          sortSelected, filterSelected, colors = [], manufacturers = [], totalCarsCount} = props;

  useEffect(() => {
    if(colors.length === 0){getColors()};
    if(manufacturers.length === 0){getManufacturers();};
  }, [])

  return  <Wrapper className="container bodyContainer">
            <FilterBox 
              colors={colors}
              manufacturers={manufacturers}
              onChange={setFiltersSelected}
              colorSelected={filterSelected.color}
              manufacturerSelected={filterSelected.manufacturer.name}
            />

            <ContData>
              <ContInfoFilter 
                numberCars={cars.length} 
                sortSelected={sortSelected}
                totalCarsCount={totalCarsCount}
                setSortSelected={setSortSelected}
              />
              <CarsContainer/>
            
              </ContData>
          </Wrapper>
}

export default connect(mapStateToProps, mapDispachToProps)(Home);
