
// Initial value
displayedValue = document.getElementById("js_value");
let value = displayedValue.innerText;
//Buttons
const decrease = document.getElementById("js_decrease");
const increase = document.getElementById("js_increase");
const reset = document.getElementById("js_reset");

decrease.addEventListener('click', ()=>{
  value--;
  displayedValue.innerText = value;
});

increase.addEventListener('click', ()=>{
  value++;
  displayedValue.innerText = value;
});

reset.addEventListener('click', ()=>{
  value = 0;
  displayedValue.innerText = value;
});

console.log(value);
