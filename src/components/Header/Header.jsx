import React from 'react';
import {Link} from "react-router-dom";

import Nav from '../Nav';
import Logo from '../Logo';
import {Wrapper} from "./styles";

function Header(){
  let navItems = ['Purchase', 'My Orders', 'Sell'];

  return  <Wrapper as="header">
            <div className="container">
              <Link to="/"><Logo/></Link>
              <Nav items={navItems}/>
            </div>
          </Wrapper>
}

export default Header;
