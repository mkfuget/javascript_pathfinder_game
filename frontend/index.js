function addBoard(width, height)
{
    let documentMain = document.querySelector("body");
    let newBoardTable = document.createElement('table');
    documentMain.append(newBoardTable);
    for(let i=0; i<height; i++)
    {
        let newBoardRow = newBoardTable.insertRow();
        newBoardRow.id = "row_"+i;
        for(let j=0; j<width; j++)
        {
            let newBoardCell = newBoardRow.insertCell();
            newBoardCell.id = "cell_"+(j+i*width);
            newBoardCell.onclick = function(){ flashCell(j+i*width, "red") }
        }
    }

}
addBoard(20, 10);
function flashCell(cellIndex, color)
{
    let deltaOpacity = 0.1;
    let opacity = 0;
    let cell = document.getElementById("cell_"+cellIndex)
    cell.style.backgroundColor = color;
    let timer = window.setInterval(function() {
        cell.style.opacity = opacity
        opacity += deltaOpacity;
        if(opacity > 0.7){
            deltaOpacity*=-1;
        }
        if(opacity < 0){
            window.clearInterval(timer);
        }

    },100)
    cell.style.opacity = 0

}

flashCell(0, "red")