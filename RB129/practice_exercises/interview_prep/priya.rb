# In the above code snippet, we want to return `”A”`. What is actually returned and why? How could we adjust the code to produce the desired result?

# class Student
#   attr_accessor :name, :grade

#   def initialize(name)
#     @name = name
#     @grade = nil
#   end
  
#   def change_grade(new_grade)
#     grade = new_grade
#   end
# end

# priya = Student.new("Priya")
# priya.change_grade('A')
# p priya.grade 


=begin

This will return nil as a return value of priya.grade. This is because in the instance method change_grade the value of new grade is being assigned to the grade local variable rather than the @grade instance variable. 

In order to assign the value to our instance variable, we need to call our setter method prepending using self.grade = new_grade
We use self in order to disambiguate a local variable initialization from a setter method call. 

=end

class Animal
  def initialize(name)
    @name = name
  end
end

class Dog < Animal
  def initialize(name)
  end

  def dog_name
    "bark! bark! #{@name} bark! bark!"
  end
end

teddy = Dog.new("Teddy")
puts teddy.dog_name   