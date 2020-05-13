$(function() {
	var pokemonSearch;
	var pokemonShiny;
	var defaultPokemon = '1';
	var defaultPokemonData;

	var initFunc = function() {
		$('.loading-container').addClass('active');
		// https://pokeapi.co/api/v2/pokemon/?limit=811
		defaultPokemonData = $.ajax({
			url: 'https://pokeapi.co/api/v2/pokemon/' + defaultPokemon,
			method: 'GET'
		});
		defaultPokemonData.done(function(data) {
			defaultPokemonData = data;
			$('.loading-container').removeClass('active');
			$('.pokedex h3').text(data.name.toUpperCase());
			$('.poke-img img').attr('src', data.sprites.front_default);

			console.log(data);
		});
		//defaultPokemonData means request
		defaultPokemonData.fail(function(jqXHR, textStatus, error) {
			alert('Request failed: ' + textStatus + ' ' + error);
		});
	};

	initFunc();

	$('.btn1').on('click', function() {
		pokemonSearch = $('.pokedex input[type="text"]')
			.val()
			.toLowerCase();

		var request = $.ajax({
			url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonSearch,
			method: 'GET'
		});

		request.done(function(data) {
			$('.pokedex h3').text(data.name.toUpperCase());
			$('.shiny').removeClass('active');
			$('.poke-img img').attr('src', data.sprites.front_default);

			console.log(data);
		});
		request.fail(function(jqXHR, textStatus, error) {
			alert('Request failed: ' + textStatus + ' ' + error);
		});
	});

	$('.btn2').on('click', function() {
		pokemonShiny = $('.pokedex input[type="text"]')
			.val()
			.toLowerCase();

		var request = $.ajax({
			url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonShiny,
			method: 'GET'
		});

		request.done(function(data) {
			$('.pokedex h3').text(data.name.toUpperCase());
			$('.poke-img img').attr('src', data.sprites.front_shiny);
			$('.shiny').addClass('active');

			console.log(data);
		});
		request.fail(function(jqXHR, textStatus, error) {
			alert('Request failed: ' + textStatus + ' ' + error);
		});
	});
});
