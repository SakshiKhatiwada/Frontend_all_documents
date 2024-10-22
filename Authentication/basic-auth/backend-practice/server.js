// Took help from ChatGPT because I have no idea about backend!

const express = require('express'); // Import express
const app = express(); // Create an instance of express

const cors = require('cors');
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Allow requests from your frontend
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Allow the HTTP methods you need
  allowedHeaders: 'Authorization, Content-Type',
}));
app.options('*', cors()); // Preflight for all routes

// Middleware to handle Basic Authentication
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    res.status(401).send('Authorization required');
    return;
  }

  // Decode the Base64 encoded credentials
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // Check if credentials are correct
  if (username === 'admin' && password === '1234') {
    next();
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Define login route
app.get('/login', (req, res) => {
  res.send('Login successful!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
