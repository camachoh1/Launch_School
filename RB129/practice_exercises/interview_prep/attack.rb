
class Barbarian 
  def initialize(name, hitpoints)
    @name = name
    @hitpoints = hitpoints
  end

  def attacks
    "attacks!"
  end
end

class Monster < Barbarian
  def initialize(name, hitpoints)
    @name = name
    @hitpoints = hitpoints
  end
end


conan = Barbarian.new("Conan", 50)
zombie = Monster.new("Fred", 100)

p conan.attacks
p zombie.attacks

# We expected the code to output
#=> "attacks!"
#=> "attacks!"

#=> Instead we raise an error.  What would be the best way to fix this implementation? Why?