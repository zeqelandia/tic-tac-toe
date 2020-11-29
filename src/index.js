const board = document.getElementById("board")
const restartButton = document.getElementById("btnRestart")
let currentPlayer = 1
let movesPlayed = 0
let isGameStarted = true

function setCells(board) {
    const cellQuantity = 9
    const cellContent = `
        <div class="main__cell">
            <p class= "main__cell--text"></p>
        </div>
    `

    let aux = ''
    for(let i = 1;i <= cellQuantity;i++) {
        aux += cellContent
    }
    
    board.innerHTML = aux
}

setCells(board)

function restartGame() {
    for(cell of board.children) {
        cell.children[0].innerHTML = ""
    }
    movesPlayed = 0
    currentPlayer = 1
    isGameStarted = true
}

function playerClick(cell) {
    let value = cell.children[0].innerHTML
    if(isGameStarted && value === "") {
        movesPlayed++
        if(currentPlayer === 1) {
            currentPlayer++ 
            cell.children[0].innerHTML = 'X'
        }else {
            currentPlayer--
            cell.children[0].innerHTML = 'O'
        }

        if(movesPlayed === 9) {
            alert("Empate")
            isGameStarted = false
        }
    }
}

function setEventListeners(board) {
    for(cell of board.children) {
        cell.addEventListener('click', function() {
            playerClick(this)
        })
    }
    restartButton.addEventListener('click', function() {
        restartGame()
    })
}

setEventListeners(board)