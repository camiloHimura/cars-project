import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--big-margin);

  h2, h3{
    font-size: 18px;
    margin-bottom: var(--middle-margin);
  }

  h2{
    font-weight: bold;
  }

  .sortTitle{
    font-size: 12px;
    margin-bottom: var(--margin);
  }
`;
