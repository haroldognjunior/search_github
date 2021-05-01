import axios from "axios";

export default function Search(e) {      
    e.preventDefault();
    var search = document.getElementById("search").value;
    var originalName = search.split(' ').join('');
  return (        
    axios.get ("https://api.github.com/users/"+originalName) 
    .then((data) => {       
      if(data.status === 200){
      document.getElementById("result").innerHTML= `
      <Img className="photo" src="${data.data.avatar_url}" />
      <h1>${data.data.name}</h1>
      <a id="button" href=${data.data.html_url}><button> Ver perfil </button></a>
      <table>
      <tr>
      <td> ${data.data.following} Seguidos</td>
      <td> ${data.data.followers} Seguidores</td>
      <td> ${data.data.public_repos} Repositorios</td>
      </tr>
      </table>
      `
      } 
    })
    .catch((res) => {
      document.getElementById("result").innerHTML= `     
      <h1>No se ha encontrado el usuario =(</h1>
      `
    })
  )
}