let valueSelect = document.getElementById('difficulty');

let squaresContainer = document.querySelector('.container-play-grid');

let btnPlay = document.getElementById('btn-play');


/*ADD EVENT LISTENER*/

btnPlay.addEventListener('click' , play);

arrLevel = [100, 81, 49];

function play() {

    squaresContainer.innerHTML = '';

    let IndexLevel = parseInt(valueSelect.value);

    let cellsCount = arrLevel[IndexLevel];

    if (cellsCount == 100) {

        for (let i = 1; i <= 100; i++) {

            let elemento = document.createElement('div');
            elemento.classList.add('square-100');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);
        }

    } else if (cellsCount == 49) {

        for (let i = 1; i <= 49; i++) {
        
            elemento = document.createElement('div');
            elemento.classList.add('square-49');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);
        
        } 

    } else {

        for (let i = 1; i <= 81; i++) {
        
            elemento = document.createElement('div');
            elemento.classList.add('square-81');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);  
        }
    } 
}