-- 1:M lesson exercise 2

SELECT calls.when, calls.duration, contacts.first_name FROM calls 
  INNER JOIN contacts
  ON calls.contact_id = contacts.id
  WHERE first_name != 'William' AND last_name != 'Swift';