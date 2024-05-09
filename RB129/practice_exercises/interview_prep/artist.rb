# What will the last three lines of code print to the console? after song.artist is called, what would be returned if we inspect the song object. 

class Song
  attr_reader :title, :artist

  def initialize(title)
    @title = title
    @artist
  end

  def artist=(name)
    @artist = name.upcase
  end
end

p song = Song.new("Superstition")
p song.artist  = "Steview Wonder" #=> Stevie Wonder
p song.artist #=> STEVIE WONDER

# Setter methods always return the value that is passed in as an argument, regardless of what happens inside the method. 

# if we were to use the mutating version of upcase, the return value of the setter method will be STEVIE WONDER. This is because the object that is passed in as argument was mutated and the instance variable @artist is looking at the same object. 
