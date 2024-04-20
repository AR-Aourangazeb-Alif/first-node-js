const express = require('express');
const phones = require('./phones.json');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send(`Welcom to my Phone server. go to the path '/phones' to get phones api`)
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = Number(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};

    res.send(phone);

    console.log(`The id of the phone is: ${id}`)
})

app.listen(port, () => {
    console.log(`My phone server is running on port: ${port}`);
})