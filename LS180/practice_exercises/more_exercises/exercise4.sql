-- SPOT WIKI exercise 53

CREATE TABLE students (
  id serial PRIMARY KEY,
  updated timestamp DEFAULT NOW(),
  year_of_acceptance int DEFAULT 2021
);