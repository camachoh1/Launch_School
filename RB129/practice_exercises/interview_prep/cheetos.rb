# what would cat.name return after the last line of code is executed?

class Cat
  attr_accessor :name

  def set_name
    name = "Cheetos"
  end
end

cat = Cat.new
p cat.set_name #=> cheetos

#this returns cheetos because here we are not trying to access the instance variable name. instead, we are trying to access the local variable stored in the instance method set name. 

# cat.name though would return nil. This is because at any point in this code example we are initializing the instance variable @name. 

# if we wanted to initialize the instance variable, we would need to prepend self to name in order to show ruby that we are trying to call our setter method and not initializing a local variable. 

