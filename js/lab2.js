function sendData() {
	var XHR = new XMLHttpRequest();

	// We bind the FormData object and the form element
	var FD  = new FormData(form);

	// We define what will happen if the data are successfully sent
	XHR.addEventListener("load", function(event) {
		alert(event.target.responseText);
	});

	// We define what will happen in case of error
	XHR.addEventListener("error", function(event) {
		alert('Oups! Something goes wrong.');
	});

	// We setup our request
	XHR.open("POST", "");

	// The data sent are the one the user provide in the form
	XHR.send(FD);
}

var form = document.getElementById("myForm");

// Capture submit event and stop it
form.addEventListener("submit", function (event) {
	event.preventDefault();

	thisFunc(form);

});

function thisFunc(thisForm) {

	// Need to check if all fields are validated
	var checks = document.getElementsByClassName('fa-check');

	if (checks.length !== 4)
	{
		alert("Please fill out all the fields.");
		return false;
	}
	else
	{
		// Parent element where we insert the new elements
		var parentElement = document.getElementsByClassName('popup')[0];

		// Get labels
		var labelElement = document.getElementsByTagName('label');

		// Loop through all the fields and print them out
		for (var i = 0; i < thisForm.length; i++) {

			// Don't print 'submit'
			if (labelElement[i])
			{
				// Prepare labels to be inserted
				var boldElement = document.createElement('strong');
				var boldContent = document.createTextNode(labelElement[i].innerHTML);
				boldElement.appendChild(boldContent);

				// Insert the element
				parentElement.insertBefore(boldElement, parentElement.lastChild);

				// Prepare the inputted info to be inserted
				var paragraphElement = document.createElement('p');
				var paragraphContent = document.createTextNode(thisForm[i].value);
				paragraphElement.appendChild(paragraphContent);

				// Inser the element
				parentElement.insertBefore(paragraphElement, parentElement.lastChild);
			}
		}

		var buttonElement = document.createElement('button');
		buttonElement.setAttribute('onclick', 'formSubmit();');
		var buttonContent = document.createTextNode('Bekräfta Köp');
		buttonElement.appendChild(buttonContent);

		parentElement.insertBefore(buttonElement, parentElement.lastChild);

		var buttonElement = document.createElement('button');
		buttonElement.setAttribute('onclick', 'closeFunc();');
		var buttonContent = document.createTextNode('Avbryt');
		buttonElement.appendChild(buttonContent);

		parentElement.insertBefore(buttonElement, parentElement.lastChild);

		// Make the popup box appear
		var currElement = document.getElementById('popup1');
		currElement.setAttribute("class", "visible");
	}
}


function formSubmit() {
	// Replace class with one that sets opacity to 0
	var currElement = document.getElementById('popup1');
	currElement.setAttribute("class", "overlay");

	// Call submit form function
	sendData();
}

function closeFunc() {
	// Replace class with one that sets opacity to 0
	var currElement = document.getElementById('popup1');
	currElement.setAttribute("class", "overlay");
}

function isValid (inputElement) {

	// Check if inputElement is either an empty 
	// string or null
	if (!inputElement.value || inputElement.value === null)
	{
		inputElement.nextSibling.setAttribute("class", "fa fa-times");
		return 0;
	}

	var errors = 0;

	switch (inputElement.getAttribute("name"))
	{
		// Since we check for the same thing 
		// in both first name and last name
		// we remove the break. DRY
		case 'first_name':
		case 'last_name':

		// Match A-Z and a-z 
		var regex = /^[a-zA-Z]+$/;
		var result = inputElement.value.match(regex);

		// If no match was found then 
		// the name is invalid.
		if (result === null)
			errors = -1;
		
		break;

		case 'postal_code':
		// Only allow SE,  two 
		// characters. Space 
		// thereafter is optional.
		// Accept numbers from 0-9, 
		// as many as you like. As
		// well as space or dash
		// anywhere between.

		var regex = /^([SE]{2})?(\s)?([0-9(\s)?(\-)?]+)$/;
		
		var result = inputElement.value.match(regex);

		if (result === null)
		{
			errors = -1;
			break;
		}

		// Make sure no spaces or dashes are left.
		var newValue = result[3].replace('-', '');
		newValue = newValue.replace(' ', '');

		// Only 5 digits in postal codes
		if (newValue <= 5)
			errors = -1;
		else
			inputElement.value = newValue;

		break;

		case 'email':

		// Allow numbers and characters
		// before @ separated by .
		// Require @ and allow numbers
		// and characters thereafter.
		// Require . followed by a-z.
		var regex = /^[a-z0-9]+\.?[a-z0-9]+?@[a-z0-9]+\.[a-z]+$/;

		var result = inputElement.value.match(regex);

		if (result === null)
			errors = -1;

		break;

		case 'submit':
		break;
	}

	if (errors === 0)
		inputElement.nextSibling.setAttribute("class", "fa fa-check");
	else 
		inputElement.nextSibling.setAttribute("class", "fa fa-times");

	return 1;
}
