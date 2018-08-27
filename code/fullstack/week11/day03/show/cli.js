let userInput = process.argv;
let rawShowName = userInput.slice(3);
let command = userInput[2];

if(!command) {
    console.log("Please input parameters");
}

else if(!rawShowName) {
    console.log("Please list a TV show");
}

if(command === "show" || command === "actor") {
    console.log("stuff exported")
    exports.command;
    let showName = rawShowName.join("+");
    console.log(showName)
    exports.showName;
}

else {
    console.log("Please use Show, or Actor for your second parameter");
    console.log(command)
}

const main = require("./main.js");


// request(queryUrl, function(error, response, body) {

//     // If the request is successful (i.e. if the response status code is 200)
//     if (!error && response.statusCode === 200) {
  
//       // Parse the body of the site and recover just the imdbRating
//       // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//       console.log("Was released: " + JSON.parse(body).Released);
//     }
//   });