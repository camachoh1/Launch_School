const LANGUAGES = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const languagesDiv = document.querySelector('#languages');
  
  const addLanguages = function() {
    LANGUAGES.forEach(language => {
      const div = document.createElement('div');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const button = document.createElement('button');

      div.classList.add(`${language.name}`);

      h1.textContent = language.name;
      p.textContent = language.description.slice(0,120) + '...';
      p.classList.add('description');
      button.textContent = 'Show More';
      button.classList.add('show-btn');
      div.append(h1, p, button);
      languagesDiv.appendChild(div);
    });
  }

  const formatDescription = function(parent, showMessage) {
    let description;

    LANGUAGES.forEach(language => {
      if (language.name === parent && showMessage === 'Show More') {
        description = language.description;
      } else if (language.name === parent && showMessage === 'Show Less') {
        description = language.description.slice(0,120) + '...';
      }
    });

    return description;
  }

  const toggleShowMessage = function(button, showMessage) {
    if (showMessage === 'Show More') {
      button.textContent = 'Show Less';
    } else {
      button.textContent = 'Show More';
    }
  }

  addLanguages();

  languagesDiv.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target;

    if (target.tagName === 'BUTTON') {
      const parentClass = target.parentNode.className;
      const showMessage = target.textContent;
      
      target.previousElementSibling.textContent = formatDescription(parentClass, showMessage);
      toggleShowMessage(target, showMessage);
    }
  });
});