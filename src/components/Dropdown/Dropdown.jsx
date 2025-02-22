import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Wrapper, ContOptions} from './styles';

function Dropdown(props){
  const {defaultValue = "None", onChange, isOptionsObj = false, label, objKey , style, selected = false} = props;
  const options = [ defaultValue, ...props.options];

  let [value, setValue] = useState(selected ? selected: defaultValue);
  let [open, setOpen] = useState(false);

  function toggleOptions(){
    setOpen(!open);
  }

  function hideOptions(){
    setOpen(false);
  }

  function optionSelected(option){
    setOpen(false);
    setValue(isOptionsObj? option[label]: option);
    onChange(option === defaultValue ? false: option);
  }

  function defaultSelected(){
    setOpen(false);
    setValue(defaultValue);
    onChange(false);
  }

  return  <Wrapper onBlur={hideOptions} className="dropdowm" style={style}>
            <button onClick={toggleOptions} className={open? 'rotate': ''}>{value}</button>
            {open && <ContOptions>
                        {options.map((option, key) => {
                            if(key === 0){
                              return <button key={`${key}-${objKey}`} onMouseDown={defaultSelected}>{defaultValue}</button> 
                            }
                            if(isOptionsObj){
                              return <button key={`${key}-${objKey}`} onMouseDown={e => optionSelected(option)}>{option[label]}</button> 
                            }
                            return <button key={`${key}-${option}`} onMouseDown={e => optionSelected(option)}>{option}</button> 
                          })}
                      </ContOptions>}
          </Wrapper>

}

Dropdown.propTypes = {
  style: PropTypes.object,
  objKey: PropTypes.string,
  label: PropTypes.string,
  isOptionsObj: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
          ]).isRequired,
  selected: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
          ])
}


export default Dropdown;
