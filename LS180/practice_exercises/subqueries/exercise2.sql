-- Subqueries exercise 2

SELECT name AS "Bid on Items" FROM items WHERE id IN (SELECT item_id FROM bids WHERE item_id is NOT NULL );