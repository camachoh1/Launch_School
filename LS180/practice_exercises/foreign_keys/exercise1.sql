-- Foreign Keys exercise 1

ALTER TABLE orders
  ADD CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id) 
  REFERENCES products(id);