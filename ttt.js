const gameBoard = (() => {
    //game variables
    let board = [[1,2,3],[4,5,6],[7,8,9]];
    let xGoesFirst
    let lastClicked
    let drawCounter = 0
    //first player info
    let firstPlayerName 
    let playerOneDisplay = document.getElementById('playerOneDisplay')
    let playerOneScore = 0
    //second player info
    let secondPlayerName 
    let playerTwoDisplay = document.getElementById('playerTwoDisplay')
    let playerTwoScore = 0
    let firstMarker = document.getElementsByName('x_or_o')
    //end screen info
    let restartBtn = document.getElementById('restartBtn')
    let restartScreen = document.getElementById('restartScreen')
    let endMessage = document.getElementById('winningText')
    let newPlayer = document.getElementById('newInfo')

    let startScreen = () => {
        let form = document.getElementById('form')
        form.addEventListener('submit', createPlayer)
    }  

    let createPlayer = (e) => {
        let firstPlayer = document.querySelector('#firstPlayer').value
        firstPlayerName = firstPlayer
        let secondPlayer = document.querySelector('#secondPlayer').value
        secondPlayerName = secondPlayer
        e.preventDefault()
        let startMenu = document.getElementById('modal')
        startMenu.style.display = 'none'
        if(firstMarker[0].checked == true) {
            xGoesFirst = true
            enablePieces()
        } else if(firstMarker[1].checked == true){
            xGoesFirst = false
            enablePieces()
        }
        playerOneDisplay.textContent=`${firstPlayer} score: ${playerOneScore}`
        playerTwoDisplay.textContent=`${secondPlayer} score: ${playerTwoScore}`
    }   

    let enablePieces = () => {
        gamePieces = document.querySelectorAll(".boardSquare")
        for(i=0; i<gamePieces.length; i++){
            gamePieces[i].addEventListener('click', createMarks)
        }
    }

    let createMarks = (e) => {
        if (xGoesFirst == true){
            if(e.target.textContent == false){
                e.target.textContent = 'X';
                lastClicked = 'X'
                setArray(e.target.id)
                xGoesFirst = false;
                drawCounter++
               winCheck()
               
            } 
        } else {
            if(e.target.textContent == false){
                e.target.textContent = 'O' 
                lastClicked = 'O'
                setArray(e.target.id)
                xGoesFirst = true
                drawCounter++
                winCheck()
            }
        }
    }

    let setArray = (x) => {
        switch(x){
            case '0': 
                if(xGoesFirst == true){
                board[0][0] = 'X'
                } else{
                board[0][0] = 'O'    
                }
                break;
            case '1': 
                if(xGoesFirst == true){
                board[0][1] = 'X'
                } else{
                board[0][1] = 'O'    
                }
                break;
            case '2': 
                if(xGoesFirst == true){
                board[0][2] = 'X'
                } else{
                board[0][2] = 'O'    
                }
                break;
            case '3': 
                if(xGoesFirst == true){
                board[1][0] = 'X'
                } else{
                board[1][0] = 'O'    
                }
                break;
            case '4': 
                if(xGoesFirst == true){
                board[1][1] = 'X'
                } else{
                board[1][1] = 'O'    
                }
                break;
            case '5': 
                if(xGoesFirst == true){
                board[1][2] = 'X'
                } else{
                board[1][2] = 'O'    
                }
                break;
            case '6': 
                if(xGoesFirst == true){
                board[2][0] = 'X'
                } else{
                board[2][0] = 'O'    
                }
                break;
            case '7': 
                if(xGoesFirst == true){
                board[2][1] = 'X'
                } else{
                board[2][1] = 'O'    
                }
                break;
            case '8': 
                if(xGoesFirst == true){
                board[2][2] = 'X'
                } else{
                board[2][2] = 'O'    
                }
                break;
        }
        
    }

    let winCheck = () => {
        function horizonalCheck() {
            for(i=0;i<board.length;i++){
                if((board[i][0] === board[i][1] && board[i][1] === board[i][2])){
                   if(firstMarker[0].checked == true && lastClicked == 'X') {
                        playerOneScore++
                        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
                    } else if(firstMarker[1].checked == true && lastClicked == 'O') {
                        playerOneScore++
                        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
                    } else {
                        playerTwoScore++
                        playerTwoDisplay.textContent=`${secondPlayerName} score: ${playerTwoScore}`
                    }
                    endGame()
                }
            }
        } 
        function verticalCheck(){
            for(i=0; i < board.length; i++){
                if((board[0][i] == 'X' && board[1][i] == 'X' && board[2][i] == 'X') || (board[0][i] == 'O' && board[1][i] == 'O' && board[2][i] == 'O')){
                    if(firstMarker[0].checked == true && lastClicked == 'X') {
                        playerOneScore++
                        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
                    } else if(firstMarker[1].checked == true && lastClicked == 'O') {
                        playerOneScore++
                        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
                    } else {
                        playerTwoScore++
                        playerTwoDisplay.textContent=`${secondPlayerName} score: ${playerTwoScore}`
                    }
                   endGame()
                }
            }
        }
        function diagonalCheck(){
                if((board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') || (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') || (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') || (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')){
                    if(firstMarker[0].checked == true && lastClicked == 'X') {
                        playerOneScore++
                        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
                    } else if(firstMarker[1].checked == true && lastClicked == 'O') {
                        playerOneScore++
                        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
                    } else {
                        playerTwoScore++
                        playerTwoDisplay.textContent=`${secondPlayerName} score: ${playerTwoScore}`
                    }
                   endGame()
                }
        }
        function draw(){
           if(drawCounter == 9){
                alert('It\'s a draw!')
                endGame()
           }
        }
        horizonalCheck()
        verticalCheck()
        diagonalCheck()
        draw()
    }

    let endGame = () => {
        drawCounter = 0
        for(i=0; i<gamePieces.length; i++){
            gamePieces[i].textContent = ''
            }
            board = [[1,2,3],[4,5,6],[7,8,9]];
        if(playerOneScore == 3){
            playerOneScore = 0
            playerTwoScore = 0
            restartScreen.style.display = 'flex'
            endMessage.textContent = `Congratulations ${firstPlayerName}! you are much better than ${secondPlayerName} :)`
            restartBtn.addEventListener('click', restart)
            newPlayer.addEventListener('click', newSelection)
        } else if(playerTwoScore == 3){
            playerOneScore = 0
            playerTwoScore = 0
            playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
            playerTwoDisplay.textContent=`${secondPlayerName} score: ${playerTwoScore}`
        }

    }

    let restart = () => {
        restartScreen.style.display = 'none'
        playerOneDisplay.textContent=`${firstPlayerName} score: ${playerOneScore}`
        playerTwoDisplay.textContent=`${secondPlayerName} score: ${playerTwoScore}`
    }

    let newSelection = () =>{
        restartScreen.style.display = 'none'
         let startMenuTwo = document.getElementById('modal')
         startMenuTwo.style.display = 'flex'
    }
    startScreen()
})()
