// This is an example of closure in JS
function greet(saySomething) {

    return function hello(name) {
        console.log(saySomething + ' ' + name + ' how are you?');
    }
} 

/* closure is when we return a function from within a function. 
   if we try calling greet('hey')('patrick') */

function buildFunctionArray() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    };
    return arr;
};

let bfa = buildFunctionArray();

bfa[0]();
bfa[1]();
bfa[2]();

// what is the value of these function calls?

//try changing var i to let i !!!