=begin 
If we have a class such as the one below, explain what the @@cats_count variable does and how it works. What code would you need to write to test your theory? 

The @@cats_count variables is counting every intance of the Cat class. This is done by incrementing the value of @@cats_count by one every time the initialize method is executed. 

In order to test my theory, I would need to instantiate multiple Cat objects and then call the cats_count class method on our Cat class. 

=end

class Cat 
  @@cats_count = 0 

  def initialize(type)
    @type = type 
    @age = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end 

michi = Cat.new("gato") 
garbage = Cat.new("gata")

p Cat.cats_count
