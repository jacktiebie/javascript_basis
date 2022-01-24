//getting the id #block and putting it in a variable called block
var block = document.querySelector("#block")

//asking question using prompt
var answer = prompt("Which color is the background of the text");
//right backgroundColor of text
var trueColor = "yellow";

//changing text to true else false
if (answer == trueColor) {
block.innerHTML = "True";
}
else {
block.innerHTML = "False";
}

//changing background color using the variable block
block
.style
.backgroundColor = "yellow";

//changing font-family using the variable block
block
.style
.fontFamily = "Comic Sans MS";

//changing margin using the variable block
block
.style
.margin = "15px";


