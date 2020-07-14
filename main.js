//search form
var pokemon_name = document.querySelector("#pokemon_name");
var form = document.querySelector("#form");

//list
var name_list = document.querySelector("#name_list");
var type_list = document.querySelector("#type_list");
var ability_list = document.querySelector("#ability_list");
var moves_list = document.querySelector("#moves_list");

//label
var type_label = document.querySelector("#type_label");
var ability_label = document.querySelector("#abilities_label");
var moves_label = document.querySelector("#moves_label");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var pokemon_search =
        "https://pokeapi.co/api/v2/pokemon/" + pokemon_name.value;

    axios
        .get(pokemon_search)
        .then(function(response) {
            //name
            var form_name = response.data.forms[0].name;
            var name = document.createElement("h2");

            name.innerHTML = "<span>" + form_name + "</span>";
            name_list.appendChild(name);

            //types
            var types_list_resp = response.data.types;
            var type_text_label = document.createElement("h4");

            type_text_label.innerHTML = "<span>Type: </span>";
            type_label.appendChild(type_text_label);

            types_list_resp.forEach((meta_type) => {
                // console.log(meta_type.type.name);
                var types_list_item = document.createElement("li");
                types_list_item.innerHTML = "<span>" + meta_type.type.name + "</span>";
                type_list.appendChild(types_list_item);
            });

            //abilities
            var ability_list_resp = response.data.abilities;
            var ability_text_label = document.createElement("h4");

            ability_text_label.innerHTML = "<span>Abilities: </span>";
            ability_label.appendChild(ability_text_label);
            ability_list_resp.forEach((meta_ability) => {
                var ability_list_item = document.createElement("li");
                ability_list_item.innerHTML =
                    "<span>" + meta_ability.ability.name + "</span>";
                ability_list.appendChild(ability_list_item);
            });

            //moves
            var moves_list_resp = response.data.moves;
            var moves_text_label = document.createElement("h4");

            moves_text_label.innerHTML = "<span>Moves: </span>";
            moves_label.appendChild(moves_text_label);
            moves_list_resp.forEach((meta_moves) => {
                var moves_list_item = document.createElement("li");
                moves_list_item.innerHTML = "<span>" + meta_moves.move.name + "</span>";
                moves_list.appendChild(moves_list_item);
            });
        })
        .catch(function(error) {
            console.log(error);
            alert("Something went wrong X(");
        });
});

/* 
    name
    types
    abilities
    moves
*/