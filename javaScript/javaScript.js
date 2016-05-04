//to prompt user to enter a ranger 

$(document).ready (function promptNum (){
	var promptNumInputString = prompt("Please enter the last number for the range","eg. 100");
		//to convert the promptNumInputString to Number
		var fizzBuzzRangeNum = +promptNumInputString;

	//to verify that the number input is doenst have string for eg 101a
	function convertStringIntoInteger(){
		var stringInteger = parseInt(promptNumInputString,10);
			console.log(stringInteger);
			if ( isNaN(stringInteger) ){
				alert("The input doesn't have any number in it. Please input a value with atleast 1 number in it");
			} else {
				
				fizzBuzzRangeNum = stringInteger;
			}
	}

	//to alert the user that the value provided has decimal 
	function alertUserForDecimal(){
		if (promptNumInputString % 1 != 0){
			alert("The value you provided has decimal number.Please try again");
			promptNum();
		} 
	}

	var i = 1;
	
	//function to call the FizzBuzz ---make this into function and have rangeNum as a parameter and 
	function FizzBuzz(rangeNum){
		for (i = 1; i <= rangeNum; i++){
			if (i%3 === 0 && i%5 === 0){
				$('p.fizzBuzz').append('<p>FizzBuzz</p>');
			} 
				else if (i%5 === 0){
					$('p.fizzBuzz').append('<p>Buzz</p>');
			} 
				else if (i%3 === 0 ){
				$('p.fizzBuzz').append('<p>Fizz</p>');
			} 
				else {
				$('p.fizzBuzz').append('<p>'+i+'</p>');	
			}
		}
	}
	alertUserForDecimal();
	convertStringIntoInteger();
	FizzBuzz(fizzBuzzRangeNum);

});