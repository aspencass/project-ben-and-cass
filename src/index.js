// Globals

let currentCharacterRace;
let currentCharacterAge;



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


function getDndData(url){
	return fetch(url + baseUrlEnd) 
		.then(function (response) {
			return response.json();
			})
		.then(function (allData) {
			return allData;
		})
};


/*

var responseClone; // 1
fetch('https://example.com/some/path/to/json')
.then(function (response) {
    responseClone = response.clone(); // 2
    return response.json();
})
.then(function (data) {
    // Do something with data
}, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
});
*/

// DOM Selectors

 


// Render Functions 




// Event Handlers 




// Initializers 

getDiceApi();
getDndData(baseUrl);








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




// To do
// wishlist function
// generator function
//     - calls on random character race  [0-8]
//     - calls on random character gender [0-1]
//     - random name and last name [0-5]
//     - calls on random character trait [0-12]
//     - calls on random character desire [0-19]
//     - takes the race and generates an approproate number
//     - takes the race and gender and generates an appropriate portrait
//     - something that calls on dice and assigns it the 6 scores
// function favoriter
// function unfavorite

//Age Generator

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