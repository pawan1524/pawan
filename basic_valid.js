function validateName()
{
	
	var name = document.getElementById("commentName").value;
	
	if(name.length == 0)
	{
		producePrompt ("Name is required", "commentNamePrompt", "red");	
		return false;
	}
	
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
	{
		producePrompt ("First and Last Name Please!", "commentNamePrompt", "blue");	
		return false;
	}
	
	producePrompt ("Welcome " + name + "!", "commentNamePrompt", "green");	
	return true;
}

function validatePhone()
{
	
	var phone = document.getElementById("commentPhone").value;
	
	if(phone.length == 0)
	{
		producePrompt ("Phone is required", "commentPhonePrompt", "red");	
		return false;
	}
	
	if(phone.length != 10)
	{
		producePrompt ("Must Include area code!", "commentPhonePrompt", "red");	
		return false;	
	}
	
	if(!phone.match(/^[0-9]{10}$/))
	{
		producePrompt ("Only Numbers allowed!", "commentPhonePrompt", "blue");	
		return false;
	}
	
	producePrompt ("Valid Phone Number", "commentPhonePrompt", "green");	
	return true;
}


function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}
