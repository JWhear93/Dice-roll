// This script version is NOT using a function.

window.console = {
  log: function(str){
	var node = document.createElement("div");
	node.appendChild(document.createTextNode(str));
	document.getElementById("myLog").appendChild(node);
  }
}

alert("Roll the dice!");

var diceRoll = Math.random();
if (diceRoll<=0.165) {
	diceRoll = 1;
} else if (diceRoll<=0.33) {
	diceRoll = 2;
} else if (diceRoll<=0.495) {
	diceRoll = 3;
} else if (diceRoll<=0.66) {
	diceRoll = 4;
} else if (diceRoll<=0.825) {
	diceRoll = 5;
} else {
	diceRoll = 6;
}


console.log("You rolled a: " + diceRoll + " Dealing " + (diceRoll*2) + " Damage!");

if (diceRoll>3) {
	console.log("You killed the beast!");
} else if (diceRoll<=3) {
	console.log("You weren't strong enough R.I.P");
}