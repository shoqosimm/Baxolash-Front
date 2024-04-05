
const elArrowIcon = document.querySelector('.arrow__img');
const elModal = document.querySelector('.modal');


elArrowIcon.addEventListener('click' ,(evt)=>{
    evt.preventDefault();

    elModal.classList.toggle('modal--open')
})
