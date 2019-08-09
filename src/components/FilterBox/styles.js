import styled from "styled-components"

export const ContFilter = styled.div`
  width: 30%;
  padding: var(--big-padding);
  margin-right: var(--big-margin);
  border: 1px solid var(--light-gray);

  h3, .dropdowm{
    font-weight: normal;
    margin-bottom: var(--padding)
  }

  & > button{
    display: block;
    margin: var(--big-margin) 0px 0px auto;
  }
`;