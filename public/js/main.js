var cargarPagina= function(){
	cargarPokemons();
	
  $(document).on("click", ".pokemon", mostrarDetallePokemon);
}
var cargarPokemons=function(){
	var url= "http://pokeapi.co/api/v2/pokemon-species";
	$.getJSON(url, function(response){
		var pokemones= response.results;
		mostrarPokemones(pokemones);
	});
}


var mostrarPokemones= function(pokemones){
	pokemones.forEach(function(pokemones, posicion){
		
		var $ul= $("#pokemones");
		var $li =$("<li />");
		var $img=$("<img/>");

		$img.attr("src", ruta);
		var ruta= arregloImagenes[posicion].src;
		$ul.append($li);
		$ul.append($img);
		$li.text(pokemones.name);
		$li.addClass("pokemon");

		$li.attr("data-url", pokemones.url);


	});
}



var $plantillaDetalles= '<img src="http://via.placeholder.com/250x250">'+
        '<p><strong>Habitad:__habitat__</strong></p>'+
        '<p><strong>Color:__color__</strong></p>'+
        '';

var mostrarDetallePokemon =function(){
	// alert("pokemon!!!!!");
	var url= $(this).data("url");
	console.log(url);
	var $pokemonContenedor= $("#detalles");
	$.getJSON(url, function(response){
	$pokemonContenedor.html(
	$plantillaDetalles.replace('__habitat__',response.habitat.name)
	 		.replace('__color__',response.color.name)
	 		.replace('__img__',response.color.name)
		);	
	 });
};
$(document).ready(cargarPagina);  


var mostrarPokemones= function(pokemones){
	pokemones.forEach(function(pokemones){
		var $ul= $("#pokemones");
		var $li =$("<li />");

		$ul.append($li);
		$li.text(pokemones.name);

	});
}
$(document).ready(cargarPagina);

