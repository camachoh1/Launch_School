-- JOINS exercise 1

SELECT events.name, count(tickets.customer_id) AS popularity FROM tickets
  JOIN events
  ON tickets.event_id = events.id
  GROUP BY events.name
  ORDER BY popularity DESC;