function getDiceApi() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7c36118751msh411ebf7605a21d9p15665djsne9a3ef934253',
			'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
		}
	}
	fetch('https://dice-roll.p.rapidapi.com/roll/4/d/20', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}



fetch('http://localhost:3000/characters')
  .then((response) => response.json())
  .then((data) => console.log(data));




// age generating function

function raceAgeGenerator(currentCharacterRace) {
	if (currentCharacterRace = 'dragonborn') {
		let currentCharacterAge = randomNumberGen(15, 80);
		console.log(currentCharacterAge);
	} else if (currentCharacterRace = 'dwarf') {
		let currentCharacterAge = randomNumberGen(50, 350);
	} else if (currentCharacterRace = 'elf') {
		let currentCharacterAge = randomNumberGen(100, 750);
	} else if (currentCharacterRace = 'gnome') {
		let currentCharacterAge = randomNumberGen(40, 500);
	} else if (currentCharacterRace = 'halfElf') {
		let currentCharacterAge = randomNumberGen(20, 180);
	} else if (currentCharacterRace = 'halfOrc') {
		let currentCharacterAge = randomNumberGen(14, 75);
	} else if (currentCharacterRace = 'halfling') {
		let currentCharacterAge = randomNumberGen(20, 200);
	} else if (currentCharacterRace = 'human') {
		let currentCharacterAge = randomNumberGen(18, 80)
	} else if (currentCharacterRace = 'tiefling') {
		let currentCharacterAge = randomNumberGen(18, 90);
	}
}

function randomNumberGen(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}


function nameGenerator(currentCharacterGender) {
	if (currentCharacterGender = 'female') {
		let randomName = randomNumberGen(0, 5);
		let currentCharacterName = characters.race.characterRace.gender.female[randomName]
	} else if (currentCharacterGender = 'male') {
		let randomName = randomNumberGen(0, 5);
		let currentCharacterName = characters.race.characterRace.gender.male[randomName]
	}
}


function raceGenerator() {
	let randomRace = randomNumberGen(0, 8);
	let currentCharacterRace = characters[randomRace];
}

function genderGenerator() {
	let randomGender = randomNumberGen(0, 1);
    let currentCharacterGender = characters.characterRace.gender[randomGender];
}

function traitsGenerator() {
	let randomTraits = randomNumberGen(0, 12);
    let currentCharacterTraits = characters.traits[randomTraits];
}

function desiresGenerator() {
	let randomDesires = randomNumberGen(0, 19);
    let currentCharacterDesires = characters.desires[randomDesires];
}


console.log(getDiceApi());




/*

wishlist function 

generator function 
	[ x ] - calls on random character race  [0-8]
	[ x ] - calls on random character gender [0-1]
	[ x ] - random name (gender male random number) [0-5]
	[ x ] - calls on random character traits [0-12]
	[ x ] - calls on random character desires [0-19]
	- takes the race and gender and generates an appropriate portrait 
	- something that calls on dice and assigns it the 6 scores


function favoriter 

function unfavorite 

*/ 