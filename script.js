
function myKeyPress(e){
	
	/* TODO: retrieve the value from the text input */
	var textbox = document.getElementById("my textbox element").value;
	
   /* TODO:  Use replace function to ignore extra - character */
    var mytextbox = textbox.replace(/[-]/g,"");
	
	if(mytextbox == ""){
	document.getElementById("message").innerHTML="↑Please Enter Here";
	return false;
  }
   if(isNaN(mytextbox)){
    document.getElementById("message").innerHTML="*Digit Number 0-9 Only";
	return false;
  }
   if(mytextbox.length<10){
	document.getElementById("message").innerHTML="*U.S. Phone Number must be 10 digits";
	return false;
   } 
	
   if((mytextbox.charAt(0)!=7)&&(mytextbox.charAt(0)!=8)&&(mytextbox.charAt(0)!=9)){
	document.getElementById("message").innerHTML="*U.S. Phone Number must start with 7, 8 and 9";
	return false;
   }
	
   if(mytextbox){
	document.write("Success! We have received your Phone Number.");
   }
	
	var keyPressed;
	
   if(window.event) { // IE	 
     keyPressed = e.keyCode;
    } 
	else if(e.which){ // Netscape/Firefox/Opera	 
     keyPressed = e.which;
    }

    var x = String.fromCharCode(keyPressed);
    var y = formatPhoneNumber("7189515000");


    console.log("Key Pressed = " + x);
    console.log("  Formatted = " + y);
}

function formatPhoneNumber(phone){
	
	var phone = document.getElementById("my textbox element").value;
	
	// TODO: Add a condition to ignore entries beyond 10 digits
    // finally after 10 characters have been entered, it should not accept any further input
	if(phone.length == 12){
	  document.getElementById("my textbox element").value = phone.slice(0, 11);
	  document.getElementById("message").innerHTML="*U.S. Phone Number only have 10 digits";
	  return false;
	}
	
    //present a user entered phone number xxxxxxxx as something like xxx-xxx-xxxx
	//3 characters have been entered, a - should append the input to yield XXX-
	if(phone.length == 3){
		
      document.getElementById("my textbox element").value = phone.slice(0, 3) + "-";
    }
	//7 characters(including the first -) have been entered, a - should append the input again to yield XXX-XXX-
	if(phone.length == 7){
      document.getElementById("my textbox element").value = phone.slice(0, 7) + "-";
    }
	
}

/*
CISC 3140 - Design and Implementation

Professor: Katherine Chuang

Student Name: Hiu Wing, Lam

Emplid: 23626630

Midterm 2- Part 2
*/

