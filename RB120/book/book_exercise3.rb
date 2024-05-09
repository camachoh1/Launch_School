# module HeavyLoad
#   def loading_truck
#     "Carrying lumber"
#   end 
# end


# class Vehicle
#   @@number_of_vehicles = 0

#   def self.vehicle_counter
#     puts @@number_of_vehicles
#   end 

#   attr_accessor :color, :model, :years, :speed 
#   def initialize(years, color, model)
#     @@number_of_vehicles += 1 
#     self.years = years
#     self.color = color
#     self.model = model
#     self.speed = 0 
#   end

#   def spray_paint(color)
#     self.color = color
#     puts "This is your new color #{color}"
#   end 

#   def self.gas_mileage(gallons,miles)
#     puts "#{miles/gallons} miles per gallon of gas"
#   end 

#   def speed_up(number)
#     "your current speed is #{self.speed += number}"
#   end

#   def brake(number)
#     "You hit the brakes, the car is slowing down your current speed is #{self.speed -= number}"
#   end 

#   def shut_down
#     "you shutted off the car, your current speed is #{self.speed = 0}"
#   end 


#   def age
#     "Your #{model} is #{calculate_age} years old"
#   end

#   private 

#   def calculate_age
#     current_year = Time.now 
#     current_year.year - years
#   end 

# end

# class MyCar < Vehicle 
#   NUMBER_OF_DOORS = 4
#   def to_s
#     "Your #{self.color} car model is #{self.model} from #{self.years}"
#   end 
# end

# class MyTruck < Vehicle
#   include HeavyLoad
#   NUMBER_OF_DOORS = 2
#   def to_s
#     "Your #{self.color} truck model is #{self.model} from #{self.years}"
#   end 
# end

# toyota = MyCar.new(1997,"blue","corolla")
# camion = MyTruck.new(2004,"red","ford tundra")

# # Vehicle.vehicle_counter

# # p MyTruck.ancestors
# # p MyCar.ancestors
# # p Vehicle.ancestors


# p toyota.age
# p camion.age 


class Student
  
  def initialize(n, g)
    @name = n
    @grade = g
  end

  def better_grade_than?(other_student)
    grade > other_student.grade 
  end

  protected 

  def grade
    @grade
  end

end

joe = Student.new("joe", 90)
bob = Student.new("bob",80)

p joe.better_grade_than?(bob)

#protected methods allow you to call them inside the class on other objects of the same class. 
