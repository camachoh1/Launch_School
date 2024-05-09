-- M:M lesson exercise 5

SELECT categories.name, count(books.id) AS book_count, string_agg(books.title, ', ') AS book_titles FROM categories
  JOIN books_categories 
  ON categories.id = books_categories.category_id
  JOIN books
  ON books_categories.book_id = books.id
  GROUP BY categories.name
  ORDER BY categories.name;