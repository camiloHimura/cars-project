import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from "./styles";

function Nav(props){

    return  <Wrapper as="nav">
              {props.items.map(name => 
                      <div key={name}> {name} </div>)}
            </Wrapper>

}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Nav;
