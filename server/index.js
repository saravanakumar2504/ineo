const express = require('express');
const createUser = require('./routes/createUser');

const app = express();
const PORT = 5001;

// Middleware to parse JSON request body
app.use(express.json());

// Use profile routes
app.use('/api', createUser);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
