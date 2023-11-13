function api() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        let characters = data.results;
        let charcContainer = document.querySelector(".container"); 
  
        characters.forEach(character => {
          let characterdiv = document.createElement("div");
          characterdiv.classList.add("characterdiv");
  
          let charcImage = document.createElement("img");
          charcImage.src = character.image;
          charcImage.classList.add("charcimage");
  
          let charcName = document.createElement("p");
          charcName.textContent = character.name;
  
          characterdiv.appendChild(charcName);
          characterdiv.appendChild(charcImage);
          
  
          charcContainer.appendChild(characterdiv);
        });
      })
      .catch(error => console.error("Error", error));
  }
  

  api();
  