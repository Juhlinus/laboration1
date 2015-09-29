/*
 *	Uppgift 2.1
 */
var helloWorld = function() {
	console.log("Hello World");
};

var rows = function() {
	 alert('Rad 1\nRad 2');
};

function medelTal(num1, num2, num3, num4) {
	return (num1 + num2 + num3 + num4) / 4;
}

console.log(medelTal(42, 22, 13, 54));

/*
 *	Uppgift 2.2
 */
function skrivUt() {

	var output = '';

	for (var i = 0; i < arguments.length; i++)
	{
		if (i === (arguments.length - 1))
			output += arguments[i] + '.';
		else
			output += arguments[i] + ', ';
	}

	return output;
}

console.log(skrivUt("test", "testwoo", "testiiiee"));

/*
 *	Uppgift 3.1
 */
var rand = Math.floor(Math.random() * (100 - 0 + 1) + 0);

var input = prompt("Guess a number, I'm think of a number between 1 and 100");

var winning = false;

if ((input - 0) === (rand - 0))
	winning = true;
else
{
	var incrementer = 0;

	while (input !== rand) 
	{
		if (input < rand)
			alert(input + " is not the correct number. My number is higher.");
		else
			alert(input + " is not the correct number. My number is lower.");

		input = prompt("Guess my number.");

		incrementer += 1;

		if ((input - 0) === (rand - 0))
		{
			winning = true;
			break;
		}
		else if (incrementer === 4)
			break;
	}
}

if (winning)
	alert("Congratufuckinglations");
else
	alert("Sorry, bro. The number was " + rand);

/*
 *	Uppgift 4.1
 */