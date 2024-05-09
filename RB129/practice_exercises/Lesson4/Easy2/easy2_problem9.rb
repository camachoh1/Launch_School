=begin 

If we have this class, What would happen if we added a play method to the Bingo class, keeping in mind that there is already a method of this name in the Game class that Bingo class inherits from.

By adding a play method in Bingo, we will be overriding the play method from Game. Meaning that when the play method is called on a Bingo object, Ruby will resolve the method invocation by checking the play method on Bingo rather than the super class version of play. 

=end

class Game
  def play 
    "Start the game!"
  end
end 

class Bingo < Game

  def play
    "Vamo pa esa"
  end 

  def rules_of_play
    #logic
  end
end 

