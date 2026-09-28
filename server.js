const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// A simple backend API endpoint
app.get('/api/status', (req, res) => {
  res.json({ 
    message: "Hello from the AWS Cloud Backend!", 
    status: "Running successfully",
    timestamp: new Date()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});