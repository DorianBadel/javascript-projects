
// Initial value
displayedValue = document.getElementById("js_value");
let value = displayedValue.innerText;
//Buttons
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
  btn.addEventListener('click',(e)=>{
    const id = e.currentTarget.id;
    id == "js_decrease"
    ? value --
    : id == "js_increase"
    ? value ++
    : value = 0;

    displayedValue.innerText = value;
  })
});
