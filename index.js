// Filename - index.js

// Importing the http module
const http = require("http")

// Creating server 
const server = http.createServer((req, res) => {
    // Sending the response
    res.write("Haley Kuester")
    res.end();
})

// Server listening to port 3000
server.listen((3000), () => {
    console.log("Haley Kuester");
})
