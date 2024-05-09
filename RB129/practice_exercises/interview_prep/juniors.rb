# Implement the given classes so that we get the expected results

class ClassLevel
  attr_accessor :level, :members

  def initialize(level)
    @level = level
    @members = []
  end

  def <<(student)
    if members.include?(student)
      puts "This student is already added"
    else
      members << student
    end
  end

  def p_members
    members.each do |student|
      puts "==========="
      puts student
    end
  end

  def valedictorian
    valedictorian = members.max_by(&:gpa)
    puts "#{valedictorian.name} has the highest GPA of #{valedictorian.gpa}"
  end
end

class Student
  attr_accessor :name, :gpa, :id
  
  def initialize(name, id, gpa)
    @name = name
    @id = id
    @gpa = gpa
  end

  def to_s
    " => Name: #{name}
    Id: XXX-XX-#{id.split('-').last}
    GPA: #{gpa}"
  end

  def ==(other_student)
    id == other_student.id
  end

  def <(other_student)
    gpa < other_student.gpa
  end

  def >(other_student)
    gpa > other_student.gpa
  end
end

juniors = ClassLevel.new('Juniors')

anna_a = Student.new('Anna', '123-11-123', 3.85)
bob = Student.new('Bob', '555-44-555', 3.23)
chris = Student.new('Chris', '321-99-321', 2.98)
david = Student.new('David', '987-00-987', 3.12)
anna_b = Student.new('Anna', '543-33-543', 3.76)

juniors << anna_a
juniors << bob
juniors << chris
juniors << david
juniors << anna_b

juniors << anna_a
  #=> "That student is already added"

puts juniors.members
  # => ===========
  # => Name: Anna
  # => Id: XXX-XX-123
  # => GPA: 3.85
  # => ==========
  # => ...etc (for each student)

p anna_a == anna_b 
  # => false

p david > chris
  # => true

juniors.valedictorian
  # => "Anna has the highest GPA of 3.85"
