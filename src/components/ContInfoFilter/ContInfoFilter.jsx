import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';
import Dropdown from "../../components/Dropdown";

function ContInfoFilter(props){
    const {numberCars, totalCarsCount, sortSelected = {}, setSortSelected = () => {}} = props; 

    return  <Wrapper>
              <div>
                <h2>Available cars</h2>
                <h3>Showing {numberCars} of {totalCarsCount} results</h3>
              </div>
              <div>
                <h3 className="sortTitle">Sort by</h3>
                <Dropdown
                  label="label"
                  objKey="value"
                  isOptionsObj={true}
                  defaultValue="None"
                  onChange={setSortSelected}
                  style={{minWidth: "140px"}}
                  selected={sortSelected.label}
                  options={[{label: "Mileage ASC", value: "asc"}, {label: "Mileage DESC", value: "desc"}]} 
                  />
              </div>
            </Wrapper>
}

ContInfoFilter.propTypes = {
    sortSelected: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    numberCars: PropTypes.number,
    setSortSelected: PropTypes.func,
    totalCarsCount: PropTypes.number,
  }
  

export default ContInfoFilter;
