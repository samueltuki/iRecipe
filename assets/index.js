let apiKey = "5f62e1bea35847eb8da9582b2a2f8517";

userCal = " maxCalories=500";
let dishNum = "715495"
function getRecipe(){
fetch('https://api.spoonacular.com/recipes/' + dishNum + '/information?&apiKey=' + apiKey)
  .then((response) => response.json())
  .then((recipes) => console.log(recipes));
}
getRecipe();



fetch('https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey=' + apiKey)
  .then((response) => response.json())
  .then((info) => console.log(info));
