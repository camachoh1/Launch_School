-- medium exercises M:M exercise 4
SELECT DISTINCT services.description FROM customers_services
  RIGHT JOIN services
  ON services.id = customers_services.service_id
  WHERE customers_services.service_id IS NULL;