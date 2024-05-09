=begin 

If we have this class, what can we add to the Bingo class to allow it to inherit the play method from the Game class?

=end 

class Game 
  def play 
    "Start the game!"
  end
end 

class Bingo < Game 
  def rules_of_play
    #logic
  end
end 