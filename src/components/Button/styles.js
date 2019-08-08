import styled from "styled-components"

export const Wrapper = styled.button`
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