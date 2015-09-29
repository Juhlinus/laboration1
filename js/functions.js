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
function guessingGame() {

	var rand = Math.floor(Math.random() * (100 - 0 + 1) + 0);

	console.log(rand);

	var userInput;

	var tries = 0;

	do 
	{
		userInput = prompt("Guess a number between 1-100");

		if (userInput > rand)
			alert("Your guess " + userInput + " was too high.");
		else if (userInput < rand)
			alert("Your guess " + userInput + " was too low");

		tries += 1;

	} while (userInput.toString() !== rand.toString());

	alert("Congratufuckinglations, it took you " + (tries === 1 ? (tries + " try") : (tries + " tries")) + " and the secret number was " + rand + ".");
}

/*
 *	Uppgift 4
 */
var isLooping = true;

while (isLooping)
{
	var userInput = prompt("0. Exit\n\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess number");

	switch (userInput)
	{
		case '0':
			isLooping = false;
			break;

		case '1':
			var fahrenheit = prompt("Input fahrenheit you want to convert to celsius.");
			var result = fahrenheitToCelsius(fahrenheit);
			alert(fahrenheit + " fahrenheit converted to celsius is " + result);
			break;

		case '2':
			var celsius = prompt("Input celsius you want to convert to fahrenheit.");
			var result = celsiusToFarenheit(celsius);
			alert(celsius + " celsius converted to fahrenheit is " + result);
			break;

		case '3':
			guessingGame();
			break;
	}
}

function fahrenheitToCelsius (fahrenheit) {
	return Math.round((fahrenheit - 32) * 5 / 9);
}

function celsiusToFarenheit (celsius) {
	return Math.round(celsius * 9 / 5 + 32);
}

/*
 *	Uppgift 5
 */
function konvertera(stringConversion) {

	var newString = '';

	for (var i = 0; i < stringConversion.length; i++)
	{
		if (stringConversion[i].toUpperCase() === 'A')
		{
			newString += '#';
		}
		else if (stringConversion[i].toLowerCase() === stringConversion[i])
		{
			newString += stringConversion[i].toUpperCase();
		}
		else
		{
			newString += stringConversion[i].toLowerCase();
		}
	}

	return newString;
}

var stringConversion = prompt("Test the function");

var resultat = konvertera(stringConversion);

alert("Input: " + stringConversion + ", Result: " + resultat);

/*
 *	Uppgift 6
 */
function triangel(a, b)
{
	
}