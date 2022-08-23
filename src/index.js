
import FCG from "fantasy-content-generator";

console.log(FCG.Names.generate());

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c36118751msh411ebf7605a21d9p15665djsne9a3ef934253',
		'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
	}
};

fetch('https://dice-roll.p.rapidapi.com/roll/4/d/20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


/*

wishlist function 

age genereation
portrait assignment 








FCG.Names.generate();
{
  seed: <uuid>,
  name: 'Sutha Chernin',
  race: 'halfOrc',
  gender: 'female',
  formattedData: {
    name: 'Sutha Chernin',
    race: 'Half-Orc',
    gender: 'Female'
  }
}




*/