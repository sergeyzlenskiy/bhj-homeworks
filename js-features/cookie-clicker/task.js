const cookie = document.getElementById("cookie");
let counter = +document.querySelector('#clicker__counter').innerHTML;
cookie.onclick = function() {
    counter += 1;
    document.querySelector('#clicker__counter').innerHTML = counter;
};