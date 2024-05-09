class Student
  attr_reader :name, :year
  def initialize(name=nil, year=nil)
    @name = name
    @year = year
  end
end

class Graduate < Student
  attr_reader :parking
  def initialize(name, year, parking)
    super(name, year)
    @parking = parking
  end
end

class Undergraduate < Student
end

class VisitorStudent < Student
  def initialize
    super()  
  end

  def to_s
    "Student currently #{self.class}"
  end
end

graduado = Graduate.new('cole', '1225', 'yes')

estudiante = Undergraduate.new('pedro', 2000)

p estudiante.name
p estudiante.year

visitante = VisitorStudent.new

p visitante