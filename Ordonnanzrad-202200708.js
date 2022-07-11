
function myPrompt() {
   var person = prompt("Please enter your name", "Your name");  //The second string option
   if (person != "") {  //!=means "not equal to"
         document.getElementById("test").innerHTML = 
         "Hello " + person + "! This page is dedicated to Stephans collection of Swiss Army Bikes. Please enjoy!";
   		
   
   } 
   else 
   {
        alert("You have not inserted any name, please do so.");
       
   }
      
   }   




function validateFirstName() { //test input for allowing 2-15 characters
	var fName = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if (re1.test(fName)) {  //if input is valid, update page to show successfull entry
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}	
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("firstNamePrompt").style.color = "red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2-15 characters.</strong>";
		return false;
	}
		
}	// end function validate first name

function validateLastName() { //test input for allowing 2-25 characters
	var lName = document.getElementById("lastName").value;
	var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;
	
	if (re2.test(lName)) {  //if input is valid, update page to show successfull entry
		document.getElementById("lastNamePrompt").style.color = "green";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}	
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("lastNamePrompt").style.color = "red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2-25 characters </strong>";
		return false;
	}
}	// end function validate last name

function validatePhone() { //test xxxx-xxxx-xxxxxxx
	var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{4}-\d{4}-\d{7}$/;
	
	if (re3.test(phoneNumber)) {  //if input is valid, update page to show successfull entry
		document.getElementById("phonePrompt").style.color = "green";
		document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	}	
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("phonePrompt").style.color = "red";
		document.getElementById("phonePrompt").innerHTML = "<strong>Use xxxx-xxxx-xxxxxxx >";
		return (false);
	}
} 	// end function validate phone




function calcOrder() { //Multiplate with quantity

	var  firstName = document.getElementById("firstName").value;
	var  lastName = document.getElementById("lastName").value;
	var  userName = firstName + " " + lastName;
	var  phone = document.getElementById("phone").value;
	var  quantity = document.getElementById("quantity").value;
	var  price = document.getElementById("price").value;
	
	
	document.getElementById("order.Confirm").innerHTML = "<h2>Order Summary:</h2>";
	document.getElementById("order.Confirm").innerHTML += "<p>" + userName + "</br>" + phone + "</p>";
	document.getElementById("order.Confirm").innerHTML += "<p>Order total: €" + price * quantity + "</p>";
			
	}	// end calc Order





function validateForm() {
							
	var pass1 = document.getElementById("password1").value;
	var pass2 = document.getElementById("password2").value;
		
	if (pass1 == pass2)	{
		alert("password match");
		return true;
	}		
	else {
		alert("passwords do not match");
		return false;			
	}				
}
		
		
		
//Java Script ONBLUR EVENT: It allows some action to happen when the user clicks away from a form field or other element that they had just previously been in. 
		
		
		
	function checkField1 (){
	
		var field = document.getElementById("field1").value;
	
		if (field.length < 5)
			document.getElementById("message1").innerHTML = "Too short.";
		
		else document.getElementById("message1").innerHTML = "Thats long enough.";
	}
	
	function checkField2 (){
	
		var field = document.getElementById("field2").value;
	
		if (field != "") //!= means not equal to. There needs to be a Leerzeichen between Gaensefüsschen.
			document.getElementById("message2").innerHTML = "Input accepted.";
		else document.getElementById("message2").innerHTML = "Please provide input.";
	}
	
	
		function checkField3 (){
	
		var field = document.getElementById("field3").value;
	
		if (field.length < 5)
			document.getElementById("message3").innerHTML = "Too short.";
		
		else document.getElementById("message3").innerHTML = "Thats long enough.";
	}
	
		
		
