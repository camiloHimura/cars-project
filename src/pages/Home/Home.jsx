import React from 'react';
import {connect} from "react-redux";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import {Wrapper, ContFilter, ContData, ContInfoFilter} from "./styles";

/* const mapStateToProps = state => {
  return {
    cars: state.carsInfo.cars,
    totalCarsCount: state.carsInfo.totalCarsCount,
    totalPageCount: state.carsInfo.totalPageCount,
  }           
} */

/* const mapDispachToProps = dispatch => {
  return {
      getAllTags: () => dispatch(getAllTags()),
  }
} */

export default function Home(){
    return  <Wrapper className="container">
              <ContFilter>
                <h3>Color</h3>
                <Dropdown options={["one", "Two", "Three"]} onChange={option => console.log('options selected', option)}/>
                
                <h3>Manufacturer</h3>
                <Dropdown options={["one", "Two", "Three"]} onChange={option => console.log('options selected', option)}/>

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
              
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

              </ContData>
            </Wrapper>
}

/* export default connect(mapStateToProps, mapDispachToProps)(Home); */
