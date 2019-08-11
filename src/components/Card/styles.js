import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: var(--middle-margin);
  border: 1px solid var(--light-gray);
`;

export const Img = styled.div`
  width: 80px;
  margin: var(--margin);
  margin-right: var(--middle-margin);

  & img{
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
display: flex;
padding: var(--padding);
flex-direction: column;
justify-content: space-between;

  h2{
    font-weight: 700;
  }
`;
