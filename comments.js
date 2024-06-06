// Create web server
// Create a web server that listens to the port 3000 and returns the content of the 'comments.html' file.
// The 'comments.html' file is located in the 'views' folder.
// The server should return the content of the 'comments.html' file when someone tries to access it from the 'http://localhost:3000/comments' URL.
// The server should return a 404 error when someone tries to access it from any other URL.
// The server should return the content of the 'comments.html' file with a status code 200 when someone tries to access it from the 'http://localhost:3000/comments' URL.
// The server should return the content of the 'comments.html' file with a status code 200 when someone tries to access it from the 'http://localhost:3000/comments/' URL.
// The server should return a 404 error when someone tries to access it from the 'http://localhost:3000/comments/xyz' URL.

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/comments' || path === '/comments/') {
        fs.readFile('./views/comments.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// In the above code, we have created a web server that listens to the port 3000. When someone tries to access the 'http://localhost:3000/comments' URL, the server reads the content of the 'comments.html' file from the 'views' folder and returns it with a status code 200. If someone tries to access any other URL, the server returns a 404 error. The server also returns a 404 error when someone tries to access the 'http://localhost:3000/comments/xyz' URL.

// Run the above code and open the 'http://localhost:3000/comments' URL