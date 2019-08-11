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

  :active{
    background: var(--dark-orange);
  }
`;