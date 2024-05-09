# what will the last line of code return?

class Student
  def initialize(id, name)
    @id = id
    @name = name
  end

  def ==(other)
    self.id == other.id
  end

  private
  attr_reader :id, :name
end

rob = Student.new(123, "Rob")
tom = Student.new(456, "Tom")

p rob == tom 

# it will return a private error method this is because private method do not allow attributes from a class to be shared between instances. In order to make this code works, we need to change the private method by a protected method.