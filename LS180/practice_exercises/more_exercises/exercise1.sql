-- SPOT WIKI exercise 38

SELECT students.name FROM students 
  INNER JOIN classes
  ON students.class_id = classes.id
  WHERE (year_of_birth BETWEEN 1990-01-01 AND 1999-12-31) AND class_id = 2