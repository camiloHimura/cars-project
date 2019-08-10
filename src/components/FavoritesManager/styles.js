import styled from "styled-components"

export const Wrapper = styled.div`
  padding: var(--big-padding);
  border: 1px solid var(--light-gray);
  width: calc(40% - var(--big-margin));

  p{
    font-size: 14px;
    line-height: 20px;
    margin-bottom: var(--margin);
  }

  button{
    display: block;
    margin-left: auto;
  }
`;
