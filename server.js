const express = require('express');
const app = express();
const port = 3000;

// Function to encode special HTML characters
function htmlEncode(str) {
    return str
        .replace(/&/g, '&amp;')  // Encode '&' first
        .replace(/</g, '&lt;')   // Encode '<'
        .replace(/>/g, '&gt;')   // Encode '>'
        .replace(/"/g, '&quot;') // Encode '"'
        .replace(/'/g, '&#39;'); // Encode "'"
}

// Route for URL encoding demo
app.get('/encode', (req, res) => {
    const input = req.query.data || ''; // Get query parameter
    const encodedData = htmlEncode(input); // Fully encode input

    res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Ensure correct content type
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Safe Output</title>
            <style>
                pre {
                    background-color: #f4f4f4;
                    padding: 10px;
                    border: 1px solid #ddd;
                    overflow-x: auto;
                    font-family: monospace;
                }
            </style>
        </head>
        <body>
            <p><strong>Encoded Output (Safe for Use):</strong></p>
            <pre>${encodedData}</pre>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
