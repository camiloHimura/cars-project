import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  padding: var(--padding);
  border: 1px solid var(--light-gray);
  margin-bottom: var(--middle-margin);
`;

export const Img = styled.div`
  width: 80px;
  height: 80px;
  background: var(--light-gray);
`;

export const Content = styled.div`
  display: flex;
  margin-left: var(--middle-margin);
  flex-direction: column;
  width: calc(100% - 80px);

  .title, .text, .link{
    background: var(--light-gray);
  }
  
  .title{
    width: 80%;
    height: 30%;
    margin-bottom: 1%;
  }
  
  .text{
    width: 80%;
    height: 20%;
    margin-bottom: 2%; 
  }
  
  .link{
    width: 40%;
    height: 20%;
  }
`;
