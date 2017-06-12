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
var arregloImagenes = [
    {"src":"assets/img/1bulbasaur.png"},
    {"src":"assets/img/2ivysaur.png"},
    {"src":"assets/img/3venusaur.png"},
    {"src":"assets/img/4charmander.png"},
    {"src":"assets/img/5charmeleon.png"},
    {"src":"assets/img/6charizard.png"},
    {"src":"assets/img/7squirtle.png"},
    {"src":"assets/img/8Wartortle.png"},
    {"src":"assets/img/9Blastoise.png"},
    {"src":"assets/img/10Caterpie.png"},
    {"src":"assets/img/11Metapod.png"},
    {"src":"assets/img/12Butterfree.png"},
    {"src":"assets/img/13Weedle.png"},
    {"src":"assets/img/14Kakuna.png"},
    {"src":"assets/img/15Beedrill.png"},
    {"src":"assets/img/16Pidgey.png"},
    {"src":"assets/img/17Pidgeotto.png"},
    // {"url":"img/18Pidgeotto.png"},
    {"src":"assets/img/19Rattata.png"},
    {"src":"assets/img/20Raticate.png"}
    ]

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