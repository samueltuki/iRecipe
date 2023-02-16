// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let cardTitle1 = document.querySelector(".card-title1");
let imgRecipe1 = document.querySelector(".imgRecipe1");
let hideClass = document.querySelector(".searchCard");
let btn1 = document.querySelector(".button1");
let cardBody1 = document.querySelector(".card1");
let p2El = document.createElement("p");
let pEl = document.createElement("p");
let emptyString = document.querySelector(".pClass");
let ingredientEl = document.querySelector(".instructions");
let cardTranslateEl = document.querySelector(".cardTranslate")
let translatePel = document.querySelector (".card-text")

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
          cardTitle1.textContent = ""
          p2El.innerHTML = ""
          ingredientEl.textContent = ""
           // remove hide class to show card on search.
           hideClass.classList.remove("hide");
           // displays title
           cardTitle1.textContent = info.title;
           // changes image src to image of recipe
           imgRecipe1.src = info.image;
           // appends list of instructions
           p2El.innerHTML = info.instructions;
           cardBody1.append(p2El)

          // for loop that dynamicaly creates p elements and appends each ingredient of array to page
          for (let i = 0; i < info.extendedIngredients.length; i++) {
            pEl = document.createElement("p");
            pEl.classList.add("pClass");
            let emptyString = document.querySelector(".pClass");
            // emptyString.textContent = "";
            ingredientEl.textContent = info.extendedIngredients[i].original;
            }
         
        });

    });
  
});



function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function textTranslate(translatedText){

  const encodedParams = new URLSearchParams();
  encodedParams.append("q", translatedText);
  encodedParams.append("target", "es");
  encodedParams.append("source", "en");

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '23ab0c932bmshed8a9913934891fp1202b4jsn82d80a03539c',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: encodedParams
  };

  fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch(err => console.error(err));
    cardTranslateEl.textContent = textTranslate(response.translate);
    translatePel.append(cardTranslateEl)
    ;
  
}





   