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
        <Image src={Github} />
        </h1>
        
      </div>
    </Container>
  );
};
export default Home;