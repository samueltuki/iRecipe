<<<<<<< HEAD
// // html element selectors.
// let searchButton = document.querySelector(".btn-primary");
// let cardTitle1 = document.querySelector(".card-title1");
// let cardTitle2 = document.querySelector(".card-title2");
// let cardTitle3 = document.querySelector(".card-title3");
// let imgRecipe1 = document.querySelector(".imgRecipe1");
// let imgRecipe2 = document.querySelector(".imgRecipe2");
// let imgRecipe3 = document.querySelector(".imgRecipe3");
// let hideClass = document.querySelector(".searchCard");
// let btn1 = document.querySelector(".button1");
// let btn2 = document.querySelector(".button2");
// let btn3 = document.querySelector(".button3");
// let cardBody1 = document.querySelector(".card1");
// let cardBody2 = document.querySelector(".card2");
// let cardBody3 = document.querySelector(".card3");

// // headers for fetch request.
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "151e2cfb22msh8799ac1368fb95cp18192bjsn8c2898361e55",
//     "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
//   },
// };
// // event listener added to search button that calls the function on click.
// searchButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   let userInput = document.querySelector(".form-control").value;
//   fetch(
//     "https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=3&q=" +
//       userInput,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       // for loop that dynamically creates h2 elements and appends them to the cards.
//       for (let i = 0; i < response.feed.length; i++) {
//         // card one title and img src
//         cardTitle1.textContent = response.feed[0].display.displayName;
//         imgRecipe1.src = response.feed[0].display.images[0];
//         hideClass.classList.remove("hide");
//         // card two title and img src
//         cardTitle2.textContent = response.feed[1].display.displayName;
//         imgRecipe2.src = response.feed[1].display.images[0];
//         // card three title and img src
//         cardTitle3.textContent = response.feed[2].display.displayName;
//         imgRecipe3.src = response.feed[2].display.images[0];
//         for (
//           let j = 0;
//           j < response.feed[i].content.ingredientLines.length;
//           j++
//         ) {
//           // card one
//           let pOne = document.createElement("p");
//           pOne.textContent =
//             response.feed[0].content.ingredientLines[j].wholeLine;
//           cardBody1.append(pOne);
//           // card two
//           let pTwo = document.createElement("p");
//           pTwo.textContent =
//             response.feed[1].content.ingredientLines[j].wholeLine;
//           cardBody2.append(pTwo);
//           // card three
//           let pThree = document.createElement("p");
//           pThree.textContent =
//             response.feed[2].content.ingredientLines[j].wholeLine;
//           cardBody3.append(pThree);
//           console.log(response.feed[2].content);
//         }
//       }
//     });
// });





// translation


// // Add a button to translate language
// let translateBtn = document.createElement("button");
// translateBtn.textContent = "Translate";
// document.body.append(translateBtn);

// // click event for the generated button
// translateBtn.addEventListener("click", async function (e) {
//   e.preventDefault();

// });


function translateText() {
  
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", "Hello, world!");
  encodedParams.append("target", "es");
  encodedParams.append("source", "en");

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '151e2cfb22msh8799ac1368fb95cp18192bjsn8c2898361e55',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: encodedParams
  };

  fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
console.log(response);
}



searchButton.addEventListener("click", function (e) {
  e.preventDefault();

})


=======
// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let cardTitle1 = document.querySelector(".card-title1");
let imgRecipe1 = document.querySelector(".imgRecipe1");
let hideClass = document.querySelector(".searchCard");
let btn1 = document.querySelector(".button1");
let cardBody1 = document.querySelector(".card1");
let p2El = document.createElement("p");

// api key
const apiKey = "cd8d4115f8c64fd0859f8a90e0d57eb7";


// event listener that fires off fetch requests on click.
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  // gets user input value
  let userInput = document.querySelector(".form-control").value;

  // fetch request that gets menu item id from spoonacular.
  fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" + userInput + "&apiKey=" +
      apiKey
  )
    .then((response) => response.json())
    .then((response) => {
      let menuId = response.results[0].id;
      // console.log(menuId);

      // fetch request we pass id into to get instructions and ingredients
      fetch(
        "https://api.spoonacular.com/recipes/" +
          menuId +
          "/information?apiKey=" +
          apiKey
      )
        .then((response) => response.json())
        .then((info) => {

          // for loop that dynamicaly creates p elements and appends each ingredient of array to page 
        for (let i = 0; i < info.extendedIngredients.length; i++) {
          let pEl = document.createElement("p");
          pEl.textContent = info.extendedIngredients[i].original;
          cardBody1.append(pEl);
          
          
          
        }

// remove hide class to show card on search.
hideClass.classList.remove("hide");
// displays title 
        cardTitle1.textContent = info.title;
        // changes image src to image of recipe 
        imgRecipe1.src = info.image;
        // appends list of instructions 
        p2El.innerHTML = info.instructions;
          cardBody1.append(p2El);

      })})});
>>>>>>> c9f647c1da247c98cdd986fb56c5d1a1b88d4737
