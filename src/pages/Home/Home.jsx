import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import FilterBox from "../../components/FilterBox";
import {Wrapper, ContData, ContInfoFilter} from "./styles";

import {getAllCars, getColors, getManufacturers} from "../../state/actions";

const mapStateToProps = state => {
  return {
    colors: state.colors,
    cars: state.carsInfo.cars,
    manufacturers: state.manufacturers,
    totalCarsCount: state.carsInfo.totalCarsCount,
    totalPageCount: state.carsInfo.totalPageCount,
  }           
}

const mapDispachToProps = dispatch => {
  return {
      getAllCars: () => dispatch(getAllCars()),
      getColors: () => dispatch(getColors()),
      getManufacturers: () => dispatch(getManufacturers()),
  }
}

export function Home(props){
  console.log(props);
  const {getAllCars, getColors, getManufacturers, cars, 
          colors = [], manufacturers = [], totalCarsCount, totalPageCount} = props;

  useEffect(() => {
    getColors();
    getAllCars();
    getManufacturers();
  }, [])

  return  <Wrapper className="container">
            <FilterBox 
              colors={colors} 
              manufacturers={manufacturers}
              onChange={filters => console.log('filters', filters)}
            />

            <ContData>
              <ContInfoFilter>
                <div>
                  <h2>Available cars</h2>
                  <h3>Showing {totalPageCount} of {totalCarsCount} results</h3>
                </div>
                <div>
                  <h3 className="sortTitle">Sort by</h3>
                  <Dropdown
                    defaultValue="None"
                    style={{minWidth: "140px"}}
                    options={["Mileage ASC", "Mileage DESC"]} 
                    onChange={option => console.log('options selected', option)}/>
                </div>

              </ContInfoFilter>

              {cars.map((car, index) => <Card key={`${car.modelName}${index}`} {...car}/>)}

            </ContData>
          </Wrapper>
}

export default connect(mapStateToProps, mapDispachToProps)(Home);
