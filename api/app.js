const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Test API activa');
});


app.get('/api/test', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
  res.json(data);
});

app.get('/api/openapi', (req, res) => {
  res.sendFile(path.join(__dirname, 'openapi.yaml'));
});

app.get('/api/self-description', (req, res) => {
  const metadata = JSON.parse(fs.readFileSync('./metadata.json', 'utf8'));
  res.json(metadata);
});

app.listen(PORT, () => {
  console.log(`API escoltant al port ${PORT}`);
});
