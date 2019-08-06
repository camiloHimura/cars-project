import React, {useState, useRef} from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
  outline: none;
  max-width: 300px;
  position: relative;
  border-radius: 2px;
  border: 1px solid var(--light-gray);

  & > button:first-child {
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
  }
  
  & > button:first-child::before {
    content: "";
    top: 50%;
    width: 0;
    height: 0;
    right: 10px;
    margin-top: -4px;
    position: absolute;
    transition: all .2s;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid var(--light-gray);
  }

  & > button.rotate::before {
    transform: rotate(180deg);
  }
  
  & > button{
    width: 100%;
    border: none;
    padding: 5px;
    overflow: hidden;
    text-align: left;
    white-space: nowrap;
    padding: var(--padding);
    background: transparent;
    text-overflow: ellipsis;
    border-top: 1px solid var(--light-gray); 
  }
`;

const ContOptions = styled.div`
    width: 100%;
    z-index: 10000;
    overflow: hidden;
    position: absolute;
    background: white;
    border-radius: 2px;
    top: calc(100% + 8px);
    box-sizing: border-box;
    border: 1px solid var(--light-gray);

  &.showOptions {
    height: auto;
    visibility: initial;
  }

  & * {
    display: block;
  }

  & > button {
    width: 100%;
    border: none;
    padding: 5px;
    overflow: hidden;
    text-align: left;
    white-space: nowrap;
    padding: var(--padding);
    background: transparent;
    text-overflow: ellipsis;
    border-top: 1px solid var(--light-gray); 
  }

  & > button:first-child{
    border: none;
  }
  
  & > button:hover{
    color: white;
    background: var(--orange);
  }
`;

export default function Dropdown(props){
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

  return  <Wrapper onBlur={hideOptions}>
            <button onClick={toggleOptions} className={open? 'rotate': ''}>{value}</button>
            {open && <ContOptions>
                        {options.map((option, key) => 
                            <button key={`${key}-${option}`} onMouseDown={e => optionSelected(option)}>{option}</button> 
                          )}
                      </ContOptions>}
          </Wrapper>

}
