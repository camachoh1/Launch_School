-- Foreign Keys exercise 2

INSERT INTO products (name)
  VALUES ('Small bolt'), ('Large bolt');

INSERT INTO orders (product_id, quantity)
  VALUES (1, 10), (1, 25), (2, 15);