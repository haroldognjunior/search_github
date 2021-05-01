import React from "react";
import Container from "react-bootstrap/Container";
import "../../css/Header.css"

const Header = () => {    
    return (
      <Container>
        <div className="Header">
        <a href="/"><h1>
            Página Inicial
          </h1></a>  
          <a href="/buscarusuario"><h1>
            Buscar usuarios
          </h1></a>
          <a href="/buscarrepositorio"><h1>
            Buscar repositorios
          </h1></a>             
        </div>
      </Container>
    );
  };
  export default Header;