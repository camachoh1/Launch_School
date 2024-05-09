-- JOINS exercise 2

SELECT customers.id, customers.email, count(DISTINCT tickets.event_id) FROM tickets
  JOIN customers
  ON customers.id = tickets.customer_id
  GROUP BY customers.id, customers.email
  HAVING count(DISTINCT tickets.event_id) = 3;