-- Medium exercises M:M exercise 3

SELECT customers.name FROM customers
  LEFT OUTER JOIN customers_services
  ON customers.id = customers_services.id
  WHERE customers_services.customer_id IS NULL