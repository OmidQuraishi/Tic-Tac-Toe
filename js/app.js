"use strict";
const boxes = document.querySelectorAll(".box");
const a = [...boxes];
const overly = document.querySelector(".overly");
const winnerEl = document.querySelector(".winner");
const newGame = document.querySelector(".winner button");
let playerTurn = 0;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winner = () => {
  for (let pattern of winPattern) {
    const cell1 = boxes[pattern[0]].textContent;
    const cell2 = boxes[pattern[1]].textContent;
    const cell3 = boxes[pattern[2]].textContent;
    if (cell1 !== "" && cell2 !== "" && cell3 !== "") {
      if (cell1 == cell2 && cell2 == cell3) {
        overly.classList.remove("hidden");
        winnerEl.classList.remove("hidden");
        document.querySelector(".winner h1").textContent = `Winner ${cell1}`;
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.textContent == "") {
      if (playerTurn == 0) {
        box.textContent = "o";
        if (box.textContent == "o") box.classList.add("circle");
        playerTurn = 1;
      } else {
        box.textContent = "x";
        if (box.textContent == "x") box.classList.add("xmark");
        playerTurn = 0;
      }
    }
    winner();
    if (a.every((ele) => ele.textContent !== "")) {
      overly.classList.remove("hidden");
      winnerEl.classList.remove("hidden");
      document.querySelector(".winner h1").textContent = "Draw";
    }
  });
});

const palyNewGame = function () {
  boxes.forEach((box) => {
    box.textContent = "";
    box.classList.remove("xmark");
    box.classList.remove("circle");
  });
  overly.classList.add("hidden");
  winnerEl.classList.add("hidden");
  playerTurn = 0;
};

newGame.addEventListener("click", palyNewGame);
