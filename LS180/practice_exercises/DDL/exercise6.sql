-- DDL exercise 6

ALTER TABLE stars
DROP CONSTRAINT stars_spectral_type_check1;

CREATE TYPE valid_spectral_type AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
  ALTER COLUMN spectral_type TYPE valid_spectral_type
  USING spectral_type::valid_spectral_type;