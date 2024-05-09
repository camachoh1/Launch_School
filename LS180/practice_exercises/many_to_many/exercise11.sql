-- M:M lesson exercise 11

ALTER TABLE books
  ALTER COLUMN title TYPE varchar(100),
  ALTER COLUMN author TYPE varchar(100);

INSERT INTO books (title, author)
  VALUES ('Lynn Sherr', 'Sally Ride: America''s First Woman in Space'), ('Meeru Dhalwala and Vikram Vij', 'Vij''s: Elegant and Inspired Indian Cuisine');

INSERT INTO categories (name)
  VALUES ('Space Exploration'), ('Cookbook'), ('Asian');

INSERT INTO books_categories (book_id, category_id)
  VALUES (4, 5), (4,1), (4,7), (5, 8), (5,1), (5, 9), (6, 2), (6,4);