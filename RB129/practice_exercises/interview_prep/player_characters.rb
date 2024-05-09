# without running the code, determine what the output will be.

class PlayerCharacter
  attr_reader :name
  def initialize(name, hitpoints)
    @name = name 
    @hitpoints = hitpoints
  end
end

class Barbarian < PlayerCharacter
  def initialize(name, hitpoints)
    super(name, hitpoints)
  end
end

class Summoner < PlayerCharacter
  #all summoners have 100 manapoints

  def initialize(name, hitpoints)
    super(name, hitpoints, manapoints)
  end
end

conan = Barbarian.new("Conan", 50)
gandalf = Summoner.new("Gandalf", 25)

p conan.rage #true
p gandalf.manapoints #=> 100

p gandalf.hitpoints #25