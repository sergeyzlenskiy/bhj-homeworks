let time = document.querySelector("#timer").innerHTML;
console.log(time);
function timer() {
    time = time - 1;
    document.querySelector("#timer").innerHTML = time;
}
let timerId = setInterval(function timer() {
    time = time - 1;
    document.querySelector("#timer").innerHTML = time;
    if (time <= 0) {
        alert('Congratulations');
        clearInterval(timerId);
    }
}, 1000);
