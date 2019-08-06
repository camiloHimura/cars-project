import React from 'react';
import "./Home.css"
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Card from "../../components/Card";

function Home(){
    return  <div>
              <h2>I'm Home</h2>
              <Button value={"Test"}/>
              <Dropdown options={["one", "Two", "Three"]} onChange={option => console.log('options selected', option)}/>
              <Card/>
            </div>
}

export default Home;
