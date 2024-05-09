-- DDL exercise 7

ALTER TABLE planets
  ALTER COLUMN mass TYPE numeric;

ALTER TABLE planets
  ALTER COLUMN mass
  SET NOT NULL;

ALTER TABLE planets
  ADD CHECK (mass >= 0 );

ALTER TABLE planets
  ALTER COLUMN designation
  SET NOT NULL