-- Subqueries exercise 4

SELECT name FROM bidders WHERE EXISTS (SELECT FROM bids WHERE bids.bidder_id = bidders.id);