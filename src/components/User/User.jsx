import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Github from "../../images/github.svg"
import Search from "../../actions/usersActions"
import "../../css/User.css"

const User = () => {    
  return (
    <Container>
      <div className="User">
        <h1>
          Busca por nombre de usuario <Image className="icon" src={Github} />
        </h1>
        <form id="myForm">
        <div>
          <input type="text" id="search"></input>    
          <button className='searchButton' onClick={Search}>      
          <i className="fas fa-search"></i>
          </button>
          </div>  
        </form>
        <div id="result"></div>
        <br />
      </div>
    </Container>
  );
};
export default User;