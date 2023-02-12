// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let cardTitle1 = document.querySelector(".card-title1");
let cardTitle2 = document.querySelector(".card-title2");
let cardTitle3 = document.querySelector(".card-title3");
let imgRecipe1 = document.querySelector(".imgRecipe1");
let imgRecipe2 = document.querySelector(".imgRecipe2");
let imgRecipe3 = document.querySelector(".imgRecipe3");
let hideClass = document.querySelector(".searchCard");

let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");

// headers for fetch request.
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "151e2cfb22msh8799ac1368fb95cp18192bjsn8c2898361e55",
    "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
  },
};
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
      console.log(response);
      // for loop that dynamically creates h2 elements and appends them to the cards.
      for (let i = 0; i < response.feed.length; i++) {
        // card one title and img src
        cardTitle1.textContent = response.feed[0].display.displayName;
        imgRecipe1.src = response.feed[0].display.images[0];
        hideClass.classList.remove("hide");
        // card two title and img src
        cardTitle2.textContent = response.feed[1].display.displayName;
        imgRecipe2.src = response.feed[1].display.images[0];
        // card three title and img src
        cardTitle3.textContent = response.feed[2].display.displayName;
        imgRecipe3.src = response.feed[2].display.images[0];
      for (
        let j = 0;
        j < response.feed[i].content.ingredientLines.length;
        j++
      ) {
        console.log(response.feed[i].content.ingredientLines[j].wholeLine);
      }
    }});
});

