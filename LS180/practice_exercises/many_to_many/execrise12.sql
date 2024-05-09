-- M:M lesson exercise 4

ALTER TABLE books_Categories
  ADD CONSTRAINT unique_book_category_id UNIQUE (book_id, category_id);
