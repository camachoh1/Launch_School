-- Exercises using tables representing M:M relationships.
CREATE TABLE directors_films (
  id serial PRIMARY KEY,
  director_id int NOT NULL REFERENCES directors(id) ON DELETE CASCADE,
  film_id int NOT NULL REFERENCES films(id) ON DELETE CASCADE,
  UNIQUE(director_id, film_id)
);

INSERT INTO directors_films (director_id, film_id)
VALUES (1,1), (2,2), (3,3), (4,4), (5,5), (6,6), (3,7), (7,8), (8,9), (4, 10);

SELECT films.title, directors.name FROM films
  INNER JOIN directors_films
  ON films.id = directors_films.film_id
  INNER JOIN directors
  ON directors_films.director_id = directors.id
  ORDER BY films.title;

INSERT INTO films (title, year, genre, duration)
  VALUES ('Fargo', 1996, 'comedy', 98),
  ('No Country for Old Men', 2007, 'western', 122),
  ('Sin City', 2005, 'crime', 124),
  ('Spy Kids', 2001, 'scifi', 88);

  INSERT INTO directors (name)
    VALUES ('Joel Coen'), ('Ethan Coen'), ('Frank Miller'), ('Robert Rodriguez');

INSERT INTO directors_films (director_id, film_id)
VALUES (9, 11), (9, 12), (10,12), (11,13), (12,13), (12, 14);

SELECT directors.name AS director, count(films.id) AS films 
  FROM directors
  INNER JOIN directors_films
  ON directors.id = directors_films.director_id
  INNER JOIN films
  ON directors_films.film_id = films.id
  GROUP BY director
  ORDER BY films DESC, director;