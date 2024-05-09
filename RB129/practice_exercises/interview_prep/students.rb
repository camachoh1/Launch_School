# what will the following code output? why?

class Student
  attr_reader :id

  def initialize(name)
    @name = name
    @id
  end

  def id=(value)
    self.id = value
  end
end

tom = Student.new("Tom")
tom.id = 45

# returns an error because we are trying to access a setter method on line 10 when we prepend self to id. In this case, we have to attr_writer which means we need to assign the new value in id= using the instance variabe.


# The reason the previous code did not work was that "self.id=" is in fact a method call, which 
# happened to be named exactly the same as the method from where it was being invoked.
# "self.id=(value)" is the same as "id=(value)", which causes a recursive loop and resultant SystemStackError. 
