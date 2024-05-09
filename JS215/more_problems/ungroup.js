// problem:

// given an array of objects containing teacher and student data, create a function that ungroups every student from the data object so the information can be looked at individually.

// rules: 
  // always asume that the object is not empty 
  // the array will contain an object whith the teacher as keys and their names as values 
    // data as keys and the students info as values in an array of objects
  // the output must be an array of objects containing the teacher and student data

// data structures: arrays objects

// algorithm:
  // CREATE a result array;
  // ITERATE through the input array
    // ITERATE through the data array
    // INITIALIZE a new object
    // INITIALIZE newObj[teacher:] = currentObj[teacher]
    // DESTRUCTURE every array from currentObj.data and add them to the new object
    // PUSH new object into results array
    
    // RETURN results array 
  
  

function ungroupStudents(data) {
  let result = [];

  data.forEach(dataObj => {
    dataObj.data.forEach(student => {
      let newStudent = {
        teacher: dataObj.teacher,
        ...student,
      }
      result.push(newStudent);
    });
  });

  return result;
}

console.log(ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
    name: "James",
    emergenceNumber: "617-771-1082",
  }, {
    name: "Alice",
    alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]));