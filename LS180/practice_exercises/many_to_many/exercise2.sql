-- Practice exercises M:M: 
-- Step1: create primary entities 
CREATE TABLE customers (
  id serial PRIMARY KEY,
  name text NOT NULL, 
  payment_token char(8) NOT NULL CHECK (payment_token ~ '^[A-Z]{8}$')
);

CREATE TABLE services (
  id serial PRIMARY KEY,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price > 0.0)
);

-- Inserting data into tables 
INSERT INTO customers (name, payment_token)
  VALUES ('Pat Johnson', 'XHGOAHEQ'),
  ('Nancy Monreal', 'JKWQPJKL'),
  ('Lynn Blake', 'KLZXWEEE'),
  ('Chen Ke-Hua', 'KWETYCVX'),
  ('Scott Lakso', 'UUEAPQPS'),
  ('Jim Pornot', 'XKJEYAZA');

INSERT INTO services (description, price)
  VALUES ('Unix Hosting', 5.95),
  ('DNS', 4.95),
  ('Whois Registration', 1.95),
  ('High Bandwidth', 15.00),
  ('Business Support', 250.00),
  ('Dedicated Hosting', 50.00),
  ('Bulk Email', 250.00),
  ('One-to-one Training', 999.00);

-- Creating a join table 

CREATE TABLE customers_services (
  id serial PRIMARY KEY,
  customer_id int NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  service_id int NOT NULL REFERENCES services(id),
  UNIQUE(customer_id, service_id)
);

-- inserting data into the join table

INSERT INTO customers_services (customer_id, service_id)
  VALUES (1,1), (1,2), (1,3), (3,1), (3,2), (3,3), (3, 4), (3,5), (4, 1), (4,4), (5, 1), (5,2), (5,6), (6, 1), (6,6), (6,7);