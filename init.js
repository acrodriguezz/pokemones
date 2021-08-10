document.addEventListener("DOMContentLoaded", function(e){
    //let pokes = [4, 6, 12, 25, 40];
    let pos = 0;
  
    //let poke = pokes[pos];
    let url = "https://pokeapi.co/api/v2/pokemon/"+4;
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png";
    
    fetch(url)
        .then(result => result.json())
        .then(data => {
            let ability = data.abilities[0].ability.name;
            let height = data.height;
            let weight = data.weight;
            let name = data.name;

            document.getElementById("name").textContent = name;
            document.getElementById("ability").textContent = ability;
            document.getElementById("height").textContent = height;
            document.getElementById("weight").textContent = weight;
            document.getElementById("img").src = imgUrl;

        })



});