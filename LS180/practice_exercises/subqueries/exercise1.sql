-- Subqueries Exercise 1

CREATE TABLE bidders (
  id serial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE items (
  id serial PRIMARY KEY,
  name text NOT NULL, 
  initial_price decimal(6,2) NOT NULL CHECK (initial_price BETWEEN 0.01 AND 1000.00),
  sales_price decimal(6,2) CHECK (sales_price BETWEEN 0.01 AND 1000.00)
);

CREATE TABLE bids (
  id serial PRIMARY KEY,
  bidder_id int NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
  item_id int NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  amount decimal(6,2) NOT NULL CHECK (amount BETWEEN 0.01 AND 1000.00)
);

CREATE INDEX ON bids (bidder_id, item_id);

\copy bidders FROM '~/launch_school/ls180/auction_csv_files/items.csv' WITH HEADER CSV

\copy items FROM '~/launch_school/ls180/auction_csv_files/items.csv' WITH HEADER CSV

\copy bids FROM '~/launch_school/ls180/auction_csv_files/bids.csv' WITH HEADER CSV