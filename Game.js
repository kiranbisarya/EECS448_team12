

/**
	* @description Manages the boards and user interaction during gameplay (chip drop placement and turn switching)
	* @param rows {number} The number of rows the boards have
	* @param cols {number} The number of columns the boards have
	* @param turn {number} The turns indicate which player will play
	**/

    let currPlayer = 0;
    let turn = 0;
    let board = [[]];
    let cols = 6;
    let rows = 7;

    /**
	* @description Sets up the board and places chips may drop
    **/
    
    for(let i=0; i<rows; i++)
    {
        for(let j=0; j<cols; j++)
        {
            board[i][j]=0;
        }
    }

     /**
	* @description Determines player turn IF the game is not over
    **/

    if(!gameOver(chosenRow, chosenCol))
    {
        if(validChoice(chosenRow, chosenCol))
        {
            dropChip(chosenRow, chosenCol);
            currPlayer++;
            turn++;
        }
        else
        {
            document.querySelector("#msg").innerText = "Invalid placement, try again player " + currPlayer;
        }
    }

    /**
	* @description Chip placement
    **/

    dropChip(chosenRow, chosenCol)
    {
        board[chosenRow][chosenCol] = 1;
    }

    /**
	* @description Verify that chip placement is valid via bounds checking
    **/
   
    validChoice(chosenRow, chosenCol)
    {
        if(chosenRow>=0 && chosenRow<7 && chosenRow>=0 && chosenRow<6 && board[chosenRow][chosenCol]==0)
        {
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

    if(gameOver(chosenRow, chosenCol))
    {

    }

    else
    {
        if(currPlayer%2==0)
        {
            document.querySelector("#msg").innerText = "Next up is player 1 for turn number " + turn;
        }
        else
        {
            document.querySelector("#msg").innerText = "Next up is player 2 for turn number " + turn;
        }
    }
