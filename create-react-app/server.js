const express = require('express');
const http = require('http');
const path = require('path');
const os = require('os');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:8080', // Your Spring Boot server address
  changeOrigin: true,
  secure: false, // Set to false to ignore SSL certificate errors, but be cautious with this in production
  logLevel: 'debug',
  pathRewrite: {
    '^/api': '' // This will remove /api from the URL path
  }
});

app.use('/api', apiProxy);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Function to get the local IP address
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
}

const ipAddress = getLocalIpAddress();

// Listening on all network interfaces to make it accessible on the local network
http.createServer(app).listen(4001, '0.0.0.0', () => {
  console.log(`HTTP server running at http://${ipAddress}:4001`);
});
