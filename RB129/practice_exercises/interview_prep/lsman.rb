module Flightable
  def fly
    "I am #{@name}, I am a #{self.class}, and I can fly!"
  end
end

class Superhero 
  include Flightable
  
  attr_accessor :ability
  
  def self.fight_crime
    coding_skills = Ability.new("coding skills")
    temp_man = self.new('temp man')
    # temp_man.ability = "coding skills"
    puts "I am #{self}!"
    puts "I fight crime with my #{coding_skills.description} ability!"
  end
  
  def initialize(name)
    @name = name
  end
  
  def announce_ability
    puts "I fight crime with my #{ability} ability!"
  end
end

class LSMan < Superhero ; end

class Ability
  attr_reader :description

  def initialize(description)
    @description = description
  end
end

superman = Superhero.new('Superman')
p superman.fly # => I am Superman, I am a Superhero, and I can fly!
LSMan.fight_crime 
# # => I am LSMan!
# # => I fight crime with my coding skills ability!