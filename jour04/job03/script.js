document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const idInput = document.getElementById("id");
      const nameInput = document.getElementById("nom");
      const typeInput = document.getElementById("type");
  
      const filters = {
        id: idInput.value,
        name: nameInput.value,
        type: typeInput.value
      };
  
      fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
          const filteredPokemon = data.filter(pokemon => {
            if (filters.id && pokemon.id !== parseInt(filters.id)) {
              return false;
            }
            if (filters.name && !pokemon.name.english.toLowerCase().includes(filters.name.toLowerCase())) {
              return false;
            }
            if (filters.type && !pokemon.type.includes(filters.type)) {
              return false;
            }
            return true;
          });
  
          displayPokemon(filteredPokemon);
        })
        .catch(error => console.error("Erreur : " + error));
    });
  
    function displayPokemon(pokemonList) {
      const resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = "";
  
      if (pokemonList.length === 0) {
        resultContainer.textContent = "Aucun Pokémon trouvé.";
        return;
      }
  
      pokemonList.forEach(pokemon => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
  
        const pokemonName = document.createElement("h3");
        pokemonName.textContent = pokemon.name.english;
        pokemonCard.appendChild(pokemonName);
  
        const pokemonId = document.createElement("p");
        pokemonId.textContent = "ID: " + pokemon.id;
        pokemonCard.appendChild(pokemonId);
  
        const pokemonTypes = document.createElement("p");
        pokemonTypes.textContent = "Type(s): " + pokemon.type.join(", ");
        pokemonCard.appendChild(pokemonTypes);
  
        resultContainer.appendChild(pokemonCard);
      });
    }
  });
  