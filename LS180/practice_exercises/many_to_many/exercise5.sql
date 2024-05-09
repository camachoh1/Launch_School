-- Medium exercises M:M exercise 5:

SELECT customers.name, string_agg(services.description, ', ') AS services FROM services
  RIGHT JOIN customers_services
  ON services.id = customers_services.service_id
  RIGHT JOIN customers
  ON customers_services.customer_id = customers.id
  GROUP BY customers.id;