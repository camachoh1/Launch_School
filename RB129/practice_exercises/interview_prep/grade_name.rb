# Running the following code will not produce the output shown on the last line. Why not? What would we need to change, and what does this demonstrate about instance variables?

class Student
  attr_accessor :grade, :name

  def initialize(name, grade=nil)
    @name = name
  end 
end

ade = Student.new
p ade # => #<Student:0x00000002a88ef8 @grade=nil, @name="Adewale">

=begin

it wont output the desired output because the instance variable @grade has not been initialized anywhere in the codebase.

This is why the output only includes the @name instance variable. 
In order to fix this we would need to initialize @grade instance variable. 

instance variables must be initialized in order for them to appear as states in our objects. 

=end