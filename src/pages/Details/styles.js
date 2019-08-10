import styled from "styled-components"

export const Cover = styled.div`
  width: 100%;
  padding-top: 42.25%;
  background: var(--light-gray);
  margin-bottom: var(--big-margin);
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`;

export const ContInfo = styled.div`
  width: 60%;
  margin-right: var(--big-margin);
  
  h2{
    font-size: 32px;
    font-weight: 700;
    margin-bottom: var(--middle-margin);
  }

  h3{
    font-size: 18px;
    margin-bottom: var(--middle-margin);
  }
  
  p{
    font-size: 14px;
    line-height: 20px;
  }
  `;
  
  export const ContFavorites = styled.div`
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
