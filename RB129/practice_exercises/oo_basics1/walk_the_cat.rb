# Using the following code, create a module name Walkable that contains a method named walk. This method should print "Lets go for a walk!" when invoked. Include Walkable in Cat and invoke walk on kitty. 

module Walkable
  def walk 
    puts "Lets go for a walk!"
  end
end 


class Cat
  include Walkable  
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hi I am #{name} the Cat"
  end
end 

kitty = Cat.new("Sophie")
kitty.greet 
kitty.walk