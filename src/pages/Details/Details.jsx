import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Cover, ContInfo, ContFavorites} from "./styles";
import Button from "../../components/Button"

function Details(props){
  const { match } = props;
  console.log("id", match.params.id);
  
  return  <div className="container bodyContainer">
            <Cover/>
            <Wrapper>
              <ContInfo>
                <h2>Chrysler Crossfire</h2>
                <h3>Stock # 61184 - 152.263 KM - Petrol - Yellow</h3>
                <p>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</p>
              </ContInfo>
              <ContFavorites>
                <p>If you like this car, click the button and save it in your collection of favourite items.</p>
                <Button value={"Save"} onClick={info => console.log("save")}/> 
              </ContFavorites>
            </Wrapper>
          </div>
}

Details.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired, 
      }), 
    }).isRequired, 
}

export default Details;
