#Using the code from the previous exercise, move the greeting from the initialize method to an instance method name greet that proints the greeting when invoked. 

class Cat
  def initialize(name)
    @name = name 
  end

  def greet 
    puts "Hi I am #{@name} the cat!"
  end 
end

kitty = Cat.new("Sophie")

kitty.greet