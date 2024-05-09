# What is output and returned, and why? Without chaning the current structure, What would we need to change so that the last line outputs `”Sir Gallant is speaking.”`? 

class Character
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def speak
    "#{@name} is speaking."
  end
end

class Knight < Character
  def name
    "Sir " + super
  end
end

sir_gallant = Knight.new("Gallant")
p sir_gallant.name 
p sir_gallant.speak 

=begin 
 This code returns sir gallant on the first line. 

 This is because we are inheriting the initialize, and getter method from the superclass. 

 When we instantiated a new Kight object, the name gallant was passed in as argument, this name was then stored as state in the instance variable @name provided by the superclass. 

 In the knight class a new name method is created. This method extends the functionality of the getter method provided by the attr_accessor from the superclass. This is why when name is called on sir_gallant we get Sir Gallant returned.

 The speak method invocation on the following line returns Gallant is speaking. This is because the speak method references the instance variable name. if we wanted it to return sir gallant is speaking, we would need to prepend self so it references the getter method whith extended functionlality from the subclass and not just reference the instance variable itself.

 This is a good example as to why it is useful to reference the getter methods rather than the instance variable itself. 

 by referencing the instance variable we are bbypasing the extended functionality provided by the name method from the knight class. 
=end 