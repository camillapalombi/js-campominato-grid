/*DIFFICOLTà FACILE

let squaresContainer = document.querySelector('.container-play-grid');


for (let i = 1; i <= 100; i++) {

    let elemento = document.createElement('div');
    elemento.classList.add('square-100');
    elemento.innerHTML = i ;

    squaresContainer.append(elemento);
}*/

/*DIFFICOLTà MEDIA

let squaresContainer = document.querySelector('.container-play-grid');


for (let i = 1; i <= 81; i++) {

    let elemento = document.createElement('div');
    elemento.classList.add('square-81');
    elemento.innerHTML = i ;

    squaresContainer.append(elemento);
}*/


/*DIFFICOLTà DIFFICILE

let squaresContainer = document.querySelector('.container-play-grid');


for (let i = 1; i <= 49; i++) {

    let elemento = document.createElement('div');
    elemento.classList.add('square-49');
    elemento.innerHTML = i ;

    squaresContainer.append(elemento);
}*/


let optionEasy = document.getElementById('easy').value;
console.log(optionEasy);
let optionDifficult = document.getElementById('difficult').value;
console.log(optionDifficult);
let optionMedium = document.getElementById('medium').value;
console.log(optionMedium);

let btnPlay = document.getElementById('btn-play').value;
console.log(btnPlay);


let select = document.getElementById('difficulty');
let value = select.options[select.selectedIndex].value;
console.log(value);


btnPlay.addEventListener('click' , function() {

})