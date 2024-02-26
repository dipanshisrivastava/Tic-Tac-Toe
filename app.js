let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;
let win = false;
// console.log(boxes);

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const  resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    win = false;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0)
        {
            box.innerText = "O";
            box.style.color = "black";
            turn0 = false;
        }
        else
        {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        console.log(count);
        checkWinner();
    });
});


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () => {
    msg.innerText = `Match is draw!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                win = true;
                showWinner(pos1Val);
            }
            else if(count === 9 && win === false)
            {
                showDraw();
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);