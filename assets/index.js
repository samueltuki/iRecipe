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


// function translateText(pOne.textContent, targetLanguage) {
//   let apiKey = '151e2cfb22msh8799ac1368fb95cp18192bjsn8c2898361e55'
//   let url = 'https://google-translate1.p.rapidapi.com'

//   fetch(url) 
//   .then((response) => response.json())
//   .then((data) => {
    
//     let targetLanguages = ["fr", "es", "it", "ja"];
//     for (let i = 0; i < targetLanguages.length; i++) {
//       let targetLanguage = targetLanguages[i];
    
//     }

//   })

  
// }

const TranslateOption = {
  method: 'GET',
  headers: {
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '151e2cfb22msh8799ac1368fb95cp18192bjsn8c2898361e55',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  }
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



