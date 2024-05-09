class MyCar
  attr_accessor :color 
  attr_reader :year 
  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0 
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

  def speed_up(number)
    "your current speed is #{@speed += number}"
  end

  def brake(number)
    "You hit the brakes, the car is slowing down your current speed is #{@speed -= number}"
  end 

  def shut_down
    "you shutted off the car, your current speed is #{@speed = 0}"
  end 
end

toyota = MyCar.new(2022,"blue","corolla")

toyota.spray_paint("yellow")