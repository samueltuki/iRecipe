// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let card1 = document.querySelector(".card-body1");
let card2 = document.querySelector(".card-body2");
let card3 = document.querySelector(".card-body3");
let h2Name1 = document.createElement("h2");
let h2Name2 = document.createElement("h2");
let h2Name3 = document.createElement("h2");
let imgRecipe1 = document.querySelector(".card-img-top");
let imgRecipe2 = document.querySelector(".cardTwo");
let imgRecipe3 = document.querySelector(".cardThree");

// headers for fetch request.
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e48b4fae3bmshf247b3bace5571dp1e495fjsn2631d49c5c2e",
    "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
  },
};

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

// event listener added to search button that calls the function on click.
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  let userInput = document.querySelector(".form-control").value;
  fetch(
    "https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=3&q=" +
      userInput,
    options
  )
    .then((response) => response.json())
    .then((response) => {
// for loop that dynamically creates h2 elements and appends them to the cards.
      for (let i = 0; i < response.feed.length; i++) {
        console.log(response.feed);
        // card one title and img src
        h2Name1.textContent = response.feed[0].display.displayName;
        card1.append(h2Name1);
        imgRecipe1.src = response.feed[0].display.images[0];
        // card two title and img src
        h2Name2.textContent = response.feed[1].display.displayName;
        card2.append(h2Name2);
        imgRecipe2.src = response.feed[1].display.images[0];
        // card 3 title and img
        h2Name3.textContent = response.feed[2].display.displayName;
        card3.append(h2Name3);
        imgRecipe3.src = response.feed[2].display.images[0];
      }
        // for (
        //   let j = 0;
        //   j < response.feed[i].content.ingredientLines.length;
        //   j++
        // ) {
        //   // console.log(response.feed[i].content.ingredientLines[j].wholeLine)
        // }
      }
);})
