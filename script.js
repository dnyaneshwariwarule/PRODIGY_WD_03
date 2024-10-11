let btnRef = document.querySelectorAll(".btn");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.querySelector(".new-game");
let resetBtn = document.querySelector(".reset");

let msgRef = document.querySelector(".message");

let winningPattern = [ 
    [0, 1, 2], 
    [0, 3, 6],
    [2, 5, 8], 
    [6, 7, 8],
    [3, 4, 5], 
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let turnO = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true)); 
    popupRef.classList.remove("hide");
};

const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerText = "";
        element.disabled = false; 
    });
    popupRef.classList.add("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' wins";
    }
};

const drawnFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F50E; <br> It's a Draw";
};

newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerHTML,
            btnRef[i[1]].innerHTML,
            btnRef[i[2]].innerHTML,
        ];

        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
};

btnRef.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true; 
        count += 1;

        if (count === 9) {
            drawnFunction();
        }

        winChecker();
    });
});

window.onload = enableButtons;
