let strScr;
let dexScr;
let conScr;
let intScr;
let wisScr;
let chaScr;
let currentCharacter;
let currentCharacterRace;
let currentCharacterAge;
let currentCharacterGender;
let currentCharacterName;
let currentCharacterTrait;
let currentCharacterDesire;



function getDiceApi() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7c36118751msh411ebf7605a21d9p15665djsne9a3ef934253',
			'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
		}
	}
	fetch('https://dice-roll.p.rapidapi.com/roll/6/d/20', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}



fetch('http://localhost:3000/characters')
  .then((data) => data.json())
  .then((data) => {
	characterInfo = data;
	// raceGenerator(characterInfo)
	// generateCharacter(data);
  });


// Character Gen Function
function generateCharacter() {
	raceGenerator();
	genderGenerator();
	nameGenerator();
	raceAgeGenerator();
	traitGenerator();
	desireGenerator();
	// rollStats();
	// assignPortrait();
	console.log(currentCharacterRace);	
	console.log(currentCharacterGender);
	console.log(currentCharacterName);
	console.log(currentCharacterAge);
	console.log(currentCharacterTrait);
	console.log(currentCharacterDesire);

}



// Dice Rolling Function

function rollStats() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7c36118751msh411ebf7605a21d9p15665djsne9a3ef934253',
			'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
		}
	}
	fetch('https://dice-roll.p.rapidapi.com/roll/6/d/20', options)
		.then(response => response.json())
		.then(response => {
			let strScr = document.querySelector('#Str-Scr');
			let dexScr = document.querySelector('#Dex-Scr');
			let conScr = document.querySelector('#Con-Scr');
			let intScr = document.querySelector('#Int-Scr');
			let winScr = document.querySelector('#Wis-Scr');
			let chaScr = document.querySelector('#Cha-Scr');

			strScr.textContent = response.rolls[0];
			dexScr.textContent = response.rolls[1];
			conScr.textContent = response.rolls[2];
			intScr.textContent = response.rolls[3];
			winScr.textContent = response.rolls[4];
			chaScr.textContent = response.rolls[5];

			document.querySelector
		})
		.catch(err => console.error(err));
}



// age generating function

function raceAgeGenerator() {
	let ageCheck = currentCharacterRace
	if (ageCheck === 'dragonborn') {
		currentCharacterAge = randomNumberGen(15, 80);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'dwarf') {
		currentCharacterAge = randomNumberGen(50, 350);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'elf') {
		currentCharacterAge = randomNumberGen(100, 750);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'gnome') {
		currentCharacterAge = randomNumberGen(40, 500);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'halfElf') {
		currentCharacterAge = randomNumberGen(20, 180);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'halfOrc') {
		currentCharacterAge = randomNumberGen(14, 75);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'halfling') {
		currentCharacterAge = randomNumberGen(20, 200);
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'human') {
		currentCharacterAge = randomNumberGen(18, 80)
		// console.log(currentCharacterAge);
	} else if (ageCheck === 'tiefling') {
		currentCharacterAge = randomNumberGen(18, 90);
		// console.log(currentCharacterAge);
	} else {
		console.log('You Fool!');
	}
}

// Random No. Gen

function randomNumberGen(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// Name Gen

function nameGenerator() {
	if (currentCharacterGender === 'female') {
		randomName = randomNumberGen(0, 5);
		nameGenRace = currentCharacterRace; 
		currentCharacterName = characterInfo[0].races[`${currentCharacterRace}`].female[randomName];
		// console.log(currentCharacterName);
	} else if (currentCharacterGender === 'male') {
		randomName = randomNumberGen(0, 5);
		nameGenRace = currentCharacterRace; 
		currentCharacterName = characterInfo[0].races[`${currentCharacterRace}`].male[randomName];
		// console.log(currentCharacterName);
	} else {
		console.log('You Fool!');
	}
}

// Race Gen

function raceGenerator() {
	let randomRace = randomNumberGen(0, 8);
	if (randomRace === 0) {
		currentCharacterRace = 'dragonborn';
		// console.log(currentCharacterRace);
	} else if (randomRace === 1) {
		currentCharacterRace = 'dwarf';
		// console.log(currentCharacterRace);
	} else if (randomRace === 2) {
		currentCharacterRace = 'elf';
		// console.log(currentCharacterRace);
	} else if (randomRace === 3) {
		currentCharacterRace = 'gnome';
		// console.log(currentCharacterRace);
	} else if (randomRace === 4) {
		currentCharacterRace = 'halfElf';
		// console.log(currentCharacterRace);
	} else if (randomRace === 5) {
		currentCharacterRace = 'halfOrc';
		// console.log(currentCharacterRace);
	} else if (randomRace === 6) {
		currentCharacterRace = 'halfling';
		// console.log(currentCharacterRace);
	} else if (randomRace === 7) {
		currentCharacterRace = 'human';
		// console.log(currentCharacterRace);
	} else if (randomRace === 8) {
		currentCharacterRace = 'tiefling';
		// console.log(currentCharacterRace);
	}
}


// Gender Gen

function genderGenerator() {
	let randomGender = randomNumberGen(0, 1);
    if (randomGender === 0) {
		currentCharacterGender = 'male';
		// console.log(currentCharacterGender);
	} else {
		currentCharacterGender = 'female';
		// console.log(currentCharacterGender);
	}
}

// Trait Gen

function traitGenerator() {
	randomTrait = randomNumberGen(0, 12);
    currentCharacterTrait = characterInfo[1][randomTrait];
	// console.log(currentCharacterTraits);
}

// Desire Gen

function desireGenerator() {
	randomDesire = randomNumberGen(0, 19);
    currentCharacterDesire = characterInfo[2][randomDesire];
	// console.log(currentCharacterDesires);
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


