console.log("Welcome To Tic Tac Toe");

let backgroundMusic = new Audio("../music/music.mp3");

let audioTurn = new Audio("../music/ting.mp3");

let gameOverTune = new Audio("../music/gameover.mp3");

let initialTurn = "X";

let isGameOver = false;



// Function to change the turn

const changeTurn = () => {
    return initialTurn === "X" ? "0" : "X"
};

// We use here ternary operator
// if initialTurn === "X" then we return 0 otherwise we return "X"



// Function to check for a win

const checkWin = () => {
    let boxText = document.getElementsByClassName("box_text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isGameOver = true;
        }
    })
};


// If someone wins then this function return true, play the sound of game over, reseting the
// things used in this game, play/pause gif



// Game logic start

let boxes = document.getElementsByClassName("box");

// Now all "box" element (class = box) are come inside the boxes
// Now we put one event listener on each box
// We write array.from because it returns a html collection

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".box_text");
    element.addEventListener("click", (e) => {
        if (boxText.innerText === "") {
            boxText.innerText = initialTurn;
            initialTurn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver) {
                document.getElementsByClassName(".info")[0].innerText = "Turn for " + initialTurn;
            }
        }
    });
});

// In above line element is a box
// We put event listener on each box



console.log(boxes);