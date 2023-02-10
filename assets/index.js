let card1 = document.querySelector(".card-body1");
let card2 = document.querySelector(".card-body2");
let card3 = document.querySelector(".card-body3");
let h2Name1 = document.createElement("h2");
let h2Name2 = document.createElement("h2");
let h2Name3 = document.createElement("h2");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e48b4fae3bmshf247b3bace5571dp1e495fjsn2631d49c5c2e",
    "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
  },
};

let recipeChK = document.getElementById("recipesCheck");
let searchButton = document.querySelector(".btn-primary");
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
      // let recipe = response.feed.content.ingredientLines
      for (let i = 0; i < response.feed.length; i++) {
        h2Name1.textContent = response.feed[i].display.displayName;
        card1.append(h2Name1);

        h2Name2.textContent = response.feed[i].display.displayName;
        card2.append(h2Name2);

        h2Name3.textContent = response.feed[i].display.displayName;
        card3.append(h2Name3);

        console.log(response.feed[i].display.displayName);
        for (
          let j = 0;
          j < response.feed[i].content.ingredientLines.length;
          j++
        ) {
          // console.log(response.feed[i].content.ingredientLines[j].wholeLine)
        }
      }
    });
});

// h2El.textContent("hello");
// document.append(div);
// div.append(h2El);
