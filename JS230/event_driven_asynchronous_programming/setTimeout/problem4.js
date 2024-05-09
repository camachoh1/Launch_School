function afterNSeconds(callback, duration) {
  setTimeout(callback, duration);
}

function log() {console.log('hablalooo')};

afterNSeconds(log, 1000)