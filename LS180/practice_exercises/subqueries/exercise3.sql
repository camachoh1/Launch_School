-- Subqueries exercise 3

SELECT name AS "Not Bid On" FROM items WHERE id NOT IN (SELECT item_id FROM bids WHERE item_id is NOT NULL );