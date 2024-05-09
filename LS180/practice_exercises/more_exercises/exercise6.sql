-- SPOT WIKI exercise 56:

CREATE TABLE employees (
  id serial PRIMARY KEY,
  name text NOT NULL,
  salary numeric(6,2), 
  to_pay numeric(6,2)
);

INSERT INTO employees (name, salary, to_pay)
  VALUES ('Chris Rock', 2000.00, 2000.00),
  ('Benny George', 2500.00, 2500.00),
  ('Melissa Fu', 3000.00, 3000.00);

UPDATE employees
  SET to_pay = ROUND(to_pay + (to_pay * 10) / 100, 2);