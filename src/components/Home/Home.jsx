import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Github from "../../images/github.svg"
import Search from "../../actions/usersActions"
import "../../css/Home.css"

const Home = () => {    
  return (
    <Container>
      <div className="Home">
        <h1>
          Busca por nombre de usuario <Image src={Github} />
        </h1>
        <form id="myForm">
        <div>
          <input type="text" id="search"></input>
          <input type="submit" value="buscar usuario" onClick={Search}></input>
          </div>  
        </form>
        <div id="result"></div>
        <br />
      </div>
    </Container>
  );
};
export default Home;