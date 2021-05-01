

export default function Search(e) {      
    e.preventDefault();
    var search = document.getElementById("search").value;
    var originalName = search.split(' ').join('');    
    fetch("https://api.github.com/users/"+originalName)    
    .then((result) => result.json())
    .then((data) => {      
      console.log(data)
      if(data.message !== "Not Found"){
      document.getElementById("result").innerHTML= `
      <Image src="${data.avatar_url}" />
      <h1>${data.name}</h1>
      <a href=${data.html_url}><button> Ver perfil </button></a>
      <div>
      <p> ${data.following} Seguidos</p>
      <p> ${data.followers} Seguidores</p>
      <p> ${data.public_repos} Repositorios</p>
      </div>
      `
    } else {
      document.getElementById("result").innerHTML= `     
      <h1>No se ha encontrado el usuario =(</h1>
      `
    }
    })
  }

 