// call apply and bind let you decide what the this keyword is

let person = {
    firstName: 'Patrick',
    middleName: 'Cody',
    lastName: 'Hammon',
    getFullName: function() {
        
        let fullName = this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        return fullName;
    }
}

let greeting = function(arg1, arg2) {
    console.log('hey ' + this.getFullName() + ' how are you?') }

//BIND ----> INVOKE logGreetingBind
let logGreetingBind = greeting.bind(person); //we are binding the this keyword on greeting to the person object

//CALL ----> immediately invokes the function and makes sure 'this' is correct
greeting.call(person);

//APPLY ----> same thing as call but if you pass additional arguments it expects them in an array WTF?
greeting.apply(person, ['myarg1', 'myarg2']);

//YOU CAN ALSO DO THIS IFFY
(function(arg1, arg2) {
    console.log('hey' + this.getFullName() + ' how are you?')
}).call(person);


