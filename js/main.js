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
});

starch.addEventListener("change", function (event) {
  document.getElementById("starch-cost").value = starch.value;
  runThisTown();
});

payment.addEventListener("change", function (event) {
  runThisTown();
});

function runThisTown() {
  total =
    parseInt(document.getElementById("meat-cost").value) +
    parseInt(document.getElementById("starch-cost").value);
  paid = parseInt(document.getElementById("paid").value);

  document.getElementById("total").value = total;
  document.getElementById("change").value = paid - total;
}

runThisTown();

const formOrder = document.getElementById("order");

formOrder.addEventListener("submit", function (event) {
  event.preventDefault();
  formOrder.reset();

  // get the selected option for starch
  let dijo = starch.options[starch.options.selectedIndex].innerText;
  dijo += ", " + meat.options[meat.options.selectedIndex].innerText;

  console.log(starch.options.selectedIndex, meat.options.selectedIndex);

  const anOrder = `
            <p class="order-number">${Math.round(Math.random() * 1000)}</p>
            <p>${dijo}</p>
            <p><button class="go-button">GO</button></p>
    `;
  const listOrder = document.createElement("li");
  listOrder.innerHTML = anOrder;
  listOrder.classList.add("order");

  document.getElementById("orders").appendChild(listOrder);

  listOrder.children[2].addEventListener("click", function (event) {
    event.preventDefault();
    listOrder.remove();
  });

  console.log(dijo);
});

function processOrder(event) {
  event.preventDefault();
}
