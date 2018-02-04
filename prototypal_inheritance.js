// PROTOTYPAL INHERITANCE - we create one object and then make new objects from the original
let person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function() {
        return 'Hi ' + this.firstName;
    }
}
/* here we create a new object called john based on the person object.
If you console.log(john) here you can see that firstname and lastname is default */
var john = Object.create(person);
/* here we are overriding the default prototype values 
   so when we declare first name and last name on the john object
   it doesn't look down the scope chain and declares the first and last name
   on the john object itself. If you look at john's prototype values it will be listed
   as default */
john.firstName = 'Johnny';
john.lastName = 'FireBoy';
console.log(john);

// POLYFILL - what happens if we have to support an older browser that doesn't have Object.create?





