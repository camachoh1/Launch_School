module Displayable
  def welcome_screen
    clear_screen
    display_welcome_message
    clear_screen
    display_rules
  end

  def display_welcome_message
    welcome = <<~MSG
    Hey #{human.name}! Welcome to Rock, Paper Scissors,Lizard,Spock!
    -----------------------------------------------------------
  
        *~*~*~*~*~*~ Press Enter to Start! *~*~*~*~*~*~
    MSG
    prompt(welcome)
    gets.chomp
  end

  def display_rules
    rules = <<~MSG
    ----------------------------------------------------------
    The rules are very simple:

    Scissors cuts Paper cover Rock crushes
    Lizard poison Spock smashes Scissors
    decapitates Lizard eats Paper disproves
    Spock vaporizes Rock crushes Scissors.

    First to win #{RPSGame::WINNING_SCORE} rounds will be crowned the ultimate champion!!!

    Ready? Press Enter to continue.
    ---------------------------------------------------------
    MSG
    prompt(rules)
    gets.chomp
  end

  def display_goodbye_message
    prompt("Thanks for playing! Good Bye!")
  end

  def display_winner
    if human.move > computer.move
      prompt("#{human.name} won!")
    elsif human.move < computer.move
      prompt("#{computer.name} won!")
    else
      prompt("It's a tie!")
    end
  end

  def display_moves
    prompt("#{human.name} chose #{human.move}.")
    prompt("#{computer.name} chose #{computer.move}.")
  end

  def display_score
    prompt("#{human.name} score is: #{human.score}")
    prompt("#{computer.name} score is: #{computer.score}")
  end

  def display_champion
    prompt("==========================================================
      #{champion} is the ultimate champion! Press Enter to continue.
    =========================================================")
    gets.chomp
    clear_screen
  end

  def display_move_history
    display = <<~MSG
    ---------------------------------------------------------

    Great game! Here is the move history for each player:

    ---------------------------------------------------------

    #{human.name}: #{human.move_history.join(', ')}

    ---------------------------------------------------------

    #{computer.name}: #{computer.move_history.join(', ')}

    ---------------------------------------------------------
    Press Enter to End the Game! 
    MSG
    prompt(display)
    gets.chomp
  end
end

module Formatable
  def prompt(message)
    puts "=> #{message}"
  end

  def clear_screen
    system('clear') || system('cls')
  end
end

class Move
  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  WINNING_MOVES = { 'rock' => ['scissors', 'lizard'],
                    'paper' => ['rock', 'spock'],
                    'scissors' => ['paper', 'lizard'],
                    'lizard' => ['paper', 'spock'],
                    'spock' => ['rock', 'scissors'] }

  LOSING_MOVES = {  'rock' => ['paper', 'spock'],
                    'paper' => ['scissors', 'lizard'],
                    'scissors' => ['rock', 'spock'],
                    'lizard' => ['rock', 'scissors'],
                    'spock' => ['paper', 'lizard'] }

  attr_reader :value

  def initialize(value)
    @value = value
  end

  def >(other_move)
    WINNING_MOVES[value].include?(other_move.value)
  end

  def <(other_move)
    LOSING_MOVES[value].include?(other_move.value)
  end

  def to_s
    @value
  end
end

class Rock < Move
  def initialize
    @value = 'rock'
  end
end

class Paper < Move
  def initialize
    @value = 'paper'
  end
end

class Scissors < Move
  def initialize
    @value = 'scissors'
  end
end

class Lizard < Move
  def initialize
    @value = 'lizard'
  end
end

class Spock < Move
  def initialize
    @value = 'spock'
  end
end

class Player
  include Formatable
  attr_accessor :move, :name, :score, :move_history

  def initialize
    set_name
    @score = 0
    @move_history = []
  end

  private

  def obtain_move(move)
    case move
    when 'rock' then Rock.new
    when 'paper' then Paper.new
    when 'scissors' then Scissors.new
    when 'lizard' then Lizard.new
    when 'spock' then Spock.new
    end
  end
end

class Human < Player
  def set_name
    n = ""
    loop do
      prompt("What's your name?")
      n = gets.chomp
      break unless n.empty?
      prompt("Sorry, must enter a value")
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      prompt("Please select rock, paper, scissors, lizard or spock!")
      choice = gets.chomp
      break if Move::VALUES.include?(choice)
      prompt("Sorry, invalid choice")
    end
    self.move = Move.new(choice)
    move_history << move
  end
end

class Computer < Player
  PERSONALITIES = {
    "Cortana" => ["paper", "paper", "paper", "spock", "scissors"],
    "Astro" => ["rock", "paper", "scissors", "scissors", "lizard"],
    "OP1" => ["spock", "spock", "lizard", "scissors", "rock"], "Siri" => Move::VALUES }

  def set_name
    self.name = ["Siri", "Cortana", "Astro", "OP1"].sample
  end

  def choose
    self.move = Move.new(PERSONALITIES[name].sample)
    move_history << move
  end
end

class RPSGame
  include Displayable
  include Formatable
  WINNING_SCORE = 3
  attr_accessor :human, :computer, :champion

  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def winner
    if human.move > computer.move
      human.score += 1
    elsif human.move < computer.move
      computer.score += 1
    end
  end

  def champion?
    if human.score == WINNING_SCORE
      self.champion = human.name
    elsif computer.score == WINNING_SCORE
      self.champion = computer.name
    end
  end

  def play_again?
    answer = nil
    loop do
      prompt("Would you like to play again (y/n)")
      answer = gets.chomp
      break if ['y', 'n'].include?(answer.downcase)
      prompt("Sorry, must be y or n")
    end
    return false if answer.downcase == 'n'
    return true if answer.downcase == 'y'
  end

  def game_round
    human.choose
    computer.choose
    display_moves
    winner
    display_winner
  end

  def play
    welcome_screen
    loop do
      clear_screen
      display_score
      game_round
      break if champion? || !play_again?
    end
    display_champion if champion?
    display_move_history
    display_goodbye_message
  end
end

RPSGame.new.play
