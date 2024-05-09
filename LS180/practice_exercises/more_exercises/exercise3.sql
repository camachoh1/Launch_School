-- SPOT WIKI exercise 45 

-- Creating table
CREATE TABLE students (
  id serial PRIMARY KEY,
  name text NOT NULL,
  date_of_birth text,
  phone_number text,
  average_points int 
);

-- inserting values into table
INSERT INTO students (name, date_of_birth, phone_number, average_points)
  VALUES ('harry', '1987-02-04', '988554445', 1), ('ben', '1976-11-13', '55887446', 6);


-- changing data types
ALTER TABLE sudents
  ALTER COLUMN name TYPE varchar(50);

ALTER TABLE students
  ALTER COLUMN date_of_birth TYPE date
  USING date_of_birth::date; 

ALTER TABLE students
  ALTER COLUMN phone_number TYPE int
  USING phone_number::integer;

ALTER TABLE students
  ALTER COLUMN average_points TYPE numeric;

ALTER TABLE students
  ADD CHECK (average_points > 0.0 AND average_points < 10.0);


-- Here I added a default value when so there were no clashes with the NOT NULL constraint. 
ALTER TABLE students
  ADD COLUMN highest_grade char(1) NOT NULL CHECK (length(highest_grade) = 1) DEFAULT 'A';

-- changing data type from a single character to an enumerable type: 

-- creating enumerable object with the expected values: 
CREATE TYPE valid_grades AS ENUM ('A', 'B', 'C', 'D', 'F'); 

-- Droping the default values since they will clash with the values enumerable object. 
ALTER TABLE students
  ALTER COLUMN highest_grade DROP DEFAULT;

-- Dropping the CHECK constraint since it uses the length() aggregate function which does not work with the enumerable object.
ALTER TABLE students
  DROP CONSTRAINT students_highest_grade_check;

-- changing the data type. 
ALTER TABLE students
  ALTER COLUMN highest_grade TYPE valid_grades
  USING highest_grade::valid_grades;