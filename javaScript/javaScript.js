var i = 1;
for (i = 1; i<101; i++){
	if (i%3 === 0){
		$('p.fizzBuzz').append('<p>' 
			+console.log("Fizz")
			+'</p>');
	} else if (i%5 === 0){
		$('p.fizzBuzz').append('<p>'
			+console.log("Buzz")
			+'</p>');
	} else if ( i%3 && i%5 === 0 ){
		$('p.fizzBuzz').append('<p>'
			+console.log("FizzBuzz")
			+'</p>');
	} else {
		$('p.fizzBuzz').append('</p>'
			+console.log(i)
			+'</p>');	
	}
}
	