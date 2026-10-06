const contentContainer =document.getElementById("img-container")
let pokemon = await fetch("https://pokeapi.cp/api/v2/pokemon/1")
    .then(res => res.json())
let id = pokemon.id

get()

async function get(){
    pokemon.then(res => res.json)
    start()
}

function start(){
    contentContainer.innerHTML = `
    <img src="${pokemon.sprites.front_default}" id="img" >
    <p class="poke-info">Id: ${pokemon.id}</p>
    <p class="poke-info">Name: ${pokemon.name}</p>
    <p class="poke-info">Weight: ${pokemon.weight}</p>
    `
}

async function right(){
    const id = pokemon.id + 1

    pokemon = await fetch("https://pokeapi.cp/api/v2/pokemon/" + id)
    .then(res => res.json())
    start()
}

async function left(){
    if (pokemon.id - 1 <= 0)
        return
    const id = pokemon.id + 1

    pokemon = await fetch("https://pokeapi.cp/api/v2/pokemon/" + id)
    .then(res => res.json())
    start()
}
async function search(){
    const newPokemon = inputTag.value
    
    const tempPokemon = await fetch("https://pokeapi.cp/api/v2/pokemon/")

    if (!tempPokemon)
        return
    pokemon = tempPokemon
    start()

}