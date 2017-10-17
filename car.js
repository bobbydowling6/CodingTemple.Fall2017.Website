var car = {
    make: "Tesla",
    model: "S",
    year: 2015,
    miles: 45,
    battery: 100,
    charge: function(){
        this.battery = 100;
    },
    drive: function(){
        this.battery -= 20;
        this.miles += 40;
    }
};

//alert(car.make);  //This works - I'm accessing a property of the car.  There is no need to put "get; set;" on properties in javascript - there is no explicit access control

//This is totally legal:
car.driver = "Joe";
//Remember, javascript is dynamic.  This might seem worrisome, but a lot of developers really like / use this capability!

//This notation looks like, but is different from JSON
//JavaScript Object Notation != Object Literal Notation

//I can easily sling JavaScript objects to JSON, though:
JSON.stringify(car);
//"{"make":"Tesla","model":"S","driver":"Joe"}"

//And JSON strings back into JavaScript Objects
var jsonData = "{\"make\":\"Ford\",\"model\":\"Model T\",\"driver\":\"Adrian\"}"

var car2 = JSON.parse(jsonData);
//This is one of the reasons why JSON is really popular!


//Invoking methods:

car.drive();
car.drive();
car.miles;
car.battery;
car.charge();
car.battery;
//I can also dynamically add functions:
//car.crash();
//Uncaught TypeError: car.crash is not a function

//Remember : if you have a JavaScript error like the one above, the browser's JS engine is likely going to stop executing the script.
car.crash = function(){ this.battery = 0; this.OnFire = true; };
//There, now I can crash the car:
car.crash();


//Bracket notation: all objects are also dictionaries:

car["battery"]
//100
car["driver"]
//"Joe"
car["drive"]
//ƒ (){
//        this.battery -= 20;
//        this.miles += 40;
//    }
car["drive"]();

//Use either notation, though dot (.) is more common than bracket ([]).

//I can use the delete keyword to remove properties / methods:

car.driver
//"Joe"
car.driver = null;
//null
delete car.driver
delete car.charge
//delete car //Can't delete the variable
//This deletes everything on the car:
Object.keys(car).forEach(function(key){ delete car[key] });

//Constructor Notation: where Pascal-casing shows up!
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

var car = new Car("Tesla", "S", 2016);
var car2 = new Car("Ford", "Model T", 1924);

//I can still use JSON helpers:
var data = JSON.stringify(car)
var car3 = JSON.parse(data);

//I use constructor notation to enforce "standard" process for creating cars.  The constructor will also make a note that the objects are of type "Car" instead of type "Object";

Car.prototype.crash = function(){ this.onFire = true; this.battery = 0; };

//By using prototypes, I can add methods to all cars without having to add them to each car individually.  In this case, since car and car2 were created with the constructor, my JavaScript runtime knows that they are of type Car, so they gain the prototyped behavior:
car.crash();
car2.crash();

//car3.crash(); This won't work - even though car3 is built using the JSON representation of car, the prototype information does not carry over.

Car.prototype.fuelTank = 100;
Car.prototype.refuel = function(){
    this.fuelTank = 100;
}

Car.prototype.drive = function(){
    if(this.fuelTank <= 0){
        window.console.log("Out of Gas")
    } else {
        this.fuelTank -= 10;
    }
}
