//********************************************************
// Basic calculation functions ***************************
//********************************************************
// Returns highest value from range of numbers
var my_max = function (array) {
  var hold = array[0];
  for (i=1;i<array.length;i++) {
    if (array[i]>array[i-1]) {
      hold = array[i];
    }
  }
  return hold;
};

// Returns number of vowels in a string
var vowel_count = function(string) {
  count = 0;
  vowels = ["a","e","i","o","u","y"];
  array = string.split("");
  for (i=0;i<array.length;i++) {
    if (vowels.includes(array[i])) {
      count += 1;
    }
  }
  return count;
};

// Reverses a given string
var reverse = function(string) {
  array = [];
  len = string.length+1;
  for (i=len-1;i>=0;i--) {
    array[len-i-1] = string[i];
  }
  var new_string = array.join("");
  return new_string;
};


// Add function
var add = function(x,y) {
  return x+y;
};

var subtract = function(x,y) {
  return x-y;
};

var multiply = function(x,y) {
  return x*y;
};

var divide = function(x,y) {
  if (y===0) {
    return "NAN";
  }else{
    return x/y;
  }
};

//************************* Jquery ****************************

$(document).ready(function() {
	var numbers = [];
	var number;
	$("div[class=number]").each(function() {
		var tmp = $(this).text();
		$(this).click(function() {
			console.log(tmp);
			numbers.push(parseInt(tmp));
			console.log(numbers.toString());
		});
	});

	$("div[class=command]").each(function() {
		var tmp = $(this).text();
		$(this).click(function() {
			console.log(tmp);
			command = tmp;
			console.log(command);
		});
	});

	$("div[id=equals]").click(function() {
		switch (command) {
			case "+":
				var compile = add(numbers[0], numbers[1]);
				console.log(compile);
				numbers = [];
				number = "";
				break;
			
			case "-":
				var compile = subtract(numbers[0], numbers[1]);
				console.log(compile);
				numbers = [];
				number = "";
				break;
			
			case "x":
				var compile = multiply(numbers[0], numbers[1]);
				console.log(compile);
				numbers = [];
				number = "";
				break;
			
			case "/":
				var compile = divide(numbers[0], numbers[1]);
				console.log(compile);
				numbers = [];
				number = "";
				break;
		}
	});

	$("div[id=clear]").click(function() {
		numbers = [];
		number = "";
		console.log(numbers.toString());
		console.log(number);
	});
});







