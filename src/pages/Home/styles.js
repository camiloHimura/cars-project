import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  padding: var(--big-padding);
`;

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

export const ContData = styled.div`
  width: calc(70% - var(--big-margin)); 
`;

export const ContInfoFilter = styled.div`
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
    font-size: 14px;
    margin-bottom: var(--margin);
  }
`;
