import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Dropdown from '../Dropdown';
import {ContFilter} from './styles';

function FilterBox(props){
  const {colors, manufacturers, onChange = () =>{}} = props; 

  const [selectedColor, setselectedColor] = useState(false);
  const [selectedManufacturer, setSelectedManufacturer] = useState(false);

  function sendFilters(){
    onChange({color: selectedColor, manufacturer: selectedManufacturer})
  }

  return  <ContFilter>
            <h3>Color</h3>
            <Dropdown 
              options={colors} 
              defaultValue="All Car Colors" 
              onChange={option => setselectedColor(option)}/>
            
            <h3>Manufacturer</h3>
            <Dropdown
              objKey="name"
              isOptionsObj={true}
              options={manufacturers} 
              defaultValue="All Manufacturers" 
              onChange={option => setSelectedManufacturer(option)}/>

            <Button value={"Filter"} onClick={sendFilters}/>
          </ContFilter>
}

FilterBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  manufacturers: PropTypes.arrayOf(PropTypes.object).isRequired
}
  
export default FilterBox;
