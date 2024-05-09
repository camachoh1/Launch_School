require 'pry'

module Displayable
  # rubocop:disable Layout/LineLength
  def display_welcome_message
    puts 'Welcome to Tic Tac Toe!'
    puts ''
  end

  def display_goodbye_message
    puts 'Thanks for playing! Goodbye!'
  end

  def display_play_again_message
    puts "Ok #{human.name}, let's play again!"
    puts ''
  end

  def display_board
    puts "#{human.name} you're #{human.marker} and #{computer.name} is #{computer.marker}"
    puts ''
    board.draw
    puts ''
  end

  def display_user_choice
    choice = nil
    loop do
      puts "Select who should go first (C)omputer, (P)layer ot (R)andom: "
      choice = gets.chomp.downcase
      break if %w(c p r).include?(choice)
      puts "Sorry, that's not a valid choice, must be C or P."
    end
    choice
  end

  def display_score
    puts "#{human.name} score: #{human.score} | #{computer.name} score: #{computer.score}"
  end

  def display_result
    clear_screen_and_display_board

    case board.winning_marker
    when human.marker
      puts "#{human.name} won!"
    when computer.marker
      puts "#{computer.name} won!"
    else
      puts "It's a tie!"
    end
    puts 'The board is full!'
  end
  # rubocop:enable Layout/LineLength
end

module Formatable
  def clear_screen_and_display_board
    clear
    display_board
  end

  def reset
    board.reset
    @current_marker = human_turn? ? human.marker : computer.marker
    clear
  end

  def joinor
    puts "Choose a position to place a piece: "
    options = board.unmarked_keys
    case options.size
    when 0 then ' '
    when 1 then puts options.first
    when 2 then puts options.join(" or ")
    else
      puts "#{options[0..-2].join(', ')} or #{options[-1]}"
    end
  end

  def clear
    system 'clear'
  end
end

class Board
  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                  [[1, 5, 9], [3, 5, 7]] # diagonals
  def initialize
    @squares = {}
    reset
  end 

  def [](key)
    @squares[key]
  end

  def[]=(key, marker)
    @squares[key].marker = marker
  end

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def count_marker(keys, marker)
    keys.count { |key| @squares[key].marker == marker }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  def winning_marker
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if three_identical_markers?(squares)
        return squares.first.marker
      end
    end
    nil
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  def draw
    puts '     |     |'
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts '     |     |  '
    puts '-----+-----+-----'
    puts '     |     |'
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts '     |     |'
    puts '-----+-----+-----'
    puts '     |     |'
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts '     |     |'
  end
  # rubocop: enable Metrics/AbcSize
  # rubocop: enable Metrics/MethodLength

  private

  def three_identical_markers?(squares)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 3

    markers.min == markers.max
  end
end

class Square
  INITIAL_MARKER = ' '
  attr_accessor :marker

  def initialize(marker = INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    @marker
  end

  def unmarked?
    marker == INITIAL_MARKER
  end

  def marked?
    marker != INITIAL_MARKER
  end
end

class Player
  attr_reader :marker
  attr_accessor :score, :name

  def initialize(marker, name)
    @marker = marker
    @name = name
    @score = 0
  end
end

# Game orchestration engine
class TTTGame
  include Formatable
  include Displayable
  WINNING_SCORE = 3
  attr_reader :board, :human, :computer

  def initialize
    @board = Board.new
    @human = Player.new(choose_marker, set_player_name)
    @computer = Player.new(not_human_marker, set_computer_name)
    @current_marker = choose_who_goes_first
  end

  def play
    clear
    display_welcome_message
    main_game
    display_score
    display_goodbye_message
  end

  private

  def main_game
    loop do
      display_board
      player_move
      display_result
      score
      break if champion? || !play_again?
      reset
      display_play_again_message
      display_score
    end
  end

  def player_move
    loop do
      current_player_moves
      break if board.someone_won? || board.full?

      clear_screen_and_display_board if human_turn?
    end
  end

  def play_again?
    answer = nil
    loop do
      puts 'Would you like to play again (y/n)'
      answer = gets.chomp.downcase
      break if %w(y n).include?(answer)

      puts 'Sorry, must be y or n'
    end
    answer == 'y'
  end

  def choose_marker
    display_welcome_message
    choice = nil
    loop do
      puts "Please select your marker 'X' or 'O'"
      choice = gets.chomp.downcase
      break if %w(x o).include?(choice)
      puts "Sorry, invalid choice!"
    end
    choice.upcase
  end

  def not_human_marker
    human.marker == 'X' ? 'O' : 'X'
  end

  def set_player_name
    choice = nil
    loop do
      puts "Please select your name:"
      choice = gets.chomp
      break if choice != ' '
    end
    choice
  end

  def set_computer_name
    ['Cortana', 'Alexa', 'Astro', 'Jack', 'Hal'].sample
  end

  def choose_who_goes_first
    choice = display_user_choice

    first = if choice == 'c'
              computer.marker
            elsif choice == 'p'
              human.marker
            else
              [human.marker, computer.marker].sample
            end
    first
  end

  def human_turn?
    @current_marker == human.marker
  end

  def human_moves
    joinor
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)

      puts "Sorry, that's not a valid choice."
    end
    board[square] = human.marker
  end

  def computer_moves
    square ||= strategic_move(:offense)
    square ||= strategic_move(:defense)
    square ||= 5 if board[5].unmarked?
    square ||= board.unmarked_keys.sample
    board[square] = computer.marker
  end

  def strategic_move(strategy)
    marker = strategy == :defense ? human.marker : computer.marker

    square = nil
    Board::WINNING_LINES.each do |line|
      if find_at_risk_square(line, marker)
        square = line.select { |key| board[key].unmarked? }.first
        break
      end
    end
    square
  end

  def find_at_risk_square(lines, marker)
    board.count_marker(lines, marker) == 2 &&
      board.count_marker(lines, Square::INITIAL_MARKER) == 1
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = computer.marker
    else
      computer_moves
      @current_marker = human.marker
    end
  end

  def score
    if board.winning_marker == human.marker
      human.score += 1
    elsif board.winning_marker == computer.marker
      computer.score += 1
    else
      'tie'
    end
  end

  def champion?
    human.score == WINNING_SCORE || computer.score == WINNING_SCORE
  end
end

game = TTTGame.new
game.play
