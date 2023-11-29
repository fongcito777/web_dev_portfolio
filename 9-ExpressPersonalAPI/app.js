const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const names = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  console.log(`Received name: ${name}`);

  names.push(name);
  console.log('All names:', names);

  res.sendFile(__dirname + '/views/index.html');
});

app.get('/wazzup', (req, res, next) => {
  const index = parseInt(req.query.index);
  if (isNaN(index) || index < 0 || index >= names.length) {
    const err = new Error('Index out of range');
    err.status = 400;
    next(err);
  } else {
    res.sendFile(__dirname + '/views/wazzup.html');
  }
});

app.post('/task', (req, res) => {
  const task = req.body.task;
  console.log(`Received new task: ${task}`);
  res.redirect('/');
});

app.delete('/task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  console.log(`Deleting task with ID: ${taskId}`);
  res.redirect('/');
});

app.put('/greet/:name', (req, res) => {
  const newName = req.params.name;
  console.log(`Received name (PUT): ${newName}`);
  names.push(newName);
  res.json({ names });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(`Error: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});