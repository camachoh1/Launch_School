-- JOINS exercise 3

SELECT events.name AS event, events.starts_at, sections.name AS section, seats.row,  seats.number AS seat FROM sections
  JOIN seats
  ON sections.id = seats.section_id
  JOIN tickets
  ON seats.id = tickets.seat_id
  JOIN events
  ON tickets.event_id = events.id
  JOIN customers
  ON tickets.customer_id = customers.id
  WHERE customers.email = 'gennaro.rath@mcdermott.co';