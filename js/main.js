/*  
as an excercise, try to get the vegetable element
const vegetable = document.getElementById('vegetable');
*/

const starch = document.getElementById("starch");

const meat = document.getElementById("meat");

meat.addEventListener("change", function (event) {
  //
  console.log("You are 4 quaters, you will change for a meat");
});

starch.addEventListener("change", function (event) {
  console.log("You are  4 quaters, you will change for a starch");
});
