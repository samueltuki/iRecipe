// html element selectors.
let searchButton = document.querySelector(".btn-primary");
let cardTitle1 = document.querySelector(".card-title1");
let cardTitle2 = document.querySelector(".card-title2");
let cardTitle3 = document.querySelector(".card-title3");
let imgRecipe1 = document.querySelector(".imgRecipe1");
let imgRecipe2 = document.querySelector(".imgRecipe2");
let imgRecipe3 = document.querySelector(".imgRecipe3");
let hideClass1 = document.querySelector("#searchResult1");
let hideClass2 = document.querySelector("#searchResult2");
let hideClass3 = document.querySelector("#searchResult3");

// headers for fetch request.
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e48b4fae3bmshf247b3bace5571dp1e495fjsn2631d49c5c2e",
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
      // for loop that dynamically creates h2 elements and appends them to the cards.
      for (let i = 0; i < response.feed.length; i++) {
        console.log(response.feed);
        // card one title and img src
        hideClass1.classList.remove("hide")
        cardTitle1.textContent = response.feed[0].display.displayName;
        imgRecipe1.src = response.feed[0].display.images[0];
        // card two title and img src
        hideClass2.classList.remove("hide")
        cardTitle2.textContent = response.feed[1].display.displayName;
        imgRecipe2.src = response.feed[1].display.images[0];
        // card three title and img src
        hideClass3.classList.remove("hide")
        cardTitle3.textContent = response.feed[2].display.displayName;
        imgRecipe3.src = response.feed[2].display.images[0];
      }
      // for (
      //   let j = 0;
      //   j < response.feed[i].content.ingredientLines.length;
      //   j++
      // ) {
      //   // console.log(response.feed[i].content.ingredientLines[j].wholeLine)
      // }
    });
});
