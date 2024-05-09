
-- Medium exercixes M:M exercise 6

SELECT services.description, count(customers_services.customer_id) FROM services
  JOIN customers_services
  ON services.id = customers_services.service_id
  GROUP BY services.description
  HAVING (count(customers_services.customer_id) >= 3)
  ORDER BY description;