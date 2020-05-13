// ////////Practice on my own

$(document).ready(function() {
	// $('#genOne').hide();
	$('.genTwoContent').hide();
	$('.genThreeContent').hide();
	$('.genFourContent').hide();
	$('.genFiveContent').hide();
	$('.genSixContent').hide();
	$('.genSevenContent').hide();
	// ///filter functions
	$('#genOneCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genOneContent').show();
		} else {
			$('.genOneContent').hide();
		}
	});
	$('#genTwoCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genTwoContent').show();
		} else {
			$('.genTwoContent').hide();
		}
	});
	$('#genThreeCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genThreeContent').show();
		} else {
			$('.genThreeContent').hide();
		}
	});
	$('#genFourCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genFourContent').show();
		} else {
			$('.genFourContent').hide();
		}
	});
	$('#genFiveCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genFiveContent').show();
		} else {
			$('.genFiveContent').hide();
		}
	});
	$('#genSixCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genSixContent').show();
		} else {
			$('.genSixContent').hide();
		}
	});
	$('#genSevenCheck').click(function() {
		if ($(this).is(':checked')) {
			$('.genSevenContent').show();
		} else {
			$('.genSevenContent').hide();
		}
	});

	// $('.shiny_image').hide();
	// $('#filter-show').change(function() {
	// 	var showOption = $('#filter-show option:selected').val();
	// 	if (showOption === 'normal') {
	// 		$('.card-image.normal_image').show();
	// 		$('.card-image.shiny_image').hide();
	// 		console.log('normal changed');
	// 	} else if (showOption === 'shiny') {
	// 		$('.card-image.shiny_image').show();
	// 		$('.card-image.normal_image').hide();
	// 	}
	// });
});

const popupContainer = document.querySelector('.popup-container');
const genOnePokedex = document.getElementById('genOnePokedex');
const genTwoPokedex = document.getElementById('genTwoPokedex');
const genThreePokedex = document.getElementById('genThreePokedex');
const genFourPokedex = document.getElementById('genFourPokedex');
const genFivePokedex = document.getElementById('genFivePokedex');
const genSixPokedex = document.getElementById('genSixPokedex');
const genSevenPokedex = document.getElementById('genSevenPokedex');

const cachedPokemon = {};

const fetchPokemon = async () => {
	const genOneUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
	const genTwoUrl = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=100`;
	const genThreeUrl = `https://pokeapi.co/api/v2/pokemon?offset=251&limit=135`;
	const genFourUrl = `https://pokeapi.co/api/v2/pokemon?offset=386&limit=108`;
	const genFiveUrl = `https://pokeapi.co/api/v2/pokemon?offset=494&limit=155`;
	const genSixUrl = `https://pokeapi.co/api/v2/pokemon?offset=649&limit=72`;
	const genSevenUrl = `https://pokeapi.co/api/v2/pokemon?offset=721&limit=86`;
	const genOneRes = await fetch(genOneUrl);
	const genTwoRes = await fetch(genTwoUrl);
	const genThreeRes = await fetch(genThreeUrl);
	const genFourRes = await fetch(genFourUrl);
	const genFiveRes = await fetch(genFiveUrl);
	const genSixRes = await fetch(genSixUrl);
	const genSevenRes = await fetch(genSevenUrl);
	const genOneData = await genOneRes.json();
	const genTwoData = await genTwoRes.json();
	const genThreeData = await genThreeRes.json();
	const genFourData = await genFourRes.json();
	const genFiveData = await genFiveRes.json();
	const genSixData = await genSixRes.json();
	const genSevenData = await genSevenRes.json();
	let genOnePokemon = genOneData.results.map((result, index) => ({
		name: result.name,
		id: index + 1,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`,
	}));
	const genTwoPokemon = genTwoData.results.map((genTworesult, genTwoindex) => ({
		name: genTworesult.name,
		id: genTwoindex + 152,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${genTwoindex +
			152}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${genTwoindex +
			152}.png`,
	}));
	const genThreePokemon = genThreeData.results.map((genThreeresult, genThreeindex) => ({
		name: genThreeresult.name,
		id: genThreeindex + 252,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${genThreeindex +
			252}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${genThreeindex +
			252}.png`,
	}));
	const genFourPokemon = genFourData.results.map((genFourresult, genFourindex) => ({
		name: genFourresult.name,
		id: genFourindex + 387,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${genFourindex +
			387}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${genFourindex +
			387}.png`,
	}));
	const genFivePokemon = genFiveData.results.map((genFiveresult, genFiveindex) => ({
		name: genFiveresult.name,
		id: genFiveindex + 495,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${genFiveindex +
			495}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${genFiveindex +
			495}.png`,
	}));
	const genSixPokemon = genSixData.results.map((genSixresult, genSixindex) => ({
		name: genSixresult.name,
		id: genSixindex + 650,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${genSixindex +
			650}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${genSixindex +
			650}.png`,
	}));
	const genSevenPokemon = genSevenData.results.map((genSevenresult, genSevenindex) => ({
		name: genSevenresult.name,
		id: genSevenindex + 722,
		normal_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${genSevenindex +
			722}.png`,
		shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${genSevenindex +
			722}.png`,
	}));

	displayPokemon(
		genOnePokemon,
		genTwoPokemon,
		genThreePokemon,
		genFourPokemon,
		genFivePokemon,
		genSixPokemon,
		genSevenPokemon
	);

	// var changeFil = document.getElementById('filter-show');

	// changeFil.addEventListener('change', event => {
	// 	var show = document.getElementById('filter-show').value;
	// 	// show.options[show.selectedIndex].value;

	// 	if (show === '1') {
	// 		var hideShinyDivs = document.getElementsByClassName('shiny_image');
	// 		for (var i = 0; i < hideShinyDivs.length; i++) {
	// 			hideShinyDivs[i].style.display = 'none';
	// 		}
	// 		var showNormalDivs = document.getElementsByClassName('normal_image');
	// 		for (var i = 0; i < showNormalDivs.length; i++) {
	// 			showNormalDivs[i].style.display = 'block';
	// 		}
	// 		// document.getElementsByClassName('normal_image').style.display = 'block';
	// 		// document.getElementsByClassName('shiny_image').style.display = 'none';
	// 	} else if (show === '2') {
	// 		var showShinyDivs = document.getElementsByClassName('shiny_image');
	// 		for (var i = 0; i < showShinyDivs.length; i++) {
	// 			showShinyDivs[i].style.display = 'block';
	// 		}
	// 		var hideNormalDivs = document.getElementsByClassName('normal_image');
	// 		for (var i = 0; i < hideNormalDivs.length; i++) {
	// 			hideNormalDivs[i].style.display = 'none';
	// 		}
	// 	}

	// 	// document.getElementsByClassName(normal).style.display = element.value == 1 ? 'block' : 'none';
	// 	// document.getElementsByClassName(shiny).style.display = element.value == 2 ? 'block' : 'none';
	// });
};

const displayPokemon = (
	genOnePokemon,
	genTwoPokemon,
	genThreePokemon,
	genFourPokemon,
	genFivePokemon,
	genSixPokemon,
	genSevenPokemon
) => {
	const genOneTitle = document.querySelector('.genOneTitle');
	genOneTitleString = `Gen 1 Pokemon`;

	const genTwoTitle = document.querySelector('.genTwoTitle');
	genTwoTitleString = `Gen 2 Pokemon`;

	const genThreeTitle = document.querySelector('.genThreeTitle');
	genThreeTitleString = `Gen 3 Pokemon`;

	const genFourTitle = document.querySelector('.genFourTitle');
	genFourTitleString = `Gen 4 Pokemon`;

	const genFiveTitle = document.querySelector('.genFiveTitle');
	genFiveTitleString = `Gen 5 Pokemon`;

	const genSixTitle = document.querySelector('.genSixTitle');
	genSixTitleString = `Gen 6 Pokemon`;

	const genSevenTitle = document.querySelector('.genSevenTitle');
	genSevenTitleString = `Gen 7 Pokemon`;

	const genOnePokemonHTMLString = genOnePokemon
		.map(genOnePokeman => {
			return `<li class="card" onclick="selectPokemon(${genOnePokeman.id})">
			<img class="card-image normal_image" src="${genOnePokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genOnePokeman.shiny_image}" />
            <h2 class="card-title">${genOnePokeman.id}. ${genOnePokeman.name}</h2>
        </li>`;
		})
		.join('');

	const genTwoPokemonHTMLString = genTwoPokemon
		.map(genTwoPokeman => {
			return `<li class="card" onclick="selectPokemon(${genTwoPokeman.id})">
			<img class="card-image normal_image" src="${genTwoPokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genTwoPokeman.shiny_image}" />
	        <h2 class="card-title">${genTwoPokeman.id}. ${genTwoPokeman.name}</h2>
	    </li>`;
		})
		.join('');

	const genThreePokemonHTMLString = genThreePokemon
		.map(genThreePokeman => {
			return `<li class="card" onclick="selectPokemon(${genThreePokeman.id})">
			<img class="card-image normal_image" src="${genThreePokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genThreePokeman.shiny_image}" />
	        <h2 class="card-title">${genThreePokeman.id}. ${genThreePokeman.name}</h2>
	    </li>`;
		})
		.join('');

	const genFourPokemonHTMLString = genFourPokemon
		.map(genFourPokeman => {
			return `<li class="card" onclick="selectPokemon(${genFourPokeman.id})">
			<img class="card-image normal_image" src="${genFourPokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genFourPokeman.shiny_image}" />
	        <h2 class="card-title">${genFourPokeman.id}. ${genFourPokeman.name}</h2>
	    </li>`;
		})
		.join('');

	const genFivePokemonHTMLString = genFivePokemon
		.map(genFivePokeman => {
			return `<li class="card" onclick="selectPokemon(${genFivePokeman.id})">
			<img class="card-image normal_image" src="${genFivePokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genFivePokeman.shiny_image}" />
	        <h2 class="card-title">${genFivePokeman.id}. ${genFivePokeman.name}</h2>
	    </li>`;
		})
		.join('');

	const genSixPokemonHTMLString = genSixPokemon
		.map(genSixPokeman => {
			return `<li class="card" onclick="selectPokemon(${genSixPokeman.id})">
			<img class="card-image normal_image" src="${genSixPokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genSixPokeman.shiny_image}" />
	        <h2 class="card-title">${genSixPokeman.id}. ${genSixPokeman.name}</h2>
	    </li>`;
		})
		.join('');

	const genSevenPokemonHTMLString = genSevenPokemon
		.map(genSevenPokeman => {
			return `<li class="card" onclick="selectPokemon(${genSevenPokeman.id})">
			<img class="card-image normal_image" src="${genSevenPokeman.normal_image}" />
			<img class="card-image shiny_image" src="${genSevenPokeman.shiny_image}" />
	        <h2 class="card-title">${genSevenPokeman.id}. ${genSevenPokeman.name}</h2>
	    </li>`;
		})
		.join('');

	genOneTitle.innerHTML = genOneTitleString;
	genOnePokedex.innerHTML = genOnePokemonHTMLString;
	genTwoTitle.innerHTML = genTwoTitleString;
	genTwoPokedex.innerHTML = genTwoPokemonHTMLString;
	genThreeTitle.innerHTML = genThreeTitleString;
	genThreePokedex.innerHTML = genThreePokemonHTMLString;
	genFourTitle.innerHTML = genFourTitleString;
	genFourPokedex.innerHTML = genFourPokemonHTMLString;
	genFiveTitle.innerHTML = genFiveTitleString;
	genFivePokedex.innerHTML = genFivePokemonHTMLString;
	genSixTitle.innerHTML = genSixTitleString;
	genSixPokedex.innerHTML = genSixPokemonHTMLString;
	genSevenTitle.innerHTML = genSevenTitleString;
	genSevenPokedex.innerHTML = genSevenPokemonHTMLString;

	// console.log(genOnePokemon);
	// var hideShinyimg = document.getElementsByClassName('shiny_image'); //divsToHide is an array
	// for (var i = 0; i < hideShinyimg.length; i++) {
	// 	hideShinyimg[i].style.display = 'none'; // depending on what you're doing
	// }

	// const hideShinyimg = document.querySelector('.shiny_image');

	// hideShinyimg.style.display = 'none';
	// console.log(hideShinyimg);
};

const selectPokemon = async id => {
	if (!cachedPokemon[id]) {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		cachedPokemon[id] = pokeman;
		displayPokemanPopup(pokeman);
	} else {
		displayPokemanPopup(cachedPokemon[id]);
	}
};

const displayPokemanPopup = pokeman => {
	// console.log(pokeman);

	const body = document.querySelector('body');
	body.classList.add('open-popup');

	const type = pokeman.types
		.map(type => {
			return type.type.name;
		})
		.join(', ');

	const htmlString = `

        <div class="popup">
            <button id="closeBtn" onclick="closePopup()">Close</button>
            <div class="popup-content">
				<img class="popup-image" id="normal_image" src="${pokeman.sprites['front_default']}">
				<img class="popup-image" id="shiny_image" src="${pokeman.sprites['front_shiny']}">
                <h2 class="popup-title">${pokeman.name}</h2>
                <p><span class="type">Type: ${type} </span>| Height: ${pokeman.height} | Weight: ${pokeman.weight}</p>
            </div>
        </div>

    `;

	popupContainer.innerHTML += htmlString;
};

const closePopup = () => {
	const popup = document.querySelector('.popup');
	popup.parentElement.removeChild(popup);

	const body = document.querySelector('body');

	body.classList.remove('open-popup');
};

fetchPokemon();

// ///////end my own practice
