const express = require('express')
const app = express() // Init express app

// A get request to the root directory
// Whenever we get an http request to the '/'path, the function handling this request will get a request and a response that we have to capure
app.get('/', (request, response) => {
    return response.send("Hello, world!")
    // When we hit the root dir of we'll send a response 'Hello, world!'
})

// Define port for inbound traffic
// Express doens't send anything back from the listen function, so the callback function doesn't receive any parameter
app.listen(3000, () => {
    console.log("Application is running on http://localhost:3000")
})