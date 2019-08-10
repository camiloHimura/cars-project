import React from 'react';
import {Link} from "react-router-dom";
import {Wrapper} from "./styles";
import Logo from "../../components/Logo";

function NotFound(){
  
  return  <Wrapper className="container bodyContainer">
            <div>
              <Logo style={{maxWidth: "200px"}}/>
              <h2>404 - Not Found</h2>
              <p>Sorry, the page you are looking for does not exist.</p>
              <p>You can always go back to the <Link to={`/`}>homepage.</Link></p>
            </div>
          </Wrapper>
}

export default NotFound;
