/*  
as an excercise, try to get the vegetable element
const vegetable = document.getElementById('vegetable');
*/

const starch = document.getElementById("starch");

const meat = document.getElementById("meat");

const payment = document.getElementById("paid");

meat.addEventListener("change", function (event) {
  document.getElementById("meat-cost").value = meat.value;
  runThisTown();
  //
  console.log("meat.value");
});

starch.addEventListener("change", function (event) {
  document.getElementById("starch-cost").value = starch.value;
  runThisTown();
  console.log("starch.value");
});

payment.addEventListener("change", function (event) {
  runThisTown();
});

function runThisTown() {
  total =
    parseInt(document.getElementById("meat-cost").value) +
    parseInt(document.getElementById("starch-cost").value);

  paid = parseInt((document.getElementById("paid").value = total));

  document.getElementById("total").value = total;
  document.getElementById("change").value = paid - total;
}

runThisTown();
