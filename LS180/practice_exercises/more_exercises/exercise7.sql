-- SPOT WIKI exercise 59  

CREATE TABLE students (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  date_of_birth date NOT NULL,
  grade char(2) CHECK (length(char) = 2)
);

INSERT INTO students (name, date_of_birth, grade)
  VALUES ('Eddie', '1986-01-01', 'A'),
  ('Maggie', '1975-04-11', 'B+'),
  ('Elanor', '1995-03-13', 'A-');

DELETE FROM students WHERE name = 'Elanor'

INSERT INTO students (name, date_of_birth, grade)
  VALUES ('John', '1994-08-09', 'A');

-- the id value for the "John" record will be 4. This is because the id column has a data type of serial. the serial data type will increase its value based on this last value of the sequence. Which is '3' in this case,  When 'John' is inserted into the database the value of id will be incremented automatically based on the previous value of id which was '3'. Making the id value for the "john" record '4'. Even if the record with id '3' is removed from the table. 