=begin 

update this class so you can use it to determine the lowest ranking and highest ranking cards in an `Array` of `Card` objects:

low cards: numeric cards from 2 through 10.

jacks > 10s 
queens > jacks
kings > queens
aces > kings 

two or more cards of the same rank should be returned by min and max methods; doesnt matter which one.

- min/max methods show the highest and lowest ranking card.
- to_s method that returns the string representation of a card.
- rank method displays the rank only (the number)

=end 

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

# cards = [Card.new(2, 'Hearts'),
#          Card.new(10, 'Diamonds'),
#          Card.new('Ace', 'Clubs')]
# puts cards
# puts cards.min == Card.new(2, 'Hearts')
# puts cards.max == Card.new('Ace', 'Clubs')

# cards = [Card.new(5, 'Hearts')]
# puts cards.min == Card.new(5, 'Hearts')
# puts cards.max == Card.new(5, 'Hearts')

# cards = [Card.new(4, 'Hearts'),
#          Card.new(4, 'Diamonds'),
#          Card.new(10, 'Clubs')]
# puts cards.min.rank == 4
# puts cards.max == Card.new(10, 'Clubs')

# cards = [Card.new(7, 'Diamonds'),
#          Card.new('Jack', 'Diamonds'),
#          Card.new('Jack', 'Spades')]
# puts cards.min == Card.new(7, 'Diamonds')
# puts cards.max.rank == 'Jack'

# cards = [Card.new(8, 'Diamonds'),
#          Card.new(8, 'Clubs'),
#          Card.new(8, 'Spades')]
# puts cards.min.rank == 8
# puts cards.max.rank == 8

p Card.new('10', 'Hearts').values