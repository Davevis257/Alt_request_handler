const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOST_NAME = 'localhost'

const pathRoute = path.join(__dirname, 'path', 'app.js')

const behaviour = (req, res) =>{
  if(req.url === '/books' && req.method === 'GET'){
    res.write('Hello from the server. Pls click on my profile to view profile');
    console.log('This is a get request');

  } else if(req.url === '/books' && req.method === 'PUT'){
    res.write('Hello from the server. Pls click on the confirm to update your information');
    console.log('This is a put request');

  } else if(req.url === '/books' && req.method === 'DELETE'){
    res.write('Hello from the server. Are you sure you want to delete your account?');
    console.log('This is a delete request');

  }else if (req.url === 'books/author/' && req.method === 'GET'){
    res.write('Hello from the server. Pls click on the view more to get the author of the book');
    console.log('This returns the name of the author');

  }else if(req.url === '/books/author' && req.method === 'POST'){
    res.write('Hello from the server. Pls input your name as the author of the book');
    console.log('This is a post request from books and author');

  }else if(req.url === '/books/author' && req.method === 'PUT'){
    res.write('Hello from the server. Are you sure you want to change your name as the athor of this book?');
    console.log('This is a change of name as the author of the book');
  }else{
    res.writeHead(404, {'Content-type': 'text/plane'});
    console.log('Ooops!!! Something went wrong');
  }
  res.end();
}

const server = http.createServer(behaviour)

server.listen(PORT, (req, res) =>{
  console.log(`Server is listening from http://${HOST_NAME}:${PORT}`)
})


// Write a simple server to handle the following
// GET /books
// PUT /books
// DELETE /books
// GET /books/author/
// POST /books/author/
// PUT /books/author/