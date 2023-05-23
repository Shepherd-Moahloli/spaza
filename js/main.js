/*  
as an excercise, try to get the vegetable element
const vegetable = document.getElementById('vegetable');
*/

const starch = document.getElementById("starch");

const meat = document.getElementById("meat");

meat.addEventListener("change", function (event) {
  document.getElementById("meat-cost").value = meat.value;
  //
  console.log("meat.value");
});

starch.addEventListener("change", function (event) {
  console.log("starch.value");
});
