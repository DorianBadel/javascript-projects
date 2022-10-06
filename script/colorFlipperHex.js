const hex = [0,1,2,3,4,5,6,7,8,9,
  "A","B","C","D","E","F"];

const btn = document.getElementById('js_btn');
const color = document.getElementById('js_color');

btn.addEventListener('click', ()=>{
  //TODO get random number
  const hexColor = getRandomHex();

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;

});

function getRandomHex(){
  let hexString = '#';
  for(let i=0; i<6; i++){
    const char = hex[Math.floor(Math.random()*hex.length)];
    hexString += char;
  }

  return hexString;
}
