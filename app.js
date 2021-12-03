
const numbers = [
    {
        name: 'two',
        img: 'images/two.png'
    },
    {
        name: 'five',
        img: 'images/five.png'
    },
    {
        name: 'seven',
        img: 'images/seven.png'
    },
    {
        name: 'nine',
        img: 'images/nine.png'
    }
];

numbers.sort(function () {
    return 0.5 * Math.random();
});

const grid = document.querySelector('.grid');

const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon= [];

createBoard();

function createBoard() {
    for (let i = 0; i < numbers.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        //card.addEventListener('click',flipCard);
        grid.appendChild(card);
    }
}


