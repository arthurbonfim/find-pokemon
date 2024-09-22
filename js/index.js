document.querySelector('#search').addEventListener("click" , getpokemon);

function formatText(string) {
    return string.toLowerCase().trim();
}

function getpokemon(event) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = formatText(name);
    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((Response) => Response.json())
    .then((data) => {

        document.querySelector(".pokemonBox")
        .innerHTML = `
       <div class="card shadow-lg mb-3" style="width: 24rem">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" class="card-img-top"/>
            <div class="card-body text-center">
              <h5 class="card-title" style='text-transform: capitalize'>${(data.name)}</h5>
              <span class="card-text">Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}<span>  | </span>
              <span class="card-text">Peso:${Number(data.weight) / 10 + ' Kg'}</span><br>
              <a href="https://www.pokemon.com/br/pokedex/${pokemonName}" class="btn btn-danger mt-3" target="_blank">Ver mais</a>
            </div>
          </div>
        `
    }).catch((err) => {
        console.log("Pokemon not found", err);
    });


}

//date for the footer
let year = new Date().getFullYear();
document.getElementById('fYear').innerHTML = `${year}`;