import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Dropdown from "../../components/Dropdown";
import FilterBox from "../../components/FilterBox";
import CarsContainer from "../../components/CarsContainer";

import {Wrapper, ContData, ContInfoFilter} from "./styles";

import {getColors, getManufacturers, filtersSelected, sortSelected} from "../../state/actions";

const mapStateToProps = state => {
  return {
    colors: state.colors,
    cars: state.carsInfo.cars,
    sortSelected: state.sortSelected,
    filterSelected: state.filterSelected,
    manufacturers: state.manufacturers,
    totalCarsCount: state.carsInfo.totalCarsCount,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    getColors: () => dispatch(getColors()),
    getManufacturers: () => dispatch(getManufacturers()),
    setSortSelected: sort => dispatch(sortSelected(sort)),
    setFiltersSelected: filters => dispatch(filtersSelected(filters)),
  }
}

function Home(props){
  console.log("Home", props);
  const { getColors, getManufacturers, setFiltersSelected, setSortSelected, cars, 
          sortSelected, filterSelected, colors = [], manufacturers = [], totalCarsCount} = props;

  useEffect(() => {
    getColors();
    getManufacturers();
  }, [])

  return  <Wrapper className="container">
            <FilterBox 
              colors={colors}
              manufacturers={manufacturers}
              onChange={setFiltersSelected}
              colorSelected={filterSelected.color}
              manufacturerSelected={filterSelected.manufacturer.name}
            />

            <ContData>
              <ContInfoFilter>
                <div>
                  <h2>Available cars</h2>
                  <h3>Showing {cars.length} of {totalCarsCount} results</h3>
                </div>
                <div>
                  <h3 className="sortTitle">Sort by</h3>
                  <Dropdown
                    label="label"
                    objKey="value"
                    isOptionsObj={true}
                    defaultValue="None"
                    selected={sortSelected.label}
                    style={{minWidth: "140px"}}
                    options={[{label: "Mileage ASC", value: "asc"}, {label: "Mileage DESC", value: "desc"}]} 
                    onChange={setSortSelected}/>
                </div>
              </ContInfoFilter>

              <CarsContainer/>

            </ContData>
          </Wrapper>
}

export default connect(mapStateToProps, mapDispachToProps)(Home);
