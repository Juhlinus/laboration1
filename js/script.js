var minText = "hejsan";
var minNyaText = "";

for (var i = 0; i < minText.length; i++) {
	
	alert("Är på bokstav '" + minText[i] + "'.");

	if (minText[i] === 'A' || minText[i] === 'a')
	{
		
	}
	else if (minText[i].toUpperCase() === 'H')
	{
		minNyaText += 'FAGGET';
	}
	else
		minNyaText += minText[i];
	
	alert("lägger till den i 'minNyaText' som innehåller '" + minNyaText + "'.");
}

console.log(minNyaText);