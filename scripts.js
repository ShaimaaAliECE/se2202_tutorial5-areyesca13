let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game


// use the value stored in the nextPlayer variable to indicate who the next player is
let nPlayer = document.querySelector("#next-lbl");
nPlayer.innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    //let cells = document.querySelectorAll("");

    let cells = document.querySelectorAll("td");
    //let squareBrackets = '<button id= 'edit-btn'>[ ]</button>';

    for(let c = 0;c < cells.length;c++){
        cells[c].innerHTML = '[  ]';
    }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   let btns = document.querySelectorAll('button');

   for (let c=0; c < bts.length;c++)
   {
       btns[c].addEventListener('click',(event) => {takeCell(event)});
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
