=begin 

when objects are created they are a separate realization of a particula class. 

  Given the class below, how do we create two different instances of this class with separate names and ages? 

=end

class AngryCat 
  def initialize(age, name)
    @age = age
    @name = name
  end

  def age
    puts @age
  end

  def name 
    puts @name
  end

  def hiss
    puts "hissssss!!"
  end
end 

garbage = AngryCat.new(5,"coleto")
bruto = AngryCat.new(8, "bruto")


