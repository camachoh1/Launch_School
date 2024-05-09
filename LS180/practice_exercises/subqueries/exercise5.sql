-- subqueries exercise 5

SELECT max(bid_counts.count) FROM
  (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts; -- practice again