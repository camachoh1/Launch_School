const ANIMALS = {
  Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  Mammal: ['Bear', 'Whale'],
  Bird: ['Ostrich'],
  Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
}

const CLASSIFICATIONS = {
  Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Turtle: ['Vertebrate', 'Cold-blooded'],
  Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon: ['Vertebrate', 'Cold-blooded'],
  Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
  Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']
}


document.addEventListener('DOMContentLoaded', () => {
  const classifications = document.querySelector('#animal-classifications');
  const animals = document.querySelector('#animals');
  const clearBtn = document.querySelector('#clear');
  const form = document.querySelector('#selection-filters');

  const fillOptions = function(element, list) {
    element.innerHTML = '';

    list.forEach(value => {
      let option = document.createElement('option');
      option.value = value;
      option.textContent = value;
        
      element.appendChild(option)
    });
  }

  const setDefault = function() {
    fillOptions(animals, ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);

    fillOptions(classifications, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
  };

  form.addEventListener('change', (event) => {
    event.preventDefault();

    const target = event.target;
    const selection = event.target.value;
    let animalList

    if (target.id === 'animal-classifications') {
      animalList = ANIMALS[selection];
      fillOptions(animals, animalList)
    } else if (target.id === 'animals') {
      const classificationList = CLASSIFICATIONS[selection];
      fillOptions(classifications, classificationList);
    }
  });


  clearBtn.addEventListener('click', setDefault)
});