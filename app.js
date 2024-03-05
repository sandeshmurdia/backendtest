// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000; // You can change the port number if needed

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hi');
});

// Define a route handler for '/doc' with custom response headers
app.get('/doc', (req, res) => {
  // Set custom response headers
  res.set({
    'Custom-Header': 'Value',
    'Another-Header': 'Another Value'
  });

  // Create a JSON object
  const responseObject = {
    message: 'This is a documentation endpoint',
    author: 'Your Name',
    date: new Date()
  };

  // Send the JSON response
  res.json(responseObject);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});