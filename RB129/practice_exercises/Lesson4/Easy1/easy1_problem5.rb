# which of these two classes has an instance variable and how do you know? 

=begin 
The Pizza class, we can tell it includes an instance variable because the @ preceding the @name variable. 

another way is using the instance_variables method on the objects of each class. the return value shows all instance variables in an array. 
=end 

class Fruit
  def initialize(name)
    name = name
  end
end 

class Pizza
  def initialize(name)
    @name = name
  end
end 

pizza = Pizza.new("cheese")
orange = Fruit.new("apple")

p pizza.instance_variables #=> [@name]
p orange.instance_variables #=> []