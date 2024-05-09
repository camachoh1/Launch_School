#Using the following code, add two methods: generic_greeting and personal_greeting. The first method should be a class method and print a greeting that's generic to the class. The soceond method should be an insntance method and print a greeting that's custom to the object. 

class Cat
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.generic_greeting
    puts "Hi I am a cat"
  end

  def personal_greeting
    puts "Hello my name is #{name}"
  end
end

kitty = Cat.new("Sophie")

kitty.personal_greeting
Cat.generic_greeting