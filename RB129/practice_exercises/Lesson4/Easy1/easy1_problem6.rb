#what could we add to the class below to access the instance variable @volume? 

class Cube
  attr_reader :volume 
  def initialize(volume)
    @volume = volume 
  end
end 

# another way to access the instance variable without attr_* methods and without creating our own getter method. 

class Cube
  def initialize(volume)
    @volume = volume
  end 
end 

pico = Cube.new(6000)
pico.instance_variable_get("@volume") #=> 6000