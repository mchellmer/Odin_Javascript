// Array operations **********************
var variable = [1];
console.log(variable[0]);     //access

console.log(variable.length); //count

var variable = [[1,1],[1,1]]; //2d array




// Loop operations **********************
var variable = [1,2,3,4,5];
for (i = 0; i < variable.length; i++) {
    console.log(languages[i]);
}

var variable = function(obj) {
  for(var key in obj) {
    console.log(key);
  }
};





// ifelse operations **********************
if (true) {
  console.log();
} else {
  console.log();
}

switch(expression) {
    case n:
        console.log("code block")
        break;
    case n:
        console.log("code block")
        break;
    default:
        console.log("code block")
};





// Comparaters operations **********************
1 === 1
1 <=  2
1 !== 2




// Function operations **********************
var variable = {};

variable.id = 'id';
variable.value = 'value';
variable.command = function() {
  console.log(this.id + ' : ' + this.value);
};

variable.command(); // Prints id : value

// make a new Dog here
function Dog(age, name) {
    this.age = age;
    this.name = name;
}

var dog = new Dog(3,"Hunter");

//Function function
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return this.height*2 + this.width*2;
  };
}

var rect = new Rectangle(1,2);
rect.calcArea;





// Object operations **********************
var object = {
  key1: value1,
  key2: value2
};

var object = new Object();
object['name'] = 'Mark';
object['age'] = 29;
object.name = 'Mark';




