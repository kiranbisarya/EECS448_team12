let currPlayer = 0;
let turn = 0;
let board = [[]];
let cols = 6;
let rows = 7;
for(let i=0; i<rows; i++)
{
    for(let j=0; j<cols; j++)
    {
        board[i][j]=0;
    }
}

if(!gameOver(chosenRow, chosenCol))
{
    if(validChoice(chosenRow, chosenCol))
    {
        dropChip(chosenRow, chosenCol);
        currPlayer++;
    }
    else
    {
        document.querySelector("#msg").innerText = "Invalid placement, try again";
    }
}

dropChip(chosenRow, chosenCol)
{
    board[chosenRow][chosenCol] = 1;
}

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

if(gameOver(chosenRow, chosenCol))
{

}
else
{
    turn++;
    if(currPlayer%2==0)
    {
        document.querySelector("#msg").innerText = "There is still no winner. Next up is player 1 for turn number " + turn;
    }
    else
    {
        document.querySelector("#msg").innerText = "There is still no winner. Next up is player 1 for turn number " + turn;
    }
}