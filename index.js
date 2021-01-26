const express = require('express');
const Holidays = require('date-holidays');

const app = express(),
      db = require('./db');
      bodyParser = require('body-parser'),
      port = 3080;

app.use(bodyParser.json());

const mesecArr = ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 
    'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'];

const hd = new Holidays();
hd.init('SI');


// PGDB!!!

let imeDataMesec = [
      {od: "2021-01-01T07:30", do: "2021-01-01T12:30", odd:"2021-01-01T18:00", dod:"2021-01-01T22:30", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-02T22:30", do: "2021-01-03T07:30", visinska: 0, dopust: false, bolniska: false },
      {od: "2021-01-03T21:30", do: "2021-01-04T01:00", odd: "2021-01-04T03:30", dod: "2021-01-04T05:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-04T12:30", do: "2021-01-04T18:00", odd: "2021-01-04T22:30", dod: "2021-01-05T03:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-05T22:30", do: "2021-01-06T03:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-07T08:30", do: "2021-01-07T12:30", odd:"2021-01-08T03:30", dod:"2021-01-08T05:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-08T22:30", do: "", visinska: 0, dopust: false, bolniska: true, dezurni: false },
      {od: "2021-01-09T12:30", do: "2021-01-10T01:00", odd: "2021-01-10T03:00", dod: "2021-01-10T05:00",visinska: 2, dopust: false, bolniska: false, dezurni: true },
      {od: "2021-01-10T07:30", do: "2021-01-10T14:00", odd:"2021-01-10T18:00", dod:"2021-01-10T22:30", visinska: 2, dopust: false, bolniska: false, dezurni: true },
      {od: "2021-01-11T21:30", do: "2021-01-12T01:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-15T12:30", do: "2021-01-15T14:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-16T01:30", do: "2021-01-16T03:30", odd: "2021-01-16T07:30", dod: "2021-01-16T18:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-20T01:30", do: "2021-01-20T03:30", odd: "2021-01-20T07:30", dod: "2021-01-20T18:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-25T01:30", do: "2021-01-25T03:30", odd: "2021-01-25T07:30", dod: "2021-01-25T18:00", visinska: 0, dopust: false, bolniska: false, dezurni: false },
      {od: "2021-01-26T00:00", do: "", visinska: 0, dopust: true, bolniska: false, dezurni: false },
];

// DOMOV.SERVICE.API ( getDatumData(), getOsebje(), getMesecData() )
// DomovComponent
app.get('/api/date/staff', async (req, res) => {
    let dateData =  {};
    const osebje = await db.query('SELECT * FROM zaposleni');
    const danData = await db.query('SELECT * FROM delovnicas WHERE datum = $1', [req.query.datum]);
    osebje.rows.forEach(el => {
        dateData[el.emso] = danData.rows.filter(id => id.emso === el.emso)[0];
    });
    res.json({datum: dateData, osebje: osebje.rows});
});
app.post('/api/date/post', async (req, res) => {
    const {emso, dan, data} = req.body;
    await db.query(
        'INSERT INTO delovnicas VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [emso, dan, data.od, data.do, data.odd, data.dod, data.visinska, data.dopust, data.bolniska, data.dezurni]);
        console.log('Shranjeno!');
});
app.put('/api/date/update', async (req, res) => {
    const {emso, dan, data} = req.body;
 
    await db.query('UPDATE delovnicas SET od = $1, till = $2, odd = $3, dod = $4, visinska = $5, dopust = $6, bolniska = $7, dezurni = $8 WHERE emso = $9 AND datum = $10',
    [data.od, data.do, data.odd, data.dod, data.visinska, data.dopust, data.bolniska, data.dezurni, emso, dan]);
    console.log('Posodobljeno!');
});

// PregledComponent
app.get('/api/leto/mesec', async (req, res) => {
    let mesecData = {};
    const zacetekMeseca = req.query.leto+ '-'+req.query.mesec+'-1';
    const konecMeseca = req.query.leto + '-' + req.query.mesec +1 + '-1';
    let prazniki = hd.getHolidays(req.query.leto)
        .filter((praznik) => praznik.type === 'public' && new Date(praznik.date).getMonth() === req.query.mesec-1)
        .map((praznik) => {
            return new Date(praznik.date).getDate();
        });
    const osebje = await db.query('SELECT * FROM zaposleni');
    const data = await db.query('SELECT * FROM delovnicas WHERE datum >= $1 AND datum < $2', [zacetekMeseca, konecMeseca]);

    osebje.rows.forEach(el => {
        mesecData[el.emso] = data.rows.filter(id => id.emso === el.emso);
    });

    res.json({mesecData, osebje: osebje.rows, prazniki});
});

// DodajComponent
app.post('/api/dodaj', async (req, res) => {
    const osebje = await db.query('SELECT emso FROM zaposleni');
    const emsoArr = Object.keys(osebje.rows).map((emso) => osebje.rows[emso].emso);
    console.log(req.body);
    if(emsoArr.includes(parseInt(req.body.emso))) {
        console.log('Emso že obstaja!')
        return res.send({msg: 'Emšo že obstaja!'});
    }else {
        await db.query('INSERT INTO zaposleni VALUES($1, $2)', [parseInt(req.body.emso), req.body.ime]);
        console.log('Shranjeno!');
        res.send({msg: 'Shranjeno'});
    }
})

// OSEBA.SERVICE.API ( getMesecOsebaData() )
app.get('/api/mesec/emso', async (req, res) => {
    const zacetekMeseca = req.query.leto+ '-'+req.query.mesec+'-1';
    const konecMeseca = req.query.leto + '-' + req.query.mesec +1 + '-1';
    const osebje = await db.query('SELECT ime FROM zaposleni WHERE emso = $1', [req.query.emso]);
    const mesecData = await db.query('SELECT * FROM delovnicas WHERE emso = $1 AND datum >= $2 AND datum < $3', [req.query.emso, zacetekMeseca, konecMeseca]);

    let prazniki = hd.getHolidays(req.query.leto)
        .filter((praznik) => praznik.type === 'public' && new Date(praznik.date).getMonth() === req.query.mesec-1)
        .map((praznik) => {
            return new Date(praznik.date).toDateString();
        });

    res.json({
        ime: osebje.rows[0].ime,
        data: mesecData.rows,
        prazniki,
        skupajDni: new Date(req.query.leto, req.query.mesec, 0).getDate(),
        mesec: mesecArr[req.query.mesec-1]})
});


app.listen(port, () => {
    console.log(`Listening on port: :${port}`);
})