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
	var userInput = prompt("0. Exit\n\n1. Uppgift 1 & 2\n2. Fahrenheit to Celsius\n3. Celsius to Fahrenheit\n4. Guess number\n5. Convert string\n6. Calculate the hypotenuse\n7. Tentamen\n8. When is my birthday!?\n9. Table generating");

	switch (userInput)
	{
		case '0':
			isLooping = false;
			break;

		case '1':
			helloWorld();
			rows();
			break;

		case '2':
			var fahrenheit = prompt("Input fahrenheit you want to convert to celsius.");
			var result = fahrenheitToCelsius(fahrenheit);
			alert(fahrenheit + " fahrenheit converted to celsius is " + result);
			break;

		case '3':
			var celsius = prompt("Input celsius you want to convert to fahrenheit.");
			var result = celsiusToFarenheit(celsius);
			alert(celsius + " celsius converted to fahrenheit is " + result);
			break;

		case '4':
			guessingGame();
			break;

		case '5':
			var stringConversion = prompt("Input the string you wish to convert.");
			var resultat = konvertera(stringConversion);
			
			alert("Input: " + stringConversion + ", Result: " + resultat);

			break;

		case '6':
			var inputA = prompt("Length of A");
			var inputB = prompt("Length of B");

			var result = triangel(inputA, inputB);

			alert("The result is " + result);
			break;

		case '7':
			var myArray = [10, 2, 89, 9, 65, 13, 3];
			var resultat = tentamen(myArray);
			
			for (var i = 0; i < resultat.length; i++) 
			{
				console.log(resultat[i])
			}
			break;

		case '8':
			var myBirthmonth = prompt("Which month, please.");
			var myBirthday = prompt("Which day, please.");
			var result = birthday(myBirthmonth, myBirthday);
			
			alert("Your birthday is in " + result + " days.");
			
			break;

		case '9':
			startWriting();
			break;

		default:
			alert("That's not an option, solider!");
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

/*
 *	Uppgift 6
 */
function triangel(a, b)
{
	a = Math.pow(a, 2);
	b = Math.pow(b, 2);

	return Math.round(Math.sqrt(a + b));
}

/*
 *	Uppgift 7
 */
function tentamen(myArray) {

	if (myArray instanceof Array) {

		var medelTal = 0;

		for (var i = 0; i < myArray.length; i++) 
			medelTal += myArray[i];

		var middle = Math.round(medelTal / myArray.length);

		var tempArray = myArray.sort(function(a, b) {
			return a - b;
		});

		var min = tempArray[0];
		var max = tempArray[tempArray.length - 1];

		var newArray = [middle, max, min];

		return newArray;
	}
}

/*
 *	Uppgift 8
 */
function birthday(month, day) {
	
	var currDate = new Date();
	
	if ((currDate.getMonth() + 1) > month)
		var year = (currDate.getFullYear() + 1);
	else
	{
		if ((currDate.getMonth() + 1) === month)
		{
			if ((currDate.getDay() + 1) >= day)
				var year = currDate.getFullYear();
			else
				var year = currDate.getFullYear() + 1;
		}
		else
			var year = currDate.getFullYear() + 1;
	}

	if ((currDate.getMonth() + 1) < 10)
		month = "0" + month;

	if ((currDate.getDay() + 1) < 10)
		day = "0" + day;

	var date1 = Date.now();

	console.log(date1);

	var date2 = Date.parse((year + "/" + month + "/" + day).toString());

	console.log(date2);

	var difference = date2 - date1;

	console.log(difference);

	var oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Miliseconds 

	var numDays = Math.round(Math.abs(difference / oneDay)) + 1;

	return numDays;
}

/*
 *	Uppgift 9
 */
function startWriting() {

	var cell = [];

	cell.push(["Förnamn:", "Efternamn:", "Telefon"]);
	cell.push(["Haris", "Kljajic", "7716"]);
	cell.push(["Linus", "Juhlin", "7715"]);
	cell.push(["Mats", "Loock", "7714"]);

	generateTable(cell);
}

function generateTable(cell) {

	document.write("<table>");
	document.write("<colgroup span='3'></colgroup>");
	for (var i = 0; i < cell.length; i++) 
	{
		if (i % 2)
			document.write("<tr class='even'>");
		else
			document.write("<tr class='uneven'>");

		for (var j = 0; j < cell[i].length; j++) 
		{
			if (i === 0)
				document.write("<th>" + cell[i][j] + "</th>");
			else
				document.write("<td>" + cell[i][j] + "</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}