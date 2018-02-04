/* A Normal function that is used to construct objects */
function Person (first, last) {
    this.firstName = first,
    this.lastName = last,
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

let Me = new Person('Patrick', 'Hammon');
console.log(Me.getFullName());
/* <-------------------------------------------------------> */
//initialize constructor function for here
function Hero(name, level) {
    this.name = name; //we ensure that when a new instance is created it will have this property
    this.level = level;
}

let hero1 = new Hero('Bjorn', 1);
/* You may notice that we've only defined properties and not methods in the constructor. It is a common practice in JavaScript to define 
methods on the prototype for increased efficiency and code readability. */

//Now we add a METHOD to hero using the prototype
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

/* Since greet() is in the prototype of Hero, 
and hero1 is an instance of Hero, the method is available to hero1. */

//hero1.greet();

/* now lets create a new character class. we will use prototypal inheritance to inherit
from the original Hero class */

//initialize warrior constructor which extends Hero
function Warrior(name, level, weapon) {
    //chain constructor with call
    Hero.call(this, name, level);
    //add new property
    this.weapon = weapon;
}

//initialize Healer constructor which extends Hero 
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

// both Healer and Warrior constructors now have all the properties of Hero!
//we need to connect our prototypes to the main Hero prototype.. they are not automatically linked
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

//now we will add unique methods to each constructor
Warrior.prototype.attack = function() {
    return `${this.name} attacks with the ${this.weapon}`;
}
Healer.prototype.attack = function() {
    return `${this.name} uses the ${this.spell}`;
}

//now we will create our characters using the new constructors
const hero2 = new Warrior('Bron', 1, 'longSword');
const her03 = new Healer('Khajit', 1, 'fireBlast');
