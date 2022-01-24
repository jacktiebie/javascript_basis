//getting the id #block and putting it in a variable called block
var block = document.querySelector("#block")

//asking question using prompt and putting the answer in var answer
var answer = prompt("Which color do you prefer?");

//changing background color using the variable block
block
.style
.backgroundColor = "yellow";

//changing background color with a prompt question
block.style.backgroundColor = answer;

//changing font-family using the variable block
block
.style
.fontFamily = "Comic Sans MS";

//changing margin using the variable block
block
.style
.margin = "15px";

//changing text using the var block
block.innerHTML = "Dit is tekst!";


