# Using the following code, add the appropiate accessor methods so that @name is returned with the added prefix "Mr"

class Person
  attr_writer :name
  def name
    "Mr. #{@name}"
  end


end

person1 = Person.new
person1.name = "James"
puts person1.name 