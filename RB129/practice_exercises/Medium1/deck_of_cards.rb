class Card
  include Comparable
  attr_reader :rank, :suit
  VALUES = { 'Jack' => 11, 'Queen' => 12,  'King' => 13, 'Ace' => 14 }
  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def <=>(other_card)
    values <=> other_card.values
  end

  def values
    VALUES.fetch(rank,rank)
  end

  def to_s
    "#{rank} of #{suit}"
  end
end

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  
  def initialize
    @deck = reset
  end

  def draw
    draw = deck.pop
    deck.empty? ?  reset : draw
    Card.new(draw[0], draw[1])
  end

  private
  attr_reader :deck

  def reset
    @deck = RANKS.product(SUITS).shuffle
  end
end

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
p drawn.count { |card| card.rank == 5 } == 4
p drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
p drawn != drawn2 # Almost always. 

# deck = Deck.new
# p deck.draw.class
