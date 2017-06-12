var cargarPagina= function(){
	cargarPokemons();
}
var cargarPokemons=function(){
	var url= "http://pokeapi.co/api/v2/pokemon-species";
	$.getJSON(url, function(response){
		var pokemones= response.results;
		mostrarPokemones(pokemones);
	});
}

var mostrarPokemones= function(pokemones){
	pokemones.forEach(function(pokemones){
		var $ul= $("#pokemones");
		var $li =$("<li />");

		$ul.append($li);
		$li.text(pokemones.name);

	});
}
$(document).ready(cargarPagina);