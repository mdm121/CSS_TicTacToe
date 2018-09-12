alert("Welcome to Tic Tac Toe!! Player X -- It's your turn first!! Sit tight, Player O, you're up next!!");

let player = "X";

let cells = document.querySelectorAll(".btn");

let tl = document.querySelector(".top, .left");
let tm = document.querySelector(".top, .middle");
let tr = document.querySelector(".top, .right");
let ml = document.querySelector(".middle, .left");
let center = document.querySelector(".center");
let mr = document.querySelector(".middle, .right");
let bl = document.querySelector(".bottom, .left");
let bm = document.querySelector(".bottom, .middle");
let br = document.querySelector(".bottom, .right");

let outcomes = [
        [tl, tm, tr],
        [tl, center, br],
        [tl, ml, bl],
        [ml, center, mr],
        [bl, bm, br],
        [bl, center, tr],
        [bm, center, tm],
        [br, mr, tr],
        [tl, tm, tr, ml, center, mr, bl, bm, br]
];

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});
 
function cellClicked(e) {
    if(e.target.textContent === "X" || e.target.textContent === "O") {
        badMove();
        return;
    } else if(player === "X") {
        e.target.textContent = "X";
        alert("PLAYER X just made a move. Your turn PLAYER O!");
        player = "O";
    } else if(player === "O") {
        e.target.textContent = "O";
        alert("PLAYER O just made a move. Your turn PLAYER X!");
        player = "X";
    };

    winningCombo(outcomes);

};

function badMove() {
    alert("Invalid move. Try again sucker!!");
};

function winningCombo(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log([arr[i][0].textContent, arr[i][1].textContent, arr[i][2].textContent]);
        if([arr[i][0].textContent, arr[i][1].textContent, arr[i][2].textContent] == ["X", "X", "X"]) {
            alert("PLAYER X has won the game!!!");
        } else if(arr[i] == ["O", "O", "O"]) {
            alert("PLAYER O has won the game!!!");
        };
    };
};


