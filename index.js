const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (index.html, style.css, etc.)
app.use(express.static(path.join(__dirname)));

// Use json-server to serve db.json
const router = jsonServer.router('db.json');
app.use('/api', router); // Access your API at /api

// Catch-all route to serve index.html for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
