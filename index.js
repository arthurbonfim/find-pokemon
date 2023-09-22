document.querySelector('#search').addEventListener("click" , getpokemon);

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getpokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((Response) => Response.json())
    .then((data) => {
        document.querySelector(".pokemonBox")
        .innerHTML = `
        <div>
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}"/>
         </div>
        <div class="pokemonInfo">
            <h2>${data.name}</h2>
            <p>Peso:${data.weight}</p>
        </div>
        `
    }).catch((err) => {
        console.log("Pokemon not found", err);
    });


}
