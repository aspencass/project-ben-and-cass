// Globals

const baseUrl = 'http://localhost:3000/';
const baseUrlEnd = '';
const dragonbornUrl = '/dragonborn';
const dwarfUrl = 'http://localhost:3000/dwarf';
const elfUrl = 'http://localhost:3000/elf';
const gnomeUrl = 'http://localhost:3000/gnome';
const halfElfUrl = 'http://localhost:3000/halfElf';
const halfOrcUrl = 'http://localhost:3000/halfOrc';
const halflingUrl = 'http://localhost:3000/halfling';
const humanUrl = 'http://localhost:3000/human';
const tieflingUrl = 'http://localhost:3000/tiefling';
const traitsUrl = 'http://localhost:3000/traits';
const desiresUrl = 'http://localhost:3000/desires';




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