-- Foreign Keys exercise 8

CREATE TABLE reviews (
  id serial PRIMARY KEY,
  product_id int REFERENCES products(id),
  review text
);