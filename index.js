const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Simulating a database with a array, it's just a sample
const array = [{
  first_name: 'Alefe',
  last_name: 'Souza',
  age: 21
}, {
  first_name: 'Rodrigo',
  last_name: 'Cardoso',
  age: 31
}];

app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get('/api/users', (req, res) => {
  /// Status 200 by default
  res.send(array);
});

app.get('/api/users/:index', (req, res) => {
  res.send(array[req.params.index]);
});

app.post('/api/users', (req, res) => {
  res.status(201);

  array.push(req.body);
  res.send(req.body);
});

app.put('/api/users/:index', (req, res) => {
  array[req.params.index] = req.body;

  res.send(req.body);
});

app.delete('/api/users/:index', (req, res) => {
  array.splice(req.params.index, 1);

  res.status(204);
  res.send(null);
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});
