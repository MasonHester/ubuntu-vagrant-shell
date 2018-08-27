var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function consoleLogger(_func, message) {
    console.log(message);
    _func();
}

consoleLogger(function() {
    console.log("in function hello")
}, "normal hello");
// Write a function that runs a function argument if
// its other argument is truthy.

function thing(_func, arg) {
    if(arg) {
        return _func()
    }

    else {console.log("not in if")}
}

console.log("truthy");
thing(function() {
    console.log("hello");
}, "arg");

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function name (_func, val) {

}
name();

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
