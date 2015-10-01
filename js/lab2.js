function thisFunc(thisForm) {
	
	// For error handling
	var error = [0];

	// Since thisForm can be treated as 
	// an object we can just access the 
	// input field as a property and then 
	// get the value of it.
	/*
	{
		// Now contains entire html element
		var first_name = thisForm.first_name;
		
		// Now only contains the value of 
		// the value attribute
		first_name = first_name.value;

		var last_name = thisForm.last_name;
		last_name = last_name.value;

		var postal_code = thisForm.postal_code;
		postal_code = postal_code.value;

		var last_name = thisForm.last_name;
		last_name = last_name.value;

		var email = thisForm.email;
		email = email.value;
	}
	*/

	for (var i = 0; i < thisForm.length; i++) {

		// Pass the current element as an argument
		// to the isEmpty() function.
		if (isEmpty(thisForm[i]) !== 1)
			error.push(thisForm[i].getAttribute("name") + " is empty.");
	}

	// Let's iterate through the errors and print 
	// them, skipping first value since it's 0 by
	// default.
	for (var i = 0; i < error.length; i++) {
		
		if (error.length === 1)
			break;
		else if (i === 0)
			continue;
		else
			console.log(error[i]);
	}
}

function isEmpty (inputElement) {

	console.log(inputElement.getAttribute("name") + " : " + inputElement.value);
	
	// Check if inputElement is either an empty 
	// string or null
	if (!inputElement.value || inputElement.value === null)
		return 0;

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
				return -1;
			
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
				return -1;

			break;

		case 'email': 
			break;

		case 'submit':
			break;
	}

	return 1;
}