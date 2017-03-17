// This script version uses a function.

window.console = {
  log: function(str){
	var node = document.createElement("div");
	node.appendChild(document.createTextNode(str));
	document.getElementById("myLog").appendChild(node);
  }
}

alert("Roll the dice!");

var diceResult = Math.random();

var diceRoll = function () {	
	if (diceResult<=0.165) {
		diceResult = 1;
	} else if (diceResult<=0.33) {
		diceResult = 2;
	} else if (diceResult<=0.495) {
		diceResult = 3;
	} else if (diceResult<=0.66) {
		diceResult = 4;
	} else if (diceResult<=0.825) {
		diceResult = 5;
	} else {
		diceResult = 6;
	}
	return diceResult;
};

diceRoll();

var dealtDamage = diceResult*2;

console.log("You rolled a: " + diceResult + " Dealing " + dealtDamage + " Damage!");

if (diceResult>3) {
	console.log("You killed the Beast!");
} else if (diceResult<=3) {
	console.log("You weren't strong enough R.I.P");
}

