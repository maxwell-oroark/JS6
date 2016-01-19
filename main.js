// Function Practice!


// Problem 1

var tripleFive = function(){
	for(var i = 0; i < 4; i++){
		console.log('five');
	}
}

// Problem 2

var findLastLetter = function(word){
	var number = word.length;
	var lastLetter = word[(number - 1)];
	console.log(lastLetter)
	return lastLetter;
}

// Problem 3

var square = function(number){
	return number * number;
}
// Problem 4

var negate = function(number){
	return -number;
}

// Problem 5

var toArray = function(element, element2, element3){
	var array = [element, element2, element3];
	return array;
}
// Problem 6

var startsWithA = function(word){
	if (word[0] === 'a'){
		return true;
	}
	else {
		return false;
	}
}

// Problem 7

var excite = function(word){
	return word.concat('!!!');
}

// Problem 8

var sun = function(word){
	if (word.indexOf('sun')){
		return true;
	} else {
		return false;
	} 
}


// Problem 9

var tiny = function(number){
	if (number > 0 && number < 1){
		return true;
	} else {
		return false
	}
}

// Problem 10

var getSeconds = function(time){
	var minutes = Number(time.substring(0,2));
	var seconds = Number(time.substring(3,5));
	console.log(minutes);
	console.log(seconds);
	return (minutes * 60) + seconds;
}



