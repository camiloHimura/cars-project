import styled from "styled-components"

export const Wrapper = styled.button`
  color: white;
  width: 128px;
  height: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  background: var(--orange);

  :hover{
    background: var(--dark-orange);
  }
`;