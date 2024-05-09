
-- Medium exercises M:M exercise 7

SELECT SUM(price) FROM services
  JOIN customers_services
  ON services.id = customers_services.service_id;