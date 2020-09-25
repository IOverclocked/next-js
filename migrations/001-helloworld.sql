-- Up
CREATE TABLE Person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('Mike', 'mike@gamil.com');
INSERT INTO Person (name, email) values ('John', 'john@gamil.com');

INSERT INTO Vehicle (brand, model, ownerId) values ('Audi', 'RS7', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('Porshe', 'Panamera', 2);
INSERT INTO Vehicle (brand, model, ownerId) values ('Ford', 'Fiest', 2);
INSERT INTO Vehicle (brand, model, ownerId) values ('Audi', 'A4', 2);
INSERT INTO Vehicle (brand, model, ownerId) values ('BMW', 'M3', 1);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;