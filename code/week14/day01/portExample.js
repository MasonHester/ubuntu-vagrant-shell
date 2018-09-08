// // Require/import the HTTP module
// var http = require("http");

// // Define a port to listen for incoming requests
// var PORT = 8080;

// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

//   // Send the below string to the client when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });


const http = require("http");

const port = 7000
const port2 = 7500

function handleRequest(request, response) {
    response.end(`Path hit: ${request.url}`)
}

function handleRequest2(request, response) {
    response.end(`Second Port`);
}

const server = http.createServer(handleRequest);
const secondServer = http.createServer(handleRequest2);

server.listen(port, function() {
    console.log(`Server listening on: http://localhost: ${port}`)
})

secondServer.listen(port2, function() {
    console.log(`Serv listening on ${port2}`)
})