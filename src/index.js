// Globals


// Fetches

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



// DOM Selectors

const navBar = document.querySelector('#fav-characters');
const name = document.querySelector('#npc-name');
const race = document.querySelector('#npc-race');
const gender = document.querySelector('#npc-gender');
const traits = document.querySelector('#npc-traits');
const desires = document.querySelector('#npc-desires');



// Render Functions 

function showCharacter(data) {
	currentCharacter = data;
	name.textContent = data.name;
	race.textContent = data.race;
	gender.textContent = data.gender;
	traits.textContent = data.traits;
	desires.textContent = data.desires;
}


// Event Handlers 




// Initializers 

getDiceApi();










/*

wishlist function 

age genereation
portrait assignment 




{
    "dragonborn":       // 15-80
    "dwarf":            // 50-350
    "elf":              // 100-750
    "gnome":            // 40 - 500
    "halfElf":          // 20-180
    "halfOrc":          // 14-75
    "halfling":         // 20-200
    "human":            // 18-80
    "tiefling":         // 18-90
}

name: first, last
race: "dragonborn" "dwarf" "elf" "gnome" "halfElf" "halfOrc" "halfling" "human" "tiefling"        
gender: male, female
"traits" 
"desires"







*/