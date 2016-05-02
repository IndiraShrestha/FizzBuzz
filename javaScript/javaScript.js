var i = 1;
for (i = 1; i<101; i++){
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
	