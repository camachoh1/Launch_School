
-- Foreign Keys exercise 3

SELECT orders.quantity, products.name FROM orders
  JOIN products
  ON orders.product_id = products.id;