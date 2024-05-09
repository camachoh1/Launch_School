function createStudent(studentName, year) {
  courses = [];
  return {
    studentName,
    year,
    info() {
      console.log(`${this.studentName} is a ${this.year} year student`);
    },

    listCourses() {
      return courses;
    }, 

    addCourse(course) {
      courses.push(course);
    },

    addNote(code, newNote) {
      courses.forEach(course => {
        if (course.code === code) {
          if (!course.notes) {
            course.notes = [];
            course.notes.push(newNote);
          } else {
            course.notes.push(newNote);
          }
        }
      });
    },

    viewNotes() {
      courses.forEach(course => {
        let subject = course.name;

        if (course.notes) {
          if (course.notes.length > 1) {
            console.log(`${subject}: ${course.notes[0]}; ${[...course.notes.slice(1)].join(' ')}`);
          } else {
            console.log(`${subject}: ${course.notes}`);
          }
        };
      });
    },

    updateNote(code, newNote) {
      courses.forEach(course => {
        if (course.code === code) {
          course.notes = [newNote];
        }
      })
    }
  }
}

const school = {
  students: [],

  addStudent(studentName, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!validYears.includes(year)) {
      return "Invalid Year.";
    }

    const newStudent = createStudent(studentName, year);
    this.students.push(newStudent);
    return newStudent
  },

  enrollStudent(student,course, code) {
    student.addCourse({name: course, code: code});
  },

  addGrade(student, code, grade) {
    const course = student.listCourses().filter(course => course.code === code);

    if (course.length === 0) {
      return "Invalid Course."
    }

    course[0].grade = grade;
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    const enrolled = []

    this.students.forEach(student => {
      student.listCourses().forEach(course => {
        if (course.name === courseName) {
          if (course.grade) {
            enrolled.push({name: student.studentName, grade: course.grade});
          }
        }
      });
    });

    if (enrolled.length === 0) {
      console.log('undefined');
      return;
    }

    let grades = 0;

    console.log(`=${courseName} Grades=`);
    enrolled.forEach(student => {
      grades += student.grade;
      console.log(`${student.name}: ${student.grade}`);
    })
    console.log('---');

    const average = grades / enrolled.length;

    console.log(`Course Average: ${average}`);
  }
}


const pedro = school.addStudent("Pedro", "4th");
const juan = school.addStudent("Juan", "1st");
const pablo = school.addStudent("Pablo", "2nd");


school.enrollStudent(pedro,'Math', 101);
school.enrollStudent(pedro,'Advanced Math', 102);
school.enrollStudent(pedro,'Physics', 202);


school.enrollStudent(juan,'Math', 101);


school.enrollStudent(pablo,'Math', 101);
school.enrollStudent(pablo,'Advanced Math', 102);


school.addGrade(pedro, 101, 95);
school.addGrade(pedro, 102, 90);

school.addGrade(juan, 101, 91);

school.addGrade(pablo, 101, 93);
school.addGrade(pablo, 102, 90);


school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

console.log(school.students);