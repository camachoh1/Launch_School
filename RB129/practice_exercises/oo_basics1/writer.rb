# Using the code from the previous exercise, add a setter method named name= . Then rename kitty to Luna and invoke greet again. 

class Cat 
  attr_reader :name
  attr_writer :name

  def initialize(name)
    @name = name 
  end

  def greet
    puts "Hello, My name is #{name}!"
  end 
end

kitty = Cat.new("Sophie")
p kitty.name #-> "Sophie"
p kitty.greet 
kitty.name = "Luna"
p kitty.name # -> Luna
p kitty.greet