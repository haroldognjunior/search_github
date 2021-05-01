import axios from "axios";
import $ from "jquery";

export default function Search(e) {      
    e.preventDefault();
    var search = document.getElementById("search").value;
    var originalName = search.split(' ').join('');
  return (        
    axios.get ("https://api.github.com/search/repositories?q="+originalName + "{&page,per_page,sort,order}") 
    .then((data) => {       
      if(data.status === 200){
  
        $.getJSON("https://api.github.com/search/repositories?q="+originalName + "{&page,per_page,sort,order}",function(datos) {            
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
                <table className="table">
                <tr>
                    <td>Nombre:</td> <td>${repository.name}</td>
                </tr>
                <tr>
                    <td>Dirección:</td> <td><a href="${repository.url}">${repository.url}</a></td>
                </tr>
                <tr>
                    <td>Descripción:</td> <td>${repository.description}</td>  
                </tr>         
                </table>
                `       
                })
                var founds = `<p class="count">${data.data.total_count} repositorios encontrados </p> <br />`
                document.getElementById("result").innerHTML= founds + onlyProperty.join("") 
            } else {
                document.getElementById("result").innerHTML= `
                <div>
                <p> No se han encontrado repositorios =(</p>
                </div>` 
            }  
        });   
      } 
    })
    .catch((res) => {
        document.getElementById("result").innerHTML= `
        <div>
          <p> No se han encontrado repositorios =(</p>
        </div>` 
    })
  )
}