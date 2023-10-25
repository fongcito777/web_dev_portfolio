const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, './html') });
});

app.post('/calculate', (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = (weight / (height ** 2)) * 10000;
    res.send(`<h1>Your BMI is: ${bmi.toFixed(2)}</h1>`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});