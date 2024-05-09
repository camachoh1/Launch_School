
# From Joseph Ochoa
# give class Barbarian the functionality of the Monster instance attack method:
  # If you used class inheritance, now try doing it without class inheritance directly.
  # If you used modules, now try not using modules
  # If you used duck typing, now don't use duck typing 



  class Monster
    def attack
      "attacks!"
    end
  end
  
  class Barbarian
    attr_reader :monster
    def initialize(monster)
      @monster = monster
    end
  end


conan = Barbarian.new(Monster.new)
p conan.monster.attack
