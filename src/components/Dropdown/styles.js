import styled from "styled-components"

export const Wrapper = styled.div`
  outline: none;
  min-width: 100px;
  max-width: 300px;
  position: relative;
  border-radius: 2px;
  border: 1px solid var(--light-gray);
  
  & > button:first-child {
    border: none;
    outline: none;
    font-size: 14px;
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

export const ContOptions = styled.div`
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
    font-size: 14px;
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