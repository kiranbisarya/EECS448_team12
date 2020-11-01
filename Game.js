

/**
	* @description Manages the boards and user interaction during gameplay (chip drop placement and turn switching)
	* @param rows {number} The number of rows the boards have
	* @param cols {number} The number of columns the boards have
	* @param turn {number} The turns indicate which player will play
	**/

    let currPlayer = 1; //1 for red chip player, 2 for yellow chip player
    let turn = 1;
    let board = [
        [0, 0, 0, 0, 0, 0, 0], // 0 0 0 0 0 0 0 0
        [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
        [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
        [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
        [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
        [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
      ];
    //let cols = 7;
    //let rows = 6;
    let gameActive = true;

     /**
	* @description Determines player turn IF the game is not over
    **/
//    function updateVals()
//    {
//         if(!gameOver())
//         {
//             if(gameActive==true)
//             {
//                 // currPlayer++;
//                 turn++;
//             }
//             else
//             {
//                 document.querySelector("#msg").innerText = "Invalid placement, try again player " + currPlayer;
//             }
//         }
//     }   

    /**
	* @description Chip placement
    **/
    function dropChip(chosenCol)
    {
        //let chosenRow=0;
        //board[chosenRow][chosenCol] = 1;

        if(gameActive == true)
        {
            if (currPlayer == 1)
            {
                 for(let row = 5; row >= 0; row --)
                 {
                    if(board[row][chosenCol] == 0) 
                    {
                        board[row][chosenCol] = 1;
                        break;
                    }
                 }

                currPlayer = 2;
                turn++;
                document.getElementById("colorTurn").innerHTML="Red Turn";
                
            }
            else 
            {
                 for(let row = 5; row >= 0; row --)
                 {
                    if(board[row][chosenCol] == 0) 
                    {
                        board[row][chosenCol] = 2;
                        break;
                    }
                 }

                currPlayer = 1;
                turn++;
                document.getElementById("colorTurn").innerHTML="Yellow Turn";
            }
            updateBoard();
            endTurn();
        }
    }


    /**
	* @description Updates board with corresponding chip color
    **/
   
    function updateBoard()
    {
        if(gameActive == true)
        {
            for (let row = 0; row < 6; row++) 
            {
                for (let col = 0; col < 7; col++) 
                {
                    if (board[row][col]==0) 
                    {
                        document.getElementById("slot"+row+col).style.backgroundColor="#FFFFFF";
                    } 
                    else if (board[row][col]==1) //1 for yellow
                    { 
                        document.getElementById("slot"+row+col).style.backgroundColor="#FFFF00";  
                    } 
                    else if (board[row][col]==2) //2 for red
                    { 
                        document.getElementById("slot"+row+col).style.backgroundColor="#FF0000"; 
                    }
                }
            }
        }
    }

    /**
	* @description Checks if a player has a horizontal win and returns the player that won (1 or 2)
    **/

    function checkForHorzWin()
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 7; col ++) 
            {
                for (let row = 0; row < 6; row ++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row][col+1] == i) && (board[row][col+2] == i) && (board[row][col+3] == i)) 
                        {
                            return i;
                        }
                    }
                }
            }
        }
    }


    /**
	* @description Checks if a player has a vertical win and returns the player that won (1 or 2)
    **/

    function checkForVertWin() 
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 7; col++) 
            {
                for (let row = 0; row < 6; row++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row+1][col] == i) && (board[row+2][col] == i) && (board[row+3][col] == i)) 
                        {
                            return i;
                        }
                    }
                }
            }
        }
    }

    
    /**
	* @description Checks if a player has a diagonal left to right win and returns the player that won (1 or 2)
    **/    

    function checkForDiagnol_LtR_Win() 
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 7; col++) 
            {
                for (let row = 0; row < 6; row++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row-1][col+1] == i) && (board[row-2][col+2] == i) && (board[row-3][col+3] == i)) 
                        {
                            return i;
                        }
                    }
                }
            }
        }
    }
    
    /**
	* @description Checks if a player has a diagonal right to left win and returns the player that won (1 or 2)
    **/  
    function checkForDiagnol_RtL_Win() 
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 7; col++) 
            {
                for (let row = 0; row < 6; row++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row+1][col+1] == i) && (board[row+2][col+2] == i) && (board[row+3][col+3] == i)) 
                        {
                            return i;
                        }   
                    }
                }
            }
        }
    }

    /**
	* @description Verify that chip placement is valid via bounds checking
    **/
   
   /* function validChoice(chosenRow, chosenCol)
    {
        if(chosenCol>=0 && chosenCol<7 && board[chosenRow][chosenCol]==0 && (chosenRow==0 || board[chosenRow-1][chosenCol]!=0))
        {
            return true;
        }
        else
        {
            return false;
        }
    }*/

    /**
	* @description Checks for a win which determines if game is over then returns true or false
    **/
   function gameOver()
   {
        if(checkForHorzWin()==1 || checkForHorzWin()==2 || checkForVertWin()==1 || checkForVertWin()==2 || checkForDiagnol_LtR_Win()==1 || checkForDiagnol_LtR_Win()==2 || 
        checkForDiagnol_RtL_Win()==1 || checkForDiagnol_RtL_Win()==2)
        {
            gameActive = false;
            return true;
        }
        else
        {
            return false;
        }
   }

     /**
	* @description If the game is over, then determine who is the winner and who is the loser
    **/
   function endTurn()
   {
    document.getElementById("msg").innerHTML="Time for turn number " + turn + " with player " + currPlayer;
    if(gameOver())
    {
        if(currPlayer==2)
        {
            document.getElementById("msg").innerHTML="Congratulations! Player 2 has won on turn number " + turn;
        }
        else
        {
            document.getElementById("msg").innerHTML="Congratulations! Player 1 has won on turn number " + turn;
        }
    }
    else
    {
        if(currPlayer==2)
        {
            document.getElementById("msg").innerHTML="Next up is player 2 for turn number " + turn;
        }
        else
        {
            document.getElementById("msg").innerHTML="Next up is player 1 for turn number " + turn;
        }
    }
   }

