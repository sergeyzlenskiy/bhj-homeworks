let hit = +document.querySelector('#dead').innerHTML;
let miss = +document.querySelector('#lost').innerHTML;

const hole = document.getElementsByClassName('hole');
for (let i = 0; i < 9; i++) {
hole[i].onclick = function() {
    if (hole[i].classList.contains( 'hole_has-mole' )) {
        hit += 1;
        document.querySelector('#dead').innerHTML = hit;
    } else {
        miss += 1;
        document.querySelector('#lost').innerHTML = miss;
    }
    if (hit >= 10) {
        alert ('You win!');
        document.querySelector('#lost').innerHTML = 0;
        document.querySelector('#dead').innerHTML = 0;
        hit = 0;
        miss = 0;
    } else if (miss >= 5) {
        alert('You lose:(');
        document.querySelector('#lost').innerHTML = 0;
        document.querySelector('#dead').innerHTML = 0;
        hit = 0;
        miss = 0;
    }
};
}
