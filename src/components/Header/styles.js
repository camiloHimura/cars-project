import styled from "styled-components"

export const Wrapper = styled.div`
  border-bottom: 2px solid var(--light-gray);

  & .container{
    display: flex;
    align-items: center;
    padding: var(--big-padding);
    justify-content: space-between;
  }

  & .logo{
    max-width: 200px;
  }

`;
