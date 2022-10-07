const openModalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');


openModalBtn.addEventListener("click",()=>{
  modal.classList.toggle('open-modal');
});

closeModalBtn.addEventListener("click",()=>{
  modal.classList.remove('open-modal');
});
