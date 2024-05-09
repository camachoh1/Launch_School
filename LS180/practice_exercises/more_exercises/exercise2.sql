-- SPOT WIKI exercise 40 

CREATE TABLE students (
  id serial PRIMARY KEY,
  name text,
  year_of_birth date, 
  phone_number int,
  class_id int
);

INSERT INTO students (name, year_of_birth, phone_number, class_id)
  VALUES('Harry', '1987-02-04', 909432987, 1),
  ('Ben', '1976-11-13', 099876567 , 2),
  ('Mary', '1995-03-21', 098787654, 3),
  ('Mary', '1995-03-21', 908675356, 2);

ALTER TABLE students
  ALTER COLUMN name SET default 'anonymous'

ALTER TABLE students
ADD CONSTRAINT valid_class_id CHECK (class_id > 0);

ALTER TABLE students
ADD CONSTRAINT unique_phone_number UNIQUE (phone_number);

ALTER TABLE students
ALTER COLUMN year_of_birth
SET NOT NULL;