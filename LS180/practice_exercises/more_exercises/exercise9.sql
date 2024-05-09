-- SPOT WIKI 14

CREATE TABLE teachers (
  id serial PRIMARY KEY,
  set_up_date text
);

ALTER TABLE teachers (
  ALTER COLUMN set_up_date TYPE date
  USING set_up_date::date
);