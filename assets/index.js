
// let searchButton = document.querySelector(".btn-primary");
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e48b4fae3bmshf247b3bace5571dp1e495fjsn2631d49c5c2e',
// 		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// 	}
// };

// let recipeChK = document.getElementById("recipesCheck");
// searchButton.addEventListener("click", function (){
//   let userInput = document.querySelector(".form-control").value;
//   console.log(userInput);
// fetch('https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=3&q=' + userInput , options)
// 	.then(response => response.json())
// 	.then(response => { 
//     // let recipe = response.feed.content.ingredientLines;
//     // console.log(response.feed);
// for (let i = 0; i < response.feed.length; i++) {
//   console.log(response.feed[i].display.displayName);
//   for (let j = 0; j < response.feed[i].content.ingredientLines.length; j++) {
//     console.log(response.feed[i].content.ingredientLines[j].wholeLine)
    
//   }
//   }});
//   });

let unsplashKey = "tKm8T_TxUwqHGS1sFo2uSibaP1yWPMp7RAgNTtyTSEw"

  fetch(`https://api.unsplash.com/photos/random?client_id=${unsplashKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  
  
  