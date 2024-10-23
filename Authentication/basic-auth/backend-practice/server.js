//1) Setting Up Express
const express = require('express'); // Importing express framework by requiring it
const app = express(); // Create an instance of express -> handles all incoming requests to our server

const cors = require('cors'); //->imports the CORS middleware to this project
app.use(cors());//-> enables CORS for all routes in our express app


//3) Setting up a Sample User Database
const users = {
  admin: {password: '1234'}
}
// 4) Middleware to handle Basic Authentication
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
  if (users[username]&& users[username].password === password) {
    next();
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Define login route
app.get('/login', (req, res) => {
  res.send('Login successful!');
});

//Define Protected route
// app.get('/protected', basicAuth,(req,res)=>{
//   res.send('This is protected route.');
// })
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
