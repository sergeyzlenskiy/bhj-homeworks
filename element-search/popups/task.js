let showFirst = document.getElementById('modal_main');
// console.log(show);
showFirst.classList.add("modal_active");

document.querySelector('.modal__close').onclick = function() {
    document.querySelector('.modal__content').style.display = "none";
    document.querySelector('.modal').style.background = "rgba(0, 0 , 0, 0)";
};

console.log(document.getElementsByClassName('show-success'));


let itemSuccess = document.getElementsByClassName('show-success');
[].forEach.call(itemSuccess, function(elem) {
    elem.addEventListener('click', function(e) {
        document.getElementById("modal_success").classList.add("modal_active");
    }, false);
  });

  