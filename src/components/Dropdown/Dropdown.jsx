import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Wrapper, ContOptions} from './styles';

function Dropdown(props){
  const {defaultValue = "None", onChange} = props;
  const options = [ defaultValue, ...props.options]
  let [value, setValue] = useState(defaultValue);
  let [open, setOpen] = useState(false);

  function toggleOptions(){
    setOpen(!open);
  }

  function hideOptions(){
    setOpen(false);
  }

  function optionSelected(option){
    setOpen(false);
    setValue(option);
    onChange(option);
  }

  return  <Wrapper onBlur={hideOptions} className="dropdowm">
            <button onClick={toggleOptions} className={open? 'rotate': ''}>{value}</button>
            {open && <ContOptions>
                        {options.map((option, key) => 
                            <button key={`${key}-${option}`} onMouseDown={e => optionSelected(option)}>{option}</button> 
                          )}
                      </ContOptions>}
          </Wrapper>

}

Dropdown.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
}


export default Dropdown;
