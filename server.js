const express = require('express');
const path = require('path');

const app = express();
// OpenShift assigns port 8080 by default for non-root containers
const PORT = process.env.PORT || 8080;

// Serve index.html at root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Express web server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`G-Shock App running on port ${PORT}`);
});