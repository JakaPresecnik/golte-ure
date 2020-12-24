const express = require('express');
const app = express(),
      bodyParser = require('body-parser'),
      port = 3080;

app.use(bodyParser.json());


const staff = [
    {"ime": "Jaka Presečnik", "emso": "23678493"},
    {"ime": "Janez A. Novak", "emso": "380350"}
];
const dateData = {
    "23678493": { datum: "2020-12-15T00:00",  od: "01:32", do: "2020-12-15T03:32", visinska: 0, dopust: false, bolniska: false}
};


app.get('/api/staff', (req, res) => {
    res.json(staff);
});

app.get('/api/date', (req, res) => {
    console.log('/date works')
    res.json(dateData);
})

app.get('/api', (req, res) => {
    console.log('/ works')
    res.send('works');
});

app.listen(port, () => {
    console.log(`Listening on port: :${port}`);
})