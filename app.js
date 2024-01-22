function sayHello(nameOfPerson, age ){
    console.log("Hello my name is " + nameOfPerson + "! And I'm " + age + " years old!");
}

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lynn", 23);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(firstNumber, secondNumber){
    console.log(firstNumber / secondNumber);
}

//without input -> NaN
plus();

// n / 0 -> Infinity
divide(100, 0);

plus(8, 60);
divide(98, 20);

const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        if(otherPersonsName === undefined){
            console.log("Hello! My name is " + player.name + "!");
        } else {
            console.log("Hello! " + otherPersonsName + "! My name is " + player.name + "!");
        }
    },
};

console.log(player.name);
player.sayHello();
player.sayHello("Vanilla");
