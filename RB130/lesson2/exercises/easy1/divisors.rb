=begin 

Write a method that returns a list of all of the divisors of the positive integer passed in as argument. The return value can be in any sequence you wish.

=end

def divisors(num)
  results = []

  (1..num).select {|n| num % n == 0}
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute