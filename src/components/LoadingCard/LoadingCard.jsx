import React from 'react';
import {Wrapper, Content, Img} from './styles';

function LoadingCard(){

  return  <Wrapper>
            <Img/>
            <Content>
              <div className="title"></div>
              <div className="text"></div>
              <div className="link"></div>
            </Content>
          </Wrapper>
}


export default LoadingCard;
