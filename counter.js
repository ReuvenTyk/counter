const STARTING_COUNTER_DEFAULT = 0;
let counter = 0,
  maxNum,
  minNum,
  sec = 0;

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const count = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const maxUser = document.getElementById("maxUser");
const minUser = document.getElementById("minUser");
const timer = document.getElementById("timer");

plusBtn.addEventListener("click", up);
minusBtn.addEventListener("click", down);
resetBtn.addEventListener("click", reset);
document.getElementById("maxUser").addEventListener("focusout", readMaxNumber);
document.getElementById("minUser").addEventListener("focusout", readMinNumber);

function up() {
  if (maxNum > counter || !maxNum) {
    count.innerHTML = ++counter;
    count.style.color = "green";
    zero();
    return;
  }
  if (counter > maxNum) {
    resetCounter(maxNum);
    count.innerHTML = counter;
    count.style.color = "blueviolet";
    return;
  }
  alert("Reach max number");
}

function down() {
  /* negative(); */
  if (minNum < counter || !minNum) {
    count.innerHTML = --counter;
    count.style.color = "crimson";
    zero();
    return;
  }
  if (counter < minNum) {
    resetCounter(minNum);
    count.innerHTML = counter;
    count.style.color = "blueviolet";
    return;
  }
  alert("Reach min number");
}

function readMaxNumber() {
  if (maxUser) {
    maxNum = maxUser.value;
  }
}
function readMinNumber() {
  if (minUser) {
    minNum = minUser.value;
  }
}

function resetCounter(num) {
  counter = num;
}

function zero() {
  if (counter === 0) {
    count.style.color = "black";
  }
}
/* 
function negative() {
  if (counter <= 0) {
    counter = 1;
  }
}
 */
function reset() {
  counter = STARTING_COUNTER_DEFAULT;
  count.innerHTML = counter;
  count.style.color = "black";
  document.getElementById("maxUser").value = "";
  document.getElementById("minUser").value = "";
}
