let player = 0;
let turn = 0;
let board = [[]];
let cols = 6;
let rows = 7;
for(let i=0; i<rows; i++)
{
    for(let j=0; j<cols; j++)
    {
        board[i][j] = 0;
    }
}

if(gameOver())
{

}
else
{
    turn++;
    if(player%2==0)
    {
        document.querySelector("#msg").innerText = "There is still no winner. Next up is player 1 for turn number " + turn;
    }
    else
    {
        document.querySelector("#msg").innerText = "There is still no winner. Next up is player 1 for turn number " + turn;
    }
}