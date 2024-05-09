# define a class of your choice with the following:

# Constructor method that initializes 2 instance variables.
# Instance method that outputs an interpolated string of those variables.
# Getter methods for both (you can use the shorthand notation if you want).
# Prevent instances from accessing these methods outside of the class.
# Finally, explain what concept(s) you’ve just demonstrated with your code.

class Dog
  def initialize(name, age)
    @name = name
    @age = age
  end

  def greet
    "my name is #{name} and I am #{age} years old"
  end

  private
  attr_reader :name, :age
end

=begin 

This code example demonstrates the concept of Method Access Control specifically the use of the access modifier Private.

Private methods restrict the access of the methods defined under it to the class body. meaning they cannot be accessed outside the class body. The only way to access these methods is by referencing them in a public method within the class body. 