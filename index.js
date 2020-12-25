const express = require('express');
const Holidays = require('date-holidays');

const app = express(),
      bodyParser = require('body-parser'),
      port = 3080;

app.use(bodyParser.json());

const mesecArr = ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 
    'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'];

const hd = new Holidays();
hd.init('SI');


// PGDB!!!
let staff = [
    {"ime": "Jaka Presečnik", "emso": "23678493"},
    {"ime": "Janez A. Novak", "emso": "380350"}
];
let dateData = {
    "23678493": { datum: "2020-12-15T00:00",  od: "01:32", do: "2020-12-15T03:32", visinska: 0, dopust: false, bolniska: false}
};
let ime = 'Jaka Presečnik';
let imeDataMesec = [
      {od: "2020-12-01T22:30", do: "2020-12-01T23:30", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-02T22:30", do: "2020-12-03T07:30", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-03T21:30", do: "2020-12-04T05:00", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-04T12:30", do: "2020-12-04T18:00", odd: "2020-12-04T22:30", dod: "2020-12-05T03:00", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-05T22:30", do: "2020-12-06T03:00", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-07T22:30", do: "", visinska: 0, dopust: true, bolniska: false },
      {od: "2020-12-08T22:30", do: "", visinska: 0, dopust: false, bolniska: true },
      {od: "2020-12-15T12:30", do: "2020-12-15T14:00", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-16T01:30", do: "2020-12-16T03:30", odd: "2020-12-16T07:30", dod: "2020-12-16T18:00", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-20T01:30", do: "2020-12-20T03:30", odd: "2020-12-20T07:30", dod: "2020-12-20T18:00", visinska: 0, dopust: false, bolniska: false },
      {od: "2020-12-25T01:30", do: "2020-12-25T03:30", odd: "2020-12-25T07:30", dod: "2020-12-25T18:00", visinska: 0, dopust: false, bolniska: false },
];

// DOMOV.SERVICE.API ( getDatumData(), getOsebje() )
app.get('/api/date/staff', (req, res) => {
    res.json({datum: dateData, osebje: staff});
});

// OSEBA.SERVICE.API ( getMesecOsebaData() )
app.get('/api/mesec/emso', (req, res) => {

    let prazniki = hd.getHolidays(req.query.leto)
        .filter((praznik) => praznik.type === 'public' && new Date(praznik.date).getMonth() === req.query.mesec-1)
        .map((praznik) => {
            return new Date(praznik.date).toDateString();
        });

    res.json({
        ime, 
        data: imeDataMesec,
        prazniki,
        skupajDni: new Date(req.query.leto, req.query.mesec, 0).getDate(),
        mesec: mesecArr[req.query.mesec-1]})
});


app.listen(port, () => {
    console.log(`Listening on port: :${port}`);
})