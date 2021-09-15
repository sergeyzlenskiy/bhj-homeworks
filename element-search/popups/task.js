let showFirst = document.querySelector('#modal_main');
showFirst.classList.add("modal_active");

document.querySelectorAll('div.modal__close')[0].onclick = function() {
    showFirst.className = "modal";
    //document.querySelector('.modal').style.background = "rgba(0, 0 , 0, 0)";
};

document.querySelector('.show-success').onclick = function() {
    showFirst.className = "modal";
    document.querySelector('#modal_success').classList.add('modal_active');
};

document.querySelectorAll('div.modal__close')[1].onclick = function() {
    document.querySelector('#modal_success').className = 'modal';
    showFirst.className = 'modal';
};