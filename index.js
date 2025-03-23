// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am an anonymous function!");
    };
}

// Example usage:
receivesAFunction(() => console.log("Callback function called!"));

const namedFunc = returnsANamedFunction();
namedFunc();

const anonFunc = returnsAnAnonymousFunction();
anonFunc();
