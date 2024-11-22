const express = require('express');
const cors = require('cors');  // Import the CORS middleware
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define route for /home
app.get('/home', function (req, res) {
  res.send('home');
});

// Define route for root (/)
app.get('/', function (req, res) {
  res.send('Hello world');
});

// Example route for handling JSON request body
app.post('/data', function (req, res) {
  const receivedData = req.body;
  res.json({
    message: 'Data received successfully',
    data: receivedData
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
