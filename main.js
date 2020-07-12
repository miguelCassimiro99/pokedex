console.log("Hello World");

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(function(response){
    console.log(response.data)
})
.catch(function(error){
    console.log(error);
    alert("Ops, algo deu errado X(...");
})