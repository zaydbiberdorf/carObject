


// constructor objrct
class car {
    constructor(year, make , modle, running ){
        this.year = year;
        this.make = make;
        this.modle = modle;
        this.running = false;
        this.speed = 0;
    }
    // methods
    turnOn() {
        this.running = true;
    }
    turnOff() {
        this.running = false;
        this.speed = 0;
    }
    changeSpeed() {
        this.speed += prompt("what speed would you like to go?");
    }

}

let year = prompt("what year is the car?");
let make = prompt("what make is the car?");
let modle = prompt("what modle is the car?");
let newCar = new car(year, make, modle);

// event listeners
document.getElementById("carOn").addEventListener("click", newCar.turnOn);
document.getElementById("carOff").addEventListener("click", newCar.turnOff);
document.getElementById("newSpeed").addEventListener("click", newCar.changeSpeed);

// getting words for is the car running
let isOrIsNot;
if(newCar.running = true){
    isOrIsNot = "is";
}else{
    isOrIsNot = "is not";
}
// if speed is greater than 0 than the car is running
if(newCar.speed = 0){
    newCar.running = false;
}else{
    newCar.running = true;
}



// changing inner html
document.getElementById("year").innerHTML= "Year:" + newCar.year;
document.getElementById("make").innerHTML= "make:" + newCar.make;
document.getElementById("modle").innerHTML= "modle:" + newCar.modle;
document.getElementById("running").innerHTML= "the car " + isOrIsNot + " running";
document.getElementById("speed").innerHTML= "the car is going: " + newCar.speed + "km/h";

 
console.log(newCar);