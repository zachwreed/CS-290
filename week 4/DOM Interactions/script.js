/*****************************
** Author: Zach Reed
** Date:   7/22/2018
** Description: DOM interactions
********************************/

make();
var curr = document.getElementsByTagName("td")[0];
curr.id = "this";
curr.style.borderWidth = "3px";
	
document.getElementById("mark cell").addEventListener("click", markCell);
document.getElementById("left").addEventListener("click", leftMove);
document.getElementById("right").addEventListener("click", rightMove);
document.getElementById("up").addEventListener("click", upMove);
document.getElementById("down").addEventListener("click", downMove);

function make () {
	var body = document.getElementsByTagName("body")[0];
	var tbl = document.createElement("table");
	var tbl_body = document.createElement("tbody");

	var row = document.createElement("tr");

	// Create Header Row
	for (let j = 0; j < 4; j++)
		{
			var hCell = document.createElement("th")
			var hCell_Text = document.createTextNode("Header " + (j + 1));
			hCell.appendChild(hCell_Text);
			row.appendChild(hCell);
		}
	tbl_body.appendChild(row);

	// Create Traversable Row 
	var j = 1;
	console.log("line 26");
	for (let i = 0; i < 4; i++)
	{
		var row = document.createElement("tr");
	
		for (let j = 0; j < 4; j++)
		{
			var cell = document.createElement("td")
			var cell_Text = document.createTextNode("(" + (i + 1) + " , " + (j + 1) + ")");
			cell.appendChild(cell_Text);
			row.appendChild(cell);
		}
		tbl_body.appendChild(row);
	}
	tbl.appendChild(tbl_body);
	body.appendChild(tbl);
	tbl.setAttribute("border", "2");

	// Add Buttons --------------------------------------

	var leftBTN = document.createElement("Button");
	var leftBTN_text = document.createTextNode("Left ");
	leftBTN.id = "left";
	leftBTN.appendChild(leftBTN_text);
	document.body.appendChild(leftBTN);

	var rightBTN = document.createElement("Button");
	rightBTN.id = "right";
	var rightBTN_text = document.createTextNode("Right");
	rightBTN.appendChild(rightBTN_text);
	document.body.appendChild(rightBTN);

	var upBTN = document.createElement("Button");
	var upBTN_text = document.createTextNode("Up   ");
	upBTN.id = "up";
	upBTN.appendChild(upBTN_text);
	document.body.appendChild(upBTN);

	var downBTN = document.createElement("Button");
	var downBTN_text = document.createTextNode("Down ");
	downBTN.id = "down";
	downBTN.appendChild(downBTN_text);
	document.body.appendChild(downBTN);

	var markCellBTN = document.createElement("Button");
	var markCellBTN_text = document.createTextNode("Mark Cell");
	markCellBTN.id = "mark cell";
	markCellBTN.appendChild(markCellBTN_text);
	document.body.appendChild(markCellBTN);
}

function markCell()
{
	curr = document.getElementById("this");
	curr.style.backgroundColor = "#f7f771";
}

function leftMove()
{
	curr = document.getElementById("this");
	
	if (curr.cellIndex > 0)
	{
		var temp_idx = curr.cellIndex;
		curr.removeAttribute("id");
		curr.style.borderWidth = "1.5px";
		curr = curr.previousElementSibling;
		curr.id = "this";
		curr.style.borderWidth = "3px";
	}
	
	else
	{
		return;
	}
}

function rightMove()
{
	curr = document.getElementById("this");
	
	if (curr.cellIndex < 3)
	{
		var temp_idx = curr.cellIndex;
		curr.style.borderWidth = "1.5px";
		curr.removeAttribute("id");
		curr = curr.nextElementSibling;
		curr.id = "this";
		curr.style.borderWidth = "3px";
		
	}
	
	else
	{
		return;
	}
}

function upMove ()
{
	curr = document.getElementById("this");
	
	if (curr.parentNode.rowIndex > 1)
	{
		var temp_idx = curr.cellIndex;
		curr.style.borderWidth = "1.5px";
		curr.removeAttribute("id");
		curr = curr.parentNode;
		curr = curr.previousElementSibling;
		curr = curr.firstElementChild;
		
		for (let j = 0; j < temp_idx; j++)
		{
			curr = curr.nextElementSibling;
		}
		
		curr.id = "this";
		curr.style.borderWidth = "3px";
	}
	else {
		return;
	}
}

function downMove ()
{

	curr = document.getElementById("this");
	
	if (curr.parentNode.rowIndex <= 3)
	{
		var temp_idx = curr.cellIndex;
		curr.style.borderWidth = "1.5px";
		curr.removeAttribute("id");
		curr = curr.parentNode;
		curr = curr.nextElementSibling;
		curr = curr.firstElementChild;
		
		for (let j = 0; j < temp_idx; j++)
		{
			curr = curr.nextElementSibling;
		}
		
		curr.id = "this";
		curr.style.borderWidth = "3px";
	}
	
	else {
		return;
	}

}




	
	
	
	
	
	
	
	