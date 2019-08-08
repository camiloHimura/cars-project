import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid var(--light-gray);
`;

export const Img = styled.div`
  width: 200px;
  margin: var(--margin);
  background: var(--black);

  & img{
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  padding: var(--padding);
`;
