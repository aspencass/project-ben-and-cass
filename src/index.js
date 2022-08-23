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



// Render Functions 



// Event Handlers 




// Initializers 






/*

wishlist function 

generator function 
	- calls on random character race  [0-8]
	- calls on random character gender [0-1]
	- random name and last name [0-5]
	- calls on random character trait [0-12]
	- calls on random character desire [0-19]
	- takes the race and generates an approproate number 
	- takes the race and gender and generates an appropriate portrait 
	- something that calls on dice and assigns it the 6 scores


function favoriter 

function unfavorite 




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





*/