// this solution makes courses, studentName and year private values that only exist within the createStudent scope and are used in the returned object through the closure. 



function createStudent(studentName, year) {
  let courses = [];
  return {
    info() {
      console.log(`${studentName} is a ${year} year student`);
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

let foo = createStudent('Foo', '1st');
foo.info();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.addNote(102, 'Difficult subject');
console.log(foo.listCourses());
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();