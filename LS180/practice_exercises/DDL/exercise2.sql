-- DDL exercise 2

ALTER TABLE planets
  ADD COLUMN star_id int NOT NULL REFERENCES stars(id);