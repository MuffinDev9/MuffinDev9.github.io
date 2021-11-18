// First Text(The Text With The Buttons)

// Changes Text
function changeText() {
	document.getElementById("textChange").innerHTML = "Now Click The Other One."
	document.getElementById("1st").innerHTML = "Then Click Me!"
	document.getElementById("2nd").innerHTML = "Click Me!"
	console.log("You Pressed The Button.")
}

// Changes Text Back
function changeBack() {
	document.getElementById("textChange").innerHTML = "Click The Button."
	document.getElementById("1st").innerHTML = "Click Me!"
	document.getElementById("2nd").innerHTML = "Then Click Me!"
	console.log("You Pressed The Other Button.")
}