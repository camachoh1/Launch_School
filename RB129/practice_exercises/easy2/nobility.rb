#now that we have a Wa;lkable module, we are given a new challenge. Apparently some of our users are nobility, and the regular way of walking simply isn't good enough. Nobility need to strut. 

# We need a new class Noble that shows the title and name when walk is called. 

# We must have access to both name and title because they are needed for other purposes that we arent showing. 

#modify the code so that it works
module Walkable
  def walk 
    puts "#{self} #{gait} forward"
  end
end 

class Person 
include Walkable
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    name
  end 

  private

  def gait
    "strolls"
  end
end

class Noble 
  include Walkable
  attr_reader :name, :title

  def initialize(name, title)
    @name = name
    @title = title
  end

  def to_s
    "#{title} #{name}"
  end 


  private

  def gait
    "struts"
  end 
end

class Cat
include Walkable
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    name
  end 

  private

  def gait
    "saunters"
  end
end

class Cheetah
include Walkable
  attr_reader :name

  def initialize(name)
    @name = name
  end


  private 

  def gait
    "runs"
  end
end 



byron = Noble.new("Byron", "Lord")
byron.walk #=> Lord Byron struts forward

p byron.name
p byron.title 
