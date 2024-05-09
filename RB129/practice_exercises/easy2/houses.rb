#Assume that you have the following input and output. Modify the house class so that the program will work. you are permitted to define only one new method in the House. 


class House
  attr_reader :price
  include Comparable 

  def initialize(price)
    @price = price
  end

  def <=>(other)
    price <=> other.price
  end 
end

home1 = House.new(100_000)
home2 = House.new(150_000)



puts "Home 1 is cheaper" if home1 < home2
puts "Home 2 is more expensive" if home2 > home1

