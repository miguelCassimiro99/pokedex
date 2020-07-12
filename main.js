var pokemon_name = document.querySelector("#pokemon_name");
var form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var pokemon_search = "https://pokeapi.co/api/v2/pokemon/"+pokemon_name.value;

    axios.get(pokemon_search)
    .then(function(response){
    console.log(response.data)
    })
    .catch(function(error){
        console.log(error);
        alert("Something went wrong X(");
    });
});

