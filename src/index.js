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

function checkMove(index, value) {
    /*console.log(children[0].children[0].innerHTML)
    console.log(children[1].children[0].innerHTML)
    console.log(children[2].children[0].innerHTML)
    console.log(children[index].children[0].innerHTML)*/
    const children = board.children
    //Check Row
    if(index >= 0 && index <= 2) {
        if(children[0].children[0].innerHTML === children[1].children[0].innerHTML && 
            children[1].children[0].innerHTML === children[2].children[0].innerHTML && 
            children[2].children[0].innerHTML === children[index].children[0].innerHTML) {
                alert(`Ganó el jugador ${currentPlayer}`)
                isGameStarted = false
        }
    }else if(index >= 3 && index <= 5) {
        if(children[3].children[0].innerHTML === children[4].children[0].innerHTML && 
            children[4].children[0].innerHTML === children[5].children[0].innerHTML && 
            children[5].children[0].innerHTML === children[index].children[0].innerHTML) {
                alert(`Ganó el jugador ${currentPlayer}`)
                isGameStarted = false
        }
    }else {
        if(children[6].children[0].innerHTML === children[7].children[0].innerHTML && 
            children[7].children[0].innerHTML === children[8].children[0].innerHTML && 
            children[8].children[0].innerHTML === children[index].children[0].innerHTML) {
                alert(`Ganó el jugador ${currentPlayer}`)
                isGameStarted = false
        }
    }
}

function playerClick(cell, index) {
    let value = cell.children[0].innerHTML
    if(isGameStarted && value === "") {
        movesPlayed++
        if(currentPlayer === 1) {
            cell.children[0].innerHTML = 'X'
            checkMove(index, "X")
            currentPlayer++ 
        }else {
            cell.children[0].innerHTML = 'O'
            checkMove(index, "X")
            currentPlayer--
        }

        if(movesPlayed === 9) {
            alert("Empate")
            isGameStarted = false
        }
    }
}

function setEventListeners(board) {
    for(let i = 0;i < board.children.length;i++) {
        let cell = board.children[i]
        cell.addEventListener('click', function() {
            playerClick(this, i)
        })
    }
    restartButton.addEventListener('click', function() {
        restartGame()
    })
}

setEventListeners(board)