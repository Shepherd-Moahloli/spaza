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

const formOrder = document.getElementById("order");

formOrder.addEventListener("submit", function (event) {
  event.preventDefault();
  formOrder.reset();

  let dijo = starch.options[starch.options.selectedIndex].innerText;
  dijo += ", " + meat.options[meat.options.selectedIndex].innerText;

  const anOrder = (
    <li class="order">
      <p class="order-number">${Math.round(Math.random() * 4)}</p>
      <p>${dijo}</p>
      <p>
        <button class="go-button">GO</button>
      </p>
    </li>
  );

  const listOrder = document.createElement("li");
  listOrder.innerHTML = anOrder;
  listOrder.classList.add("order");
  document.getElementById("orders").appendChild(listOrder);
  console.log(dijo);
});

function processOrder(event) {
  event.preventDefault();
}
