# Using the code from the previous exercise, replace the getter and setter methods using Ruby shorthand. 


class Cat 
  attr_accessor :name

  def initialize(name)
    @name = name 
  end

  def greet
    puts "Hi I am #{name} the Cat"
  end
end

kitty = Cat.new("Sophie")
p kitty.name
kitty.greet

kitty.name = "Luna"
p kitty.name 
kitty.greet