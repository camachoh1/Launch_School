=begin 

Create an object-oriented number guessing class for numbers in the range 1 to 100, with a limit of 7 guesses per game. 

=end

module Displayable
  def display_welcome_screen
    display_welcome_message
    display_rules
    display_number_of_guesses
  end

  def display_welcome_message
    puts "Welcome to number guesser!"
  end

  def display_rules
    puts "Rules are simple, you got #{number_of_guesses} tries in order to guess a number beween #{player.init_val} and #{player.end_val}"
  end

  def display_number_of_guesses
    puts "You have #{number_of_guesses} guesses remaining"
  end

  def display_good_bye_message
    puts "thanks for playing!"
  end

  def display_guess
    if player.choice < target_number
      puts "your guess is too low"
    elsif player.choice > target_number
      puts "your guess is too high"
    else
      puts "that's the number"
    end
  end

  def display_winner_or_loser_message
    if winner 
      puts "You won!"
    else
      puts "you lose!"
    end
  end

  def display_end_screen
    display_winner_or_loser_message
    display_good_bye_message
  end
end

class Player
  attr_reader :choice, :init_val, :end_val

  def initialize(init_val, end_val)
    @init_val = init_val
    @end_val = end_val
  end

  def player_guess
    choice = nil
    loop do
      puts "Enter a number between #{init_val} and #{end_val}"
      choice = gets.chomp.to_i
      break if (init_val..end_val).include?(choice)
      puts "invalid guess. Enter a number between #{init_val} and #{end_val}"
    end
    @choice = choice
  end

  private
  attr_writer :choice
end

class GuessingGame
  include Displayable

  def initialize(init_val, end_val)
    range = (init_val..end_val).to_a

    @player = Player.new(init_val, end_val)
    @number_of_guesses = (Math.log2(range.size) + 1).to_i
    @target_number = range.shuffle!.pop
  end

  def play
    display_welcome_screen
    gameplay
    display_end_screen
  end

  private
  attr_reader :target_number, :player
  attr_accessor :number_of_guesses

  def gameplay
    loop do 
      player.player_guess
      display_guess
      winner
      decrease_number_of_guesses(winner)
      display_number_of_guesses
      break if winner || number_of_guesses == 0
    end
  end

  def winner
    (player.choice == target_number) && number_of_guesses != 0
  end

  def decrease_number_of_guesses(win)
    win == true ? number_of_guesses : self.number_of_guesses -= 1
  end
end

game = GuessingGame.new(10,20)
game.play