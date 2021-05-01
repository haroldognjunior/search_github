import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const NotFound = () => {
  return (
    <Container id="naoexiste">
      <div className="containernaoexiste">
        <Image
          id="header"
          src="https://fotos.subefotos.com/241f6c4dfc34726a90e1e7c466d7486bo.png"
        ></Image> 
        <h1>
          Ops, llegaste a un lugar desconocido por nosotros =( <br />{" "}
          Regresa a la <a href="/">página inicial</a>, por favor.
        </h1>
        <br />
      </div>
    </Container>
  );
};
export default NotFound;