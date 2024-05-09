# the code below raises an exception. Examine the error message and alter the code so that it runs without error. 

class Animal
  attr_reader :diet, :superpower
  def initialize(diet, superpower)
    @diet = diet
    @superpower = superpower
  end

  def move
    puts "I'm moving"
  end

  def superpower
    puts "I can #{@superpower}!"
  end
end

class Fish < Animal
  def move
    puts "I'm swimming!"
  end
end

class Bird < Animal
end

class FlightlessBird < Bird
  def move
    puts "I'm running!"
  end
end

class SongBird < Bird
  def initialize(diet, superpower, song)
    super(diet, superpower) #added the parentheses to super in order to specify which arguments are we forwarding to the superclass.
    @song = song
  end
end

unicornfish = Fish.new(:herbivore, 'breathe underwater')
penguin = FlightlessBird.new(:carnivore, 'drink sea water')
p penguin.diet
p penguin.superpower
robin = SongBird.new(:omnivore, 'sing', 'chirp chirrr chirp chirp chirrrr')