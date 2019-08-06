import React from 'react';
import PropTypes from 'prop-types';
import "./Nav.css"

function Nav(props){

    return  <nav>
              {props.items.map(name => 
                      <div key={name}>
                        {name}    
                      </div>)}
            </nav>

}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Nav;
