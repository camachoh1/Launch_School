=begin 

If we have a class such as the one below, you can see in the make_one_year_older method we have used self. What does self refer to here? 

In this case self is referencing the @age instance variable. 
At this point we are accessing the setter method for age which allows us to edit the values of @age. 

In order to make clear that this is what we want to do, we need to add self prior to age. Otherwise, Ruby will treat the operation as a local variable initialization. 

=end 

class Cat
  attr_accessor :type, :age 

  def initialize(type)
    @type =  type 
    @age = 0
  end

  def make_one_year_older
    self.age += 1
  end
end 

