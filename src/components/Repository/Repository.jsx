import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Github from "../../images/github.svg"
import "../../css/Home.css"
import $ from "jquery";

const Repository = () => {
  
  function buscar(e) {    
    e.preventDefault();
    var search = document.getElementById("search").value;
    var originalName = search.split(' ').join('');    
    fetch("https://api.github.com/search/repositories?q="+originalName + "{&page,per_page,sort,order}")    
    .then((result) => result.json())
    .then((data) => {      
      $.getJSON("https://api.github.com/search/repositories?q="+originalName + "{&page,per_page,sort,order}",function(datos) {       
      console.log(data)
      if(data.total_count !== 0){  
      var nuevosDatos=datos.items.map(function(element) {         
        return {         
        name:element.full_name.toUpperCase(),
        url: element.html_url,
        description: element.description
        }         
        });         
       var onlyProperty =  nuevosDatos.map(repository => {
         return `         
        <div>
          <p>Nombre: ${repository.name}</p>
          <p> Dirección: ${repository.url}</p>
          <p> Descripción: ${repository.description}</p>
 
        </div>`       
       })
       var founds = `<p>${data.total_count} repositorios encontrados </p>`
      document.getElementById("result").innerHTML= founds + onlyProperty.join("") 
    } else {
      document.getElementById("result").innerHTML= `
      <div>
        <p> No se han encontrado repositorios =(</p>
      </div>` 
    }     
    });
    })
  }  
  return (
    <Container>
      <div className="Home">
        <h1>
          Busca por repositorio <Image src={Github} />
        </h1>
        <form id="myForm">
        <div>
          <input type="text" id="search"></input>
          <input type="submit" value="buscar repositorio" onClick={buscar}></input>
          </div>  
        </form>
        <div id="result"></div>
        <br />
      </div>
    </Container>
  );
};
export default Repository;