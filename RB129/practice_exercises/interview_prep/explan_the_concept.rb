# what concept does the following code aim to demonstrate?

module Greet
  def greet(message)
    puts message
  end
end

class Teacher
  include Greet
end

class Student
  include Greet
end

tom = Teacher.new
rob = Student.new

tom.greet("bonjour")
rom.greet("hello")

=begin
The code above is aiming to demonstrate the use of modules as interface inheritance.

Here we have two classes Teacher and Student. 
both classes have a common behaviour which is the habilit to greet.

since this behaviour is common between the classes, instead of having each class house the same method, it is exported to the module.

We then use the include method in order to mix in the behaviour into the classes that need it. 

it is worth to point out that interface inheritance aims to model a has a relationship, or a relationship of association. 

Both classes have the ability to greet so we mix in the behaviour in them. 

=end 