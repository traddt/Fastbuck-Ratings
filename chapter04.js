var currColor = "#ffffff";

function buttHover(id) {
	var currVal = parseInt(document.getElementById((20 + id).toString()).innerHTML);
	document.getElementById((20 + id).toString()).innerHTML = currVal + 1;
}

function bgChange(id) {
	var currVal = parseInt(document.getElementById((10 + id).toString()).innerHTML);
	document.getElementById((10 + id).toString()).innerHTML = currVal + 1;
}

function setup() {
	document.getElementById("br").addEventListener("mousemove", buttHover(0));
	document.getElementById("bg").addEventListener("mousemove", buttHover(1));
	document.getElementById("bb").addEventListener("mousemove", buttHover(2));
}

function changeColor(col, id) {
	if (col != currColor) {
		currColor = col;
		document.body.style.backgroundColor = col;
		bgChange(id);
	}
}