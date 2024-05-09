class MyCar
  attr_accessor :color, :model, :year, :speed
  # attr_reader :year 
  def initialize(year, color, model)
    self.year = year
    self.color = color
    self.model = model
    self.speed = 0 
  end

  def spray_paint(color)
    self.color = color
    puts "This is your new color #{color}"
  end 

  # def get_color
  #   @color
  # end 

  # def change_color=(color)
  #   @color = color
  # end 

  # def get_year
  #   @year
  # end 

  def self.gas_mileage(gallons,miles)
    puts "#{miles/gallons} miles per gallon of gas"
  end 

  def to_s
    "Your #{self.color} car model is #{self.model} from #{self.year}"
  end 

  def speed_up(number)
    "your current speed is #{self.speed += number}"
  end

  def brake(number)
    "You hit the brakes, the car is slowing down your current speed is #{self.speed -= number}"
  end 

  def shut_down
    "you shutted off the car, your current speed is #{self.speed = 0}"
  end 
end

toyota = MyCar.new(2022,"blue","corolla")

p toyota.to_s

MyCar.gas_mileage(5,10)

#exercise 2 

class Person
  attr_accessor :name
  def initialize(n)
    self.name = n
  end
end

bob = Person.new("Steve")
p bob.name
bob.name = "Bob"
p bob.name 
