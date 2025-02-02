let turn = "X"
let isgameover = false

// change turn

const changeturn = () => {
    if (turn === "X") {
        return "O"
    } else {
        return "X"
    }
}

// check win

const wincondition = () => {
    let text = document.getElementsByClassName("box")
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach((e) => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText && text[e[0]].innerText !== '')) {
            document.getElementsByClassName("winner")[0].innerText = text[e[0]].innerText + " has won the game"
            isgameover = true
        }
    })
}

// game logic

let boxes = document.getElementsByClassName("box")
const a = Array.from(boxes)
a.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerText === '' && !isgameover) {
            element.innerText = turn
            wincondition()
            if (!isgameover) {
                turn = changeturn()
            }
        }
    })
})

// New game

let n = document.getElementsByClassName("new")[0]
n.addEventListener("click", () => {
    let boxes = document.getElementsByClassName("box")
    const a = Array.from(boxes)
    a.forEach((element) => {
        element.innerText = ""
    })
    turn = "X"
    isgameover=false
    document.getElementsByClassName("winner")[0].innerText = ""
})