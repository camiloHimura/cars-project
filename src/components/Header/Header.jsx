import React from 'react';
import "./Header.css"

import Nav from '../Nav';
import Logo from '../Logo';

function Header(){
  let navItems = ['Purchase', 'My Orders', 'Sell'];

  return  <header>
            <div className="container">
              <Logo/>
              <Nav items={navItems}/>
            </div>
          </header>
}

export default Header;
