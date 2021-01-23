CREATE USER golte
PASSWORD 'trijeploti2021';

CREATE DATABASE golte_ure
OWNER golte;

CREATE TABLE zaposleni(
    emso INT, 
    ime VARCHAR(50),
    PRIMARY KEY(emso)
    );

INSERT INTO zaposleni VALUES(23678493, 'Jaka Presecnik');
INSERT INTO zaposleni VALUES(23654765, 'Muca Maca');

/** -.-'-.-'-.-'-.-**/

CREATE TABLE delovnicas(
    emso INT,
    datum DATE,
    od VARCHAR(25),
    till VARCHAR(25),
    odd VARCHAR(25),
    dod VARCHAR(25),
    visinska INT,
    dopust BOOLEAN,
    bolniska BOOLEAN,
    dezurni BOOLEAN,
    PRIMARY KEY (emso, datum)
);
INSERT INTO delovnicas VALUES(
    23678493, '2021-01-22', '05:30', '2021-01-22T12:30:00',
    null, null, 3, false, false, false
);
INSERT INTO delovnicas VALUES(
    23647837, '2021-01-22', null, null,
    null, null, 0, true, false, false
);