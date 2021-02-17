function addBoard(width, height)
{
    let documentMain = document.querySelector("body");
    let newBoardTable = document.createElement('table');
    documentMain.append(newBoardTable);
    for(let i=0; i<height; i++)
    {
        let newBoardRow = newBoardTable.insertRow();
        newBoardRow.id = "row_" + i;
        for(let j=0; j<width; j++)
        {
            let newBoardCell = newBoardRow.insertCell();
            newBoardCell.id = "cell_" + (j+i*width)
        }
    }

}
addBoard(20, 10);
