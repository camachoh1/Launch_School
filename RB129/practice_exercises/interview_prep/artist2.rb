# What will the last 2 lines output in this case?

class Song
  attr_reader :title, :artist

  def initialize(title)
    @title = title
  end

  def artist=(name)
    @artist = name
    name.upcase!
  end
end

song = Song.new("Superstition")
p song.artist = "Stevie Wonder"
p song.artist


# even though the setter method only returns what is passed in as argument. when we mutate the name instance variable, it affects all variables pointing to the same object. This is why the return value og the setter method is also upcased, because the instance variable name referenced in the setter method is the same instance variable referenced by the getter methods. 

#Although setter methods return the arguments passed in upon invocation, by calling a destructive method on name, the value of @artist gets affected as well since both variables are still pointing to, or referencing, the same object in Ruby's space.