-- SPOT WIKI 60

-- example of creating an auto incrementing integer without using `serial`:

-- CREATE SEQUENCE tablename_colname_seq AS integer;
-- CREATE TABLE tablename (
--     colname integer NOT NULL DEFAULT nextval('tablename_colname_seq')
-- );
-- ALTER SEQUENCE tablename_colname_seq OWNED BY tablename.colname;

CREATE SEQUENCE students_id_seq AS integer;

CREATE TABLE students (
  id integer NOT NULL UNIQUE DEFAULT nextval('students_id_seq'),
  name varchar(200) NOT NULL,
  grade char(2)
);