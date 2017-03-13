//Gets the size the the user drags on the slide bar for the pyramid height.
var heightElem = document.getElementById("height");

var formElem = document.getElementById("draw-form");
//funtion used to call the function that draw the pyramid
formElem.oninput = function(event) {

    event.preventDefault();
    height = heightElem.value;
    drawPyramid(height);
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    //Use selectedSymbol that user chose to build pyramid
    var select = document.getElementById("selectedSymbol");
    var selectedChar = select.options[select.selectedIndex].value;

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += selectedChar;
            //rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
