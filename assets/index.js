// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let cardTitle1 = document.querySelector(".card-title1");
let imgRecipe1 = document.querySelector(".imgRecipe1");
let hideClass = document.querySelector(".searchCard");
let btn1 = document.querySelector(".button1");
let cardBody1 = document.querySelector(".card1");
let p2El = document.createElement("p");
let pEl = document.createElement("p");
let likeBtn = document.querySelector(".fa-thumbs-up");
let emptyString = document.querySelector(".pClass");
let ingredientEl = document.querySelector(".instructions");
let cocktailBtn = document.querySelector(".cocktail");
let cocktailPara = document.querySelector(".card-text");
let cocktailHeader = document.querySelector(".card-title");
let cocktailCard = document.querySelector(".card2");
// api key
const apiKey = "1fce12db04a04be5be21bfb6692f4d2b";

// event listener that fires off fetch requests on click.
searchButton.addEventListener("click", function (e) {
  e.preventDefault();

  // gets user input value
  let userInput = document.querySelector(".form-control").value;

  // fetch request that gets menu item id from spoonacular.
  fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      userInput +
      "&apiKey=" +
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
          cardTitle1.textContent = "";
          p2El.innerHTML = "";
          ingredientEl.textContent = "";
          // remove hide class to show card on search.
          hideClass.classList.remove("hide");
          // displays title
          cardTitle1.textContent = info.title;
          // changes image src to image of recipe
          imgRecipe1.src = info.image;
          // appends list of instructions
          p2El.innerHTML = info.instructions;
          cardBody1.append(p2El);

          // for loop that dynamicaly creates p elements and appends each ingredient of array to page
          for (let i = 0; i < info.extendedIngredients.length; i++) {
            pEl = document.createElement("p");
            pEl.classList.add("pClass");
            // emptyString.textContent = "";
            pEl.textContent = info.extendedIngredients[i].original;
            ingredientEl.append(pEl);
          }
        });
    });
});

let body = {
  ingredients: [
    "0.5 fluid ounces gin",
    "0.5 fluid ounce dry vermouth",
    "1 cup ice ",
    "2 pickled pearl onions, drained ",
  ],
  name: "gibson cocktail",
};

cocktailBtn.addEventListener("click", function () {});

function randomCocktail() {
  for (let j = 0; j < body.ingredients.length; j++) {
    let cocktailPara = document.createElement("p");
    cocktailPara.textContent = body.ingredients[j];
    cocktailCard.append(cocktailPara);
  }
  cocktailHeader.textContent = body.name;
}

randomCocktail();

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e48b4fae3bmshf247b3bace5571dp1e495fjsn2631d49c5c2e',
// 		'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
// 	}
// };

// fetch('https://cocktails3.p.rapidapi.com/random', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))

// like button
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

function textTranslate(translatedText) {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", translatedText);
  encodedParams.append("target", "es");
  encodedParams.append("source", "en");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "23ab0c932bmshed8a9913934891fp1202b4jsn82d80a03539c",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  cardTranslateEl.textContent = textTranslate(response.translate);
  translatePel.append(cardTranslateEl);
}

// variable to set local storage on load.
let btnLiked = localStorage.getItem("liked");
// if the like button is clicked on load run like function
if (btnLiked === "enabled") {
  like();
}

// function for like class
function like() {
  likeBtn.classList.add("like-clicked");
  localStorage.setItem("liked", "enabled");
}
// function for dislike class
function dislike() {
  likeBtn.classList.remove("like-clicked");
  localStorage.setItem("liked", null);
}

// event listener to get local storage on click
// if statement to determine whether its been liked or not.
likeBtn.addEventListener("click", function () {
  btnLiked = localStorage.getItem("liked");
  if (btnLiked !== "enabled") {
    like();
  } else {
    dislike();
  }
});
