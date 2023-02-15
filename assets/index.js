// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let cardTitle1 = document.querySelector(".card-title1");
let imgRecipe1 = document.querySelector(".imgRecipe1");
let hideClass = document.querySelector(".searchCard");
let btn1 = document.querySelector(".button1");
let cardBody1 = document.querySelector(".card1");
let p2El = document.createElement("p");
let pEl = document.createElement("p");
let likeBtn = document.querySelector('.fa-thumbs-up');
// api key
const apiKey = "cd8d4115f8c64fd0859f8a90e0d57eb7";

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
          // for loop that dynamicaly creates p elements and appends each ingredient of array to page
          for (let i = 0; i < info.extendedIngredients.length; i++) {
            pEl = document.createElement("p");
            pEl.classList.add("pClass");
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
        });
    });
});

// like button




function like() {
  likeBtn.classList.toggle("toggle");
};