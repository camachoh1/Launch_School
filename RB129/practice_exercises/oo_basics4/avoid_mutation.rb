# The following code is flawed. it currently allows @name to be modified from outside the method via a destructive method call. Fix the code so that it returns a copy of the @name instead of a reference to it. 

class Person 
  def initialize(name)
    @name = name
  end

  def name
    @name.clone
  end 
end 

person1 = Person.new("James")
person1.name.reverse!
puts person1.name 