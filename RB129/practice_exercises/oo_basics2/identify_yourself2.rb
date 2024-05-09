# Update the following code so that it prints I'm Sophie! when invokes puts kitty. 

class Cat
  attr_reader :name

  def initialize(name)
    @name = name
  end 

  def to_s
    "I'm #{name}"
  end
end

kitty = Cat.new("Sohphie")
puts kitty 