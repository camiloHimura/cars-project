import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div:not(:last-child){
    margin-right: var(--big-margin)
  }
`;