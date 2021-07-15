const share = document.querySelector('#share');
const popUp = document.querySelector('.networks');

function showShareCard() {
    popUp.classList.toggle('active');
}

share.addEventListener('click',showShareCard);