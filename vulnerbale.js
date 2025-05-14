// vulnerable-server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const eval = require('eval'); // Tehlikeli bir kullanım!

const app = express();
app.use(bodyParser.json());

// SQL Injection açıklığı olan bir endpoint
app.get('/search', (req, res) => {
  const userId = req.query.userId;
  const query = `SELECT * FROM users WHERE id = ${userId}`; // SQL Injection açıklığı
  // Burada veritabanı sorgusu yapılacakmış gibi davranıyoruz
  res.send(`Executing query: ${query}`);
});

// Command Injection açıklığı olan bir endpoint
app.post('/execute', (req, res) => {
  const command = req.body.command;
  const result = require('child_process').execSync(command); // Command Injection açıklığı
  res.send(result.toString());
});

// XSS (Cross-Site Scripting) açıklığı olan bir endpoint
app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello, ${name}!</h1>`); // XSS açıklığı
});

// Dosya okuma açıklığı olan bir endpoint
app.get('/read-file', (req, res) => {
  const filePath = req.query.filePath;
  const fileContent = fs.readFileSync(filePath, 'utf8'); // Path Traversal açıklığı
  res.send(fileContent);
});

// Eval kullanımı ile kod enjeksiyonu açıklığı
app.post('/eval', (req, res) => {
  const code = req.body.code;
  const result = eval(code); // Kod enjeksiyonu açıklığı
  res.send(result);
});

// Hardcoded secret key
const SECRET_KEY = 'my-super-secret-key'; // Hardcoded secret açıklığı

app.get('/secret', (req, res) => {
  res.send(`Secret key is: ${SECRET_KEY}`);
});

// Sunucuyu başlat
app.listen(3000, () => {
  console.log('Vulnerable server is running on http://localhost:3000');
});
// Hardcoded secret key
const SECRET_KEY = 'my-super-secret-key'; // Hardcoded secret açıklığı

app.get('/secret', (req, res) => {
  res.send(`Secret key is: ${SECRET_KEY}`);
});

// Sunucuyu başlat
app.listen(3000, () => {
  console.log('Vulnerable server is running on http://localhost:3000');
});
// Hardcoded secret key
const SECRET_KEY = 'my-super-secret-key'; // Hardcoded secret açıklığı

app.get('/secret', (req, res) => {
  res.send(`Secret key is: ${SECRET_KEY}`);
});

// Sunucuyu başlat
app.listen(3000, () => {
  console.log('Vulnerable server is running on http://localhost:3000');
});
