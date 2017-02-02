
// check pokemon
function check() {
	var pokemonArray = ['pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5', 'pokemon-6'];
	var randomPokemon = [];
	var cards = document.querySelectorAll('.main__box--card-front');
	var messageDisplay = document.querySelector('.main__alert');
	var btn = document.querySelector('.main__btn');

	function random(range) {
		var numbers = [];
		while (numbers.length <= 6) {
			var newNr = (parseInt(Math.random() * range));
			if (numbers.indexOf(newNr) == -1) {
				numbers.push(newNr);
			}
		}
		return numbers;
	}

	var randomPokemons = random(pokemonArray.length);
	randomPokemons.forEach(function (i) {
		if (pokemonArray[i] !== undefined) {
			randomPokemon.push(pokemonArray[i]);
		}
		return randomPokemon;
	});

	// random pokemon to start game
	function pickPok() {
		var random = Math.floor(Math.random() * randomPokemon.length);
		return randomPokemon[random];
	}

	var pickedPok = pickPok();

	var txt;

	switch (pickedPok) {
	case 'pokemon-1':
		txt = 'abra';
		break;
	case 'pokemon-2':
		txt = 'bellsprout';
		break;
	case 'pokemon-3':
		txt = 'weedle';
		break;
	case 'pokemon-4':
		txt = 'eevee';
		break;
	case 'pokemon-5':
		txt = 'dratini';
		break;
	case 'pokemon-6':
		txt = 'mew';
		break;

	default:
		txt = 'Start';
	}

	messageDisplay.textContent = txt;

	// check
	var infoHeading = document.querySelectorAll('.main__box--card-back h5');

	Array.prototype.forEach.call(cards, function (card, index) {
		card.classList.add(randomPokemon[index]);

		card.addEventListener('click', function () {
			var clickedPok = card.classList.contains(pickedPok);

			if (clickedPok) {
				infoHeading[index].textContent = 'ok';
				btn.textContent = 'New game?';
			} else {
				infoHeading[index].textContent = 'try again';
			}

		});

	});

	btn.addEventListener('click', function (e) {
		e.preventDefault();
		window.location.reload();
	});
}

// toggle flip class
var flip = function () {

	var boxes = document.querySelectorAll('.main__box');

	Array.prototype.forEach.call(boxes, function (box) {
		box.addEventListener('click', flipBox);
	});

	function flipBox() {
		if (this.classList.contains('flip')) {
			this.classList.remove('flip');
		} else {
			this.classList.add('flip');
		}
	}

};

// btns bubble
var bubble = function () {
	var btns = document.querySelector('.main__btn');

	btns.addEventListener('click', createBubble);

	function createBubble(e) {
		var circle = document.createElement('div');

		this.appendChild(circle);

		var d = Math.max(this.clientWidth, this.clientHeight);

		circle.style.width = d + 'px';
		circle.style.height = d + 'px';

		circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
		circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

		circle.classList.add('bubble');

		window.setTimeout(function () {
			circle.remove();
		}, 1000);

	}
};

// fn init
check();
flip();
bubble();
