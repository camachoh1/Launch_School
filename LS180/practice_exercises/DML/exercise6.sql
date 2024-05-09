-- DML exercise 6

SELECT devices.name, count(parts.device_id) FROM devices
  INNER JOIN parts
  ON devices.id = parts.device_id
  GROUP BY devices.name
  ORDER BY devices.name DESC;