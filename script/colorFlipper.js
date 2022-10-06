const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('js_btn');
const color = document.getElementById('js_color');

btn.addEventListener('click', () => {
  //TODO get random number
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
}
