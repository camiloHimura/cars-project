import React from 'react';
import styled from "styled-components"

const Wrapper = styled.button`
  width: 128px;
  height: 32px;
  border: none;
  outline: none;
  border-radius: 2px;
  color: var(--light-gray);
  background: var(--orange);

  :hover{
    background: var(--dark-orange);
  }
`;

function Button(props){
    const {value} = props; 

    return  <Wrapper as="button" onClick={event => console.log(event)}>{value}</Wrapper>
}

export default Button;
