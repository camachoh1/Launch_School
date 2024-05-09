-- SPOT WIKI exercise 55:

CREATE TABLE students (
  id serial PRIMARY KEY,
  name text NOT NULL,
  date_of_birth date NOT NULL,
  grade char(2)
);

INSERT INTO students (name, date_of_birth, grade)
  VALUES ('Eddie', '1986-01-01', 'A'),
  ('Maggie', '1975-04-11', 'B+'),
  ('Elenore', '1995-03-13', 'A-');

UPDATE students
  SET grade = 'A+';

ALTER TABLE students
  ADD COLUMN classes text;

INSERT INTO students (name, date_of_birth, grade, classes)
  VALUES ('Johnny', '1987-07-23', 'C-', 'French');


UPDATE students
  SET classes = 'History'
  WHERE name = 'Elenore';