-- Creating a one to many relationship between two tables shapes and colors. a shape can have many  colors.

CREATE TABLE colors1 (
  id serial PRIMARY KEY, 
  color text NOT NULL
);

CREATE TABLE shapes1 (
  id serial PRIMARY KEY,
  shape varchar(20) NOT NULL,
  color int REFERENCES colors1(id)
);

INSERT INTO colors1 (color)
  VALUES ('red'), ('blue'), ('green');

INSERT INTO shapes1 (shape, color)
  VALUES ('torus', 1), ('cube', 1), ('sphere', 3);

DROP TABLE shapes1;
DROP TABLE colors1;
