=begin 

if we have a class such as the one below, in the name of the cats_count method we have used self. What does self refer to in this context? 


  it references the class itself. This is necessary in order to initialize class methods. 
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

