-- M:M lesson exercise 2

SELECT books.id, books.author, string_agg(categories.name, ', ') AS categories FROM books
  JOIN books_categories
  ON books.id = books_categories.book_id
  JOIN categories
  ON books_categories.category_id = categories.id
  GROUP BY books.id ORDER BY books.id;