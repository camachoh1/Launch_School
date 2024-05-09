-- 1:M lesson exercise 4

ALTER TABLE contacts
  ADD CONSTRAINT unique_number UNIQUE (number);