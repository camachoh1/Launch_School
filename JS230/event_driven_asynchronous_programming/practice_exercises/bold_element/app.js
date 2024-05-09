document.addEventListener('DOMContentLoaded', () => {
  function makeBold(element, callback) {
    element.style.fontWeight = 'bold';
    if (callback && typeof callback === 'function') {
      callback(element);
    }
  }

  let section = document.querySelector('section');
  makeBold(section, function(elem) {
    elem.classList.add('highlight');
  });

  console.log(section.classList.contains('highlight') === true); // true
  console.log(section.style.fontWeight === 'bold') // true
});


// further exploration

// const sectionElement = document.querySelector('section');

// function makeBold(element) {
//   element.style.fontWeight = 'bold';
//   const event = new CustomEvent('bolded');

//   element.dispatchEvent(event);
// }

// sectionElement.addEventListener('bolded', (event) => {
//   alert(event.target.tagName);
//   event.target.classList.add('highlight');
// });

// makeBold(sectionElement);