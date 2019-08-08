import React from 'react';
import {Wrapper, Content, Img} from './styles';

function Card(props){
    const {img = "", title = "Title", description = "description", link = "Link"} = props; 
    let url = 'https://www.telegraph.co.uk/content/dam/news/2017/11/11/Lam2_trans_NvBQzQNjv4Bql2neoDcPjX0ArggwHbAGweof0VMGKnOSfIlF7A9HT4w.jpg?imwidth=1240';
    return  <Wrapper>
              <Img>
                <img src={url}/>
              </Img>
              <Content>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href="#">{link}</a>
              </Content>
            </Wrapper>
}

export default Card;
