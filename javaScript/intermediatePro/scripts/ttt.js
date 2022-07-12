console.log("Welcome To Tic Tac Toe");

let backgroundMusic = new Audio("../music/music.mp3");

let audioTurn = new Audio("../music/ting.mp3");

let gameOver = new Audio("../music/gameover.mp3");

let initialTurn = "X";


// Function to change the turn

const changeTurn = () => {
    return initialTurn === "X" ? "0" : "X"
}

// We use here ternary operator
// if initialTurn === "X" then we return 0 otherwise we return "X"


// Function to check for a win



// If someone wins then this function return true, play the sound of game over, reseting the
// things used in this game, play/pause gif



// Game logic start

let boxes = document.getElementsByClassName("box");

// Now all "box" element (class = box) are come inside the boxes
// Now we put one event listener on each box
// We write array.from because it returns a html collection

Array.from(boxes).forEach(element => {
    let boxText = document.querySelector(".box_text");
    boxText.addEventListener("click", () => {
        if (e.innerText === "") {
            e.innerText = audioTurn;
            changeTurn();
        }
    })
})

// In above line element is a box
// We put event listener on each box 



console.log(boxes);