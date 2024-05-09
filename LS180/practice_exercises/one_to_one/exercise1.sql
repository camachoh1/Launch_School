--Creating a 1:1 relationship between a clients table and a client_address table. (one client has one address)

-- 

CREATE TABLE clients (
  id serial PRIMARY KEY,
  name text NOT NULL,
  phone_number int NOT NULL,
  email text CHECK (length(email) > 0)
  );

CREATE TABLE client_address (
  client_id int PRIMARY KEY REFERENCES clients(id),
  street varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  province varchar(50) NOT NULL,
  postal_code text NOT NULL
);

INSERT INTO clients (name, phone_number, email)
  VALUES ('Harold Camacho', 445332563, NULL),
  ('Pedro Gonzales', 344665521, 'pedro@coleto.com');

INSERT INTO client_address 
  VALUES (1, '50 goodview road', 'Toronto', 'ON', 'M2J 2K6'),
  (2, '225 keele street', 'toronto', 'ON', 'M3T, 3J4');

SELECT clients.name, client_address.* FROM clients
  INNER JOIN client_address
  ON clients.id = client_address.client_id;

DROP TABLE clients;
DROP TABLE client_address;