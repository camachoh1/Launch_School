const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function studentGrade(scores) {
  let examSum = scores['exams'].reduce((sum, score) => sum + score);
  let examAvg = examSum / scores['exams'].length;

  let exerciseSum = scores['exercises'].reduce((sum, score) => sum + score);

  let roundedGrade = Math.round((examAvg * EXAM_WEIGHT) + (exerciseSum * EXERCISE_WEIGHT));

  return roundedGrade;
}

function formatGrade(score) {
  let grade = '';
  
  if (score >= 93) {
    grade = "A"
  } else if (score >= 85 && score < 93) {
    grade = 'B'
  } else if (score >= 77 && score < 85) {
    grade = 'C'
  } else if (score >= 69 && score < 77){
    grade = 'D'
  } else if (score >= 60 && score < 69) {
    grade = 'E'
  } else {
    grade = 'F'
  }

  return `${String(score)} (${grade})`;
}

function getColumn(array, index) {
  return array.map((subarr) => subarr[index]);
}

function examsAvg(exams) {
  let scoresPerExam = []
  
  for (let index = 0; index < exams.length - 1; index += 1) {
    scoresPerExam.push(getColumn(exams, index));
  }

  return scoresPerExam.map((exam) => {
    return {
      average: exam.reduce((sum, num) => sum + num) / exam.length,
      minimum: Math.min(...exam),
      maximum: Math.max(...exam),
    }
  });
}

function generateClassRecordSummary(scores) {
  let studentGrades = [];
  let exams = [];
  
  for (student in scores) {
    let grade = studentGrade(scores[student]['scores']);
    studentGrades.push(formatGrade(grade));
    exams.push(scores[student]['scores']['exams']);
  }

  return {
    studentGrades: studentGrades,
    exams: examsAvg(exams),
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


console.log(generateClassRecordSummary(studentScores));