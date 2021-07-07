const express = require('express')
const fs = require('fs') // Native nodejs library
const app = express() // Init express app

// A get request to the root directory
// Whenever we get an http request to the '/'path, the function handling this request will get a request and a response that we have to capure
app.get('/', (request, response) => {
    return response.send("Hello, world!")
    // When we hit the root dir of we'll send a response 'Hello, world!'
})

app.get('/todos', (request, response) => {

    const showOnlyPending = request.query.showPending

    fs.readFile('./store/todos.json', 'utf-8', (err, data) => {
        if (err) // In case readfile failes reading the file for any reason
            return response.status(500).send("Sorry, something went wrong")
        // Otherwise, we need to load the data (that is passed to us as a string) to JSON, so we can manipulate it
        const todos = JSON.parse(data)
        if (showOnlyPending !== "1")
            return response.json({ todos: todos })
        return response.json({ todos: todos.filter(item => item.complete === false) })
    })
})

app.put('/todos/:id/complete', (request, response) => {

    const findToDoById = (todos, id) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id)
                return i
        }
        return -1 // in case we didn't find the item
    }

    fs.readFile('./store/todos.json', 'utf-8', (err, data) => {
        if (err)
            return response.status(500).send("Error: Can't read todo file")
        let todos = JSON.parse(data)
        const id = parseInt(request.params.id)
        const todoIndex = findToDoById(todos, id)
        if (todoIndex === -1)
            return response.status(404).send("Error: ID not found")
        todos[todoIndex].complete = true
        fs.writeFile('./store/todos.json', JSON.stringify(todos), () =>
            response.status(200).json({ 'status': 'Completed', 'id': id }))
    })
})

// Define port for inbound traffic
// Express doens't send anything back from the listen function, so the callback function doesn't receive any parameter
app.listen(3000, () => {
    console.log("Application is running on http://localhost:3000")
})