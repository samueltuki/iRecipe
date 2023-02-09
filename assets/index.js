
let userInput = "pasta";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e48b4fae3bmshf247b3bace5571dp1e495fjsn2631d49c5c2e',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

let recipeChK = document.getElementById("recipesCheck");

fetch('https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=5&q=' + userInput , options)


	.then(response => response.json())
	.then(response => {
    // let recipe = response.feed.content.ingredientLines;
    // console.log(response.feed);
for (let i = 0; i < response.feed.length; i++) {
  console.log(response.feed[i]);
  for (let j = 0; j < response.feed[i].content.ingredientLines.length; j++) {
    console.log(response.feed[i].content.ingredientLines[j].wholeLine)
    
  }
  }});

