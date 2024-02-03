// const newGame = document.querySelector("#new-btn");
const display = document.querySelector(".msg-display");
let boxes = document.querySelectorAll(".box");
// const resetBtn = document.querySelector("#reset-btn");

let turn0 = true; //playerX, player0
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    isWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

function isWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    function disableBtn() {
      for (let box of boxes) {
        box.disabled = true;
      }
    }
    function enableBtn() {
      for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
    }
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      } else if (count === 9) {
        document.querySelector("#msg").innerText = "Its a Draw!";
      }
    }
  }

  function showWinner(winner) {
    document.querySelector(
      "#msg"
    ).innerText = `Congratulations, Winner is ${winner}`;
    display.classList.remove("hide");
    disableBtn();
    console.log(disableBtn());
  }

  function resetGame() {
    turn0 = true;
    enableBtn();
    display.classList.add("hide");
  }
  document.querySelector("#reset-btn").addEventListener("click", resetGame);
  document.querySelector("#new-btn").addEventListener("click", resetGame);
}
