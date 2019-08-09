import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import {Wrapper, ContFilter, ContData, ContInfoFilter} from "./styles";

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
  const {getAllCars, getColors, getManufacturers, cars, colors, manufacturers} = props;

  useEffect(() => {
    getColors();
    getAllCars();
    getManufacturers();
  }, [])

  return  <Wrapper className="container">
            <ContFilter>
              <h3>Color</h3>
              <Dropdown 
                options={colors} 
                defaultValue="All Car Colors" 
                onChange={option => console.log('options selected', option)}/>
              
              <h3>Manufacturer</h3>
              <Dropdown
                objKey="name"
                isOptionsObj={true}
                options={manufacturers} 
                defaultValue="All Manufacturers" 
                onChange={option => console.log('options selected', option)}/>

              <Button value={"Filter"}/>
            </ContFilter>

            <ContData>
              <ContInfoFilter>
                <div>
                  <h2>Available cars</h2>
                  <h3>Showing 10 of 100 results</h3>
                </div>
                <div>
                  <h3 className="sortTitle">Sort by</h3>
                  <Dropdown options={["one", "Two", "Three"]} onChange={option => console.log('options selected', option)}/>
                </div>
              </ContInfoFilter>

              {cars.map((car, index) => <Card key={`${car.modelName}${index}`}/>)}

            </ContData>
          </Wrapper>
}

export default connect(mapStateToProps, mapDispachToProps)(Home);
