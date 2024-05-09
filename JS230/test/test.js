// let button = document.getElementById('changeBackground');

// button.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'green';
// });

// let paragraphs = [];
// function walk(node, callback) {
//   callback(node);
//   for(let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback);
//   }
// }

// walk(document, (node) => {
//   if (node.nodeName === 'P') {
//     node.classList.add('article-text');
//   }
// });

// console.log(paragraphs);

// function walk(node, callback) {
//   callback(node);
//   for(let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback);
//   }
// }

// function getElementsByTagName(tagName) {
//   let paragraphs = [];

//   walk(document, (node) => {
//     if (node.nodeName === tagName.toUpperCase()) {
//       paragraphs.push(node);
//     }
//   });

//   paragraphs.forEach(paragraph => {
//     paragraph.classList.add('article-text');
//   });

//   return paragraphs
// }

// getElementsByTagName('p')

// let paragraphs = document.getElementsByTagName('p');
// paragraphs = Array.prototype.slice.call(paragraphs);
// paragraphs.forEach(paragraph => {
//   paragraph.classList.add('article-text');
// });

// jquery click event
// $('a').on('click', function(e) {
//   e.preventDefault();

//   $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
// });

// document.addEventListener('DOMContentLoaded',(event) => {
//   console.log(event)
// });


// basic promise using then and catch.
// function sayHi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve('aaro mi llave');
//       } else {
//         reject('nada compae');
//       }
//     }, 2000);
//   });
// }

// console.log('hablalo!');
// sayHi()
//   .then(data => console.log(data))
//   .catch(error => console.error('error:', error));
// console.log('nos pillamos!');

// chaining promise

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10), 1000); // simulating asynchonous operation
//   });
// }

// createPromise() // returns a promise
//               .then(result => {
//                 console.log(result); // logs the result of the first promise 10
//                 return result + 2; // returns a new promise
//               })
//               .then(result => console.log(result)); // 12

// let promise1 = Promise.resolve(3);
// let promise2 = 42;
// let promise3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const makeRequest = function() {
//     return new Promise((resolve, reject) =>{
//       setTimeout(() => {
//         if (Math.random() > 0.5) {
//           resolve('success');
//         } else {
//           reject('failure');
//         }
//       }, 2000);
//     });
//   }

//   const displayMessage = function(message) {
//     const h2 = document.createElement('h2');
//     h2.textContent = message;
//     document.body.appendChild(h2);
//   }

//   makeRequest()
//             .then(result => displayMessage(result))
//             .catch(error => displayMessage(error))
//             .finally(() => {
//               const p = document.createElement('p');
//               p.textContent = 'Operation Complete';
//               document.body.appendChild(p);
//             });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const makeRequest = function() {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();
//       request.open('GET', 'http://www.boredapi.com/api/activity/');
//       request.setRequestHeader('Content-Type', 'application/json');

//       request.addEventListener('load', (event) => {
//         let response;
//         if (request.status === 200) {
//           response = JSON.parse(request.response);
//           if (!response.error) {
//             resolve(response);
//           } else {
//             reject(new Error(response.error));
//           }
//         }
//       });

//       request.send();
//     });
//   }

//   const displayActivity = function(response) {
//     const h2 = document.createElement('h2');
//     h2.textContent = `If you are bored: ${response.activity}`;
//     document.body.appendChild(h2);
//   }

//   const displayError = function(response) {
//     const h2 = document.createElement('h2');
//     h2.textContent = response;
//     h2.style.backgroundColor = 'red';
//     document.body.appendChild(h2);
//   }

//   makeRequest()
//               .then(result => displayActivity(result))
//               .catch(error => displayError(error))
//               .finally(() => {
//                 console.log('operation complete!');
//               });
// });

// $(function() {
//   let $p2;
//   let $a = $('<a></a>');
//   $a.text('tu mae');
//   $('body').append($a);

//   $a.on('click', event => {
//     event.preventDefault();
//     if (event.target.tagName === 'A') {
//       $p2 = $('<p></p>');
//       $p2.text('andaaa');
//       $a.text('la tuya!');
//       $a.css('background-color', 'green');
//       $a.append($p2);
//     }
//   });

//   $a.on('click', 'p', function(e) {
//     if( e.target.tagName === 'P') {
//       $p2.text('que es la monda?!');
//     }
//   })
// });

// $(() => {
//   const makeRequest = function() {
//     return $.ajax({
//       url: 'http://www.boredapi.com/api/activity/',
//       method: 'GET',
//       dataType: 'json', // Expected data format from server
//       contentType: 'application/json', // Content type being sent from client
//     });
//   };

//   const displayActivity = function(response) {
//     const h2 = $('<h2>').text(`If you are bored: ${response.activity}`);
//     $('body').append(h2);
//   };

//   const displayError = function(response) {
//     const h2 = $('<h2>').text(response.responseText || response.statusText);
//     h2.css('backgroundColor', 'red');
//     $('body').append(h2);
//   };

//   makeRequest()
//     .done(result => displayActivity(result))
//     .fail(error => displayError(error))
//     .always(() => {
//       console.log('operation complete!');
//     });
// });

// console.log('hello');

// setTimeout(() => {
//   console.log('hola');
// }, 0);

// new Promise((resolve, reject) => {
//       resolve('hey!')}).then(result => console.log(result));


// let func = function() {
//   return new Promise((res, rej) => {
//     res(...)

//     rej(...)
//   });
// };

// func.then(res => {
//   // do stuff - e.g., call other functions.
// })
// .catch(rej => {
// })

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// let alwaysError = () => { throw new Error('always') };

// const simAsync = function() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() > 0) {
//         res('hey');
//         alwaysError();
//       } else {
//         rej(new Error('nope'));
//       }
//     },1000);
//   });
// }

// try {
//   // simAsync().then(res=> {
//   //   console.log('then');
//   //   console.log(res);
//   // }).catch(err => {
//   //   console.log('catch');
//   //   console.log(err);
//   // });
//   alwaysError();
// } catch (err) {
//   console.log(err, 'in catch');
// }

// async function test() {
//   try {
//     let data = await simAsync();
//     return data
//   } catch(error) {
//     console.log('catch');
//     console.error(error)
//   }
// }

// test().then(result => console.log(result,'h'));


// ===========

// simAsync().then(res => {
//   console.log('then');
//   alwaysError();
//   console.log(res);
// })
// .catch(rej => {
//   console.log('catch');
//   console.error(rej)
// });

// =====

// try {
//   simAsync().then(res => {
//     console.log('then');
//     console.log(res);
//   }).catch(err => console.log(err));
//   alwaysError();
// } catch (error) {
//   console.error(error,'hey');
// } finally {
//   console.log('finally');
// }

// Asynchronous Programming and Events

// Synchronous Programming:

// JavaScript is by nature a single threaded language. This implies that the call-stack, which is a data structure in charge of controlling the execution of functions, can only perform one operation at a time. 

// Example:

// console.log(1)
// console.log(2)
// console.log(3)

// outputs : 1, 2, 3

// the example above shows how each line of code was executed in a secuential manner, that is, one line at a time. 

// When discussing web programming, we are mostly talking about asynchronous operations. These are operations that occur independently of the main program flow.

// As mentioned earlier, JS is by nature synchronous which means these types of asynchronous operations would block the call stack. 

// In order to avoid these type of blocking issues, we can use asynchronous JavaScript which works in conjuction with the web APIs and the message queue allowing for asynchronous operations to take place without blocking the main thread.

// When and asynchronous operation is registered, it is moved away from the callstack and dealt with by the web apis. The web apis process the asynchronous operation, that could mean waiting for a setTimeout to complete or a user event to take place. Once the asynchronous operation is completed, the callback is moved into the message queue. 

// At this point, the event loop checks the message queue and the call stack, if there is an operation in the message queue and the call stack is available, it pushes the callback into the message queue. 

// This ensures that the asynchronous operation is executed properly without blocking the call stack.

// seTimeout(() => { // simulates an asynchronous operation by running the code in the callback once the provided time in milliseconds is completed.
  // console.log(1);
//}, 2000)

// console.log(2); // synchronous operation, executed immediately.

// logs 2, 1 

// Events

// User interfaces provide a way for users to interact with our web applications, these interfaces are by nature event driven. Events are objects that represent user actions such as clicks and keyboard inputs, or default actions taken by the web browser like loading a page. These objects offer an interface that allow us to access extra information about when and where a user or browser action took place.

// Event handlers and event listeners

// event handlers are javascript functions that contain logic that will be executed after a user action takes place. These functions are passed as callbacks to the event listeners. Event listeners are added to elements in our applications by using the method addEventListener provided by the web APIs. This method receives two arguments, a string representing the event type and a callback function which will act as the event handler. 

// The event handler receives an argument by default, this argument is the event object. The event object allow us to access more information about the user action through some of its properties such as: 

//target : provides information about the element that triggered the event , 
// currentTarget: the element to which the event listener is attached 

// type: the type of event triggered e.g. click, keydown, focusout, etc.

// as well as methods such as preventDefault and stopPropagation

// capturing and bubbling 

// const downloadFile = function(callback) {
//   console.log('Downloading file...');
//   setTimeout(() => {
//     callback('Download Complete')
//   },1500)
// }

// downloadFile((message) => {
//   console.log(message);
// });

// const processData = function(array, callback) {
//   setTimeout(() => {
//     callback(array);
//   }, 1000)
// }

// processData([1,2,3], (array) => {
//   console.log(array.map(num => num * 2));
// });


// function waterfallOverCallbacks(callbacks, number) {
//   let result;  
//   callbacks.forEach(callback => {
//     number = callback(number)
//     result = number;
//   })
//   console.log(result)
// }

// const double = (x) => x * 2;
// console.log(waterfallOverCallbacks([double, double, double], 1));


// function startCounter(callback) {
//   let num = 0;
//   let interval = setInterval(() => {
//     num += 1
//     if (callback(num)) {
//       clearInterval(interval)
//     };
//   }, 1000)
// }

// startCounter((count) => {
//   console.log(count);
//   return count === 5;
// });

// const downloadFilePromise = function() {
//   return new Promise((resolve, reject) => {
//     console.log('Downloading...');
//     setTimeout(() => {
//       resolve('Download Complete');
//     }, 2000);
//   })
// }

// downloadFilePromise().then(result => console.log(result));

// const processDataPromise = function(arr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(arr.map( num => num * 2));
//     }, 1000);
//   });
// }

// processDataPromise([1,2,3]).then(result => console.log(result));


// const flakyService = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.1) {
//         resolve('operation complete');
//       } else {
//         reject('operation failed');
//       }
//     }, 1000);
//   });
// }

// flakyService()
//             .then(result => console.log(result))
//             .catch(error => console.error('error:', error))
//             .finally(() => console.log('finally'))


// const chainingPromises = function(num) {
//   return new Promise((resolve, reject) => {
//     resolve(num);
//   });
// }

// chainingPromises(5)
//                 .then(result => result * 2)
//                 .then(result => result + 5)
//                 .then(result => console.log(result));

// const recoverFromErrors = function() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.9) {
//       resolve('aro!');
//     } else {
//       reject('Nada cole');
//     }
//   });
// }

// recoverFromErrors()
//                 .then(result => console.log(result))
//                 .catch(error => {
//                   console.error('Error:', error);
//                   return 'Pilla pa que no llores'
//                 })
//                 .then(result => console.log(result))
//                 .finally(() => console.log('joa por fin vale'))



// const flakyService = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.1) {
//         resolve('operation complete');
//       } else {
//         reject(new Error('Error: la cagaste'));
//       }
//     }, 1000);
//   });
// }

// flakyService()
//             .then(result => console.log(result))
//             .catch(error => console.error('error:', error))
//             .finally(() => console.log('finally'))

// const fetchUserData = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject({ error: "User not found"}), 500);
//   })
// }

// fetchUserData()
//               .catch(error => console.error('error:', error.error))
//               .finally(() => console.log('Fetching complete'))

// const retryOperation = function(callback) {
//   let attempts = 0;

//   function attempt() {
//     return callback().catch((error) => {
//       if (attempts < 2) {
//         attempts += 1;
//         console.log(`Retry attempt #${attempts}`);
//         return attempt();
//       } else {
//         throw error
//       }
//     })
//   }

//   return attempt().catch(() => console.error('operation failed'));
// }

// const loadData = function() {
//   return new Promise((resolve, reject) => {
//     console.log('fetching data...')
//     if (Math.random() > 0.3) {
//       resolve('Operation succeeded');
//     } else {
//       reject('Operation failed')
//     }
//   }).catch(error => {
//     console.error('error:', error);
//     return Promise.resolve('Using Cached Data');
//   })
// }

// loadData()
//           .then(result => console.log(result))
//           .finally(() => console.log('operation complete'));

// const flakyService = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve('operation complete');
//       } else {
//         reject(new Error('Error: la cagaste'));
//       }
//     }, 1000);
//   });
// }

// const loadData = function() {
//   return new Promise((resolve, reject) => {
//     console.log('fetching data...')
//     if (Math.random() > 0.3) {
//       resolve('Operation succeeded');
//     } else {
//       reject('Operation failed')
//     }
//   })
// }

// Promise.all([flakyService(), flakyService(), loadData(), loadData()]).then(result => {console.log(result)})
// .catch(error => console.log("One or more operations failed"));

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Primero!'), 500);
// });

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Segundo'), 400);
// });

// Promise.race([firstPromise, secondPromise]).then(result => console.log(result))

// const  services = [flakyService(), flakyService(), flakyService()]

// Promise.allSettled(services).then(result => {
//   result.forEach(res => console.log(res.status))
// })


// const flakyService = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve('operation complete');
//       } else {
//         reject(new Error('Error: la cagaste'));
//       }
//     }, 1000);
//   });
// }

// const loadData = function() {
//   return new Promise((resolve, reject) => {
//     resolve('Operation succeeded');
//   })
// }

// const primary = flakyService();
// const fallback = loadData();

// Promise.any([primary, fallback]).then(console.log);
// // Logs "Operation successful" from primaryOperation or "Using cached data" from fallbackOperation


// function loadMultipleResources(urls) {
//   const fetchPromises = urls.map((url) =>
//     fetch(url)
//       .then((response) => response.json())
//       .catch(() => "Failed to fetch")
//   );
//   return Promise.allSettled(fetchPromises);
// }


// loadMultipleResources([
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "invalidUrl",
// ]).then((results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log("Fetched data:", result.value);
//     } else {
//       console.error(result.reason);
//     }
//   });
// });

// Fetched data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// Fetched data: Failed to fetch

// function callback1() {
//   console.log('callback1');
// }

// function callback2() {
//   console.log('callback2');
// }

// function callback3() {
//   console.log('callback3');
// }

// function randomizer(...callbacks) {
//   const totalTime = callbacks.length * 2;
//   let time = 1;
//   const interval = setInterval(() => {
//     console.log(time)
//     let randomIdx = Math.floor(Math.random() * callbacks.length);

//     if (Math.random() > 0.5) {
//       callbacks[randomIdx]();
//     }
    
//     time += 1

//     if (time >= totalTime) {
//       console.log(time)
//       clearInterval(interval);
//     }
//   }, time * 1000);
// }

// randomizer(callback1, callback2, callback3);


// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.querySelector('#container');
//   document.querySelector('html').addEventListener('click', (event) => {

//     // if (event.target.tagName === container.tagName || event.target.parentNode === container) {
//     //   event.stopPropagation();
//     // } else {
//     //   document.querySelector('#container').style = 'display: none';
//     // }
    
//     if (!container.contains(event.target)) {
//       container.style = 'display: none';
//     }
//   });
// })


// document.addEventListener('DOMContentLoaded', () => {
//   function makeBold(element) {
//     element.style = 'font-weight: bold';
//     const bolded = new CustomEvent("bolded");
//     element.dispatchEvent(bolded);
//   }


//   let sectionElement = document.querySelector('section');
//   sectionElement.addEventListener('bolded', (event) => {
//     alert(event.target.tagName)
//     event.target.classList.add('highlight');
//   })

//   makeBold(sectionElement)
//   console.log(sectionElement.classList.contains('highlight'));
//   console.log(sectionElement.style.fontWeight);
// });

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('main').addEventListener('contextmenu', (event => {
//     event.preventDefault();
//     alert(event.target.tagName)
//   })) 
// })


// const ANIMALS = {
//   Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
//   'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
//   'Cold-blooded': ['Salmon', 'Turtle'],
//   Mammal: ['Bear', 'Whale'],
//   Bird: ['Ostrich'],
//   Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
// }

// const CLASSIFICATIONS = {
//   Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
//   Turtle: ['Vertebrate', 'Cold-blooded'],
//   Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
//   Salmon: ['Vertebrate', 'Cold-blooded'],
//   Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
//   Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']
// }


// document.addEventListener('DOMContentLoaded', () => {
//   const classifications = document.querySelector('#animal-classifications');
//   const animals = document.querySelector('#animals');
//   const clearBtn = document.querySelector('#clear');
//   const form = document.querySelector('#selection-filters');

//   const fillOptions = function(element, list) {
//     element.innerHTML = '';

//     list.forEach(value => {
//       let option = document.createElement('option');
//       option.value = value;
//       option.textContent = value;
        
//       element.appendChild(option)
//     });
//   }

//   const setDefault = function() {
//     fillOptions(animals, ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);

//     fillOptions(classifications, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
//   };

//   form.addEventListener('change', (event) => {
//     event.preventDefault();

//     const target = event.target;
//     const selection = event.target.value;
//     let animalList

//     if (target.id === 'animal-classifications') {
//       animalList = ANIMALS[selection];
//       fillOptions(animals, animalList)
//     } else if (target.id === 'animals') {
//       const classificationList = CLASSIFICATIONS[selection];
//       fillOptions(classifications, classificationList);
//     }
//   });


//   clearBtn.addEventListener('click', setDefault)
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelector('ul');
//   const main = document.querySelector('main');

//   const removeAllHighlight = function() {
//     [...main.children, main].forEach(element => {
//       element.classList.remove('highlight');
//     })
//   }

//   navLinks.addEventListener('click', (event) => {
//     const href = event.target.href;
//     const articleId = href.match(/#article-\d+/)[0];
//     const article = document.querySelector(articleId);
    
//     if (!article.classList.contains('highlight')) {
//       removeAllHighlight();
//       article.classList.add('highlight');
//     }
//   });

//   main.addEventListener('click', (event) => {
//     const target = event.target;
//     const parent = target.parentNode;

//     if (target.tagName === 'ARTICLE' || parent.tagName === 'ARTICLE') {
//       if (!parent.classList.contains('highlight')) {
//         removeAllHighlight();
//         parent.classList.add('highlight');
//       }
//     }
//   });

//   document.addEventListener('click', (event) => {
//     const target = event.target;

//     if (!navLinks.contains(target) && !main.contains(target)) {
//       removeAllHighlight();
//       main.classList.add('highlight');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const delegateEvent = function(parentElement, selector, eventType, callback) {
//     if (!document.contains(parentElement)) {
//       return undefined
//     }

//     parentElement.addEventListener(eventType, (event) => {
//       const childElements = [...parentElement.querySelectorAll(selector)];

//       if (childElements.includes(event.target)) {
//         callback(event);
//       }
//     });

//     return true;
//   }

//   // Possible elements for use with the scenarios
//   const element1 = document.querySelector('table');
//   const element2 = document.querySelector('main h1');
//   const element3 = document.querySelector('main');

// // Possible callback for use with the scenarios
//   const callback = ({target, currentTarget}) => {
//     alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
//   };

  // console.log(delegateEvent(element1, 'p', 'click', 'callback'));
  // console.log(delegateEvent(element2, 'p', 'click', callback))
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
//   // console.log(delegateEvent(element3, 'aside p', 'click', callback));
//   console.log(delegateEvent(element2, 'p', 'click', callback));

//   const newP = document.createElement('P');
//   const newContent = document.createTextNode('New Paragraph');
//   newP.appendChild(newContent);

//   element2.appendChild(newP);
// });


// jquery xhr request to bored api
// 

// document.addEventListener('DOMContentLoaded', () => {
//   const captures = document.querySelectorAll('.capture')

//   captures.forEach(capture => {
//     console.log(capture.tagName);
//   })
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const isMatch = function(element, selector) {
//     return element.matches(selector);
//   }

//   console.log(isMatch(document.querySelector('form'), '#order_form'))

//   console.log(isMatch(document.querySelector('p:first-of-type'), '[data-item-sku="cumin"]'))

//   console.log(isMatch(document.querySelector('p:first-of-type'), '[data-item-sku="bagel"]'))

//   console.log(isMatch(document.querySelector('p:nth-child(2)'), 'p'));
// })


// document.addEventListener('DOMContentLoaded', () => {
  
//   const walkList = function() {
//     const walk = function(node, callback) {
//       callback(node);
//       for (let index = 0; index < node.childNodes.length; index += 1) { 
//         walk(node.childNodes[index], callback);
//       }
//     }

//     const formatResult = function(element) {

//       if (element.nodeType === 1) {
//         if (element.classList.contains('list-group')) {
//           const group = element.textContent.split(' ')[0].trimEnd();
//           console.log(`${group}:`);
//         } else if (element.classList.contains('list-item')) {
//           console.log(element.textContent)
//         }
//       }
//     }
  
//     walk(document.body, formatResult)
//   }

//   walkList()
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const children = document.body.children;

//   console.log(children.length) // logs 1

//   const newP = document.createElement('p');
//   document.body.appendChild(newP);

//   console.log(children.length) // logs 2;
// })

// document.addEventListener('DOMContentLoaded', () => {
//   function cloner(nodeSelector, parentSelector, position) {
//     const toCopy = document.querySelector(nodeSelector);
//     const copy = toCopy.cloneNode(true);
//     const parent = document.querySelector(parentSelector);
  
//     parent.insertAdjacentElement(position, copy);
//   }
  
//   cloner('.list', 'main', 'afterbegin');
// })



// const helloAgain = function(n) {
//   setInterval(() => {
//     console.log('Hello, World!')
//   }, n * 1000)
// }

// helloAgain(1);

// app.js file contents

// document.addEventListener('DOMContentLoaded', () => {
//   console.log(document.querySelector(".alert").textContent);
// })


// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector(".popUp").addEventListener(
//     "click",
//     function (event) {
//       event.stopPropagation();
//       alert(event.target.textContent);
//     },
//     true
//   );
  
//   document.querySelector(".highlight").addEventListener("click", function (event) {
//     event.target.setAttribute("style", "color:red");
//   });
// })


// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('#form');
  
//   const getData = function() {
//   const data = new FormData(form);
//   const json = {}

//   for (let [key, value] of data.entries()) {
//     json[key] = value;
//   }
//     return JSON.stringify(json);
//   }
//   const sendRequest = function(method, url, data) {
//     const request = new XMLHttpRequest();
//     request.open(method, url)
//     request.setRequestHeader('Content-Type', 'application/json');

//     request.send(data);
//   }

//   form.addEventListener('submit', event => {
//     event.preventDefault()
//     const data = getData()
//     sendRequest('POST', 'site/path', data);
//   })
// });


// const makePromise = function() {
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve('Yay');
//       } else {
//         reject('Nope');
//       }
//     }, 2000);
//   });
// }

// makePromise()
//             .then(result => console.log(result))
//             .catch(error => console.error(error));


// async function loadUrl(url) {
//   try {
//     let response = await fetch(url);
//     console.log("Got response:", response);
//   } catch (error) {
//     console.log("fetch failed:", response)
//   }
// }

// function loadUrl(url) {
//   return fetch(url)
//               .then(response => {
//                 console.log("Got response:", response)
//               })
//               .catch(error => { 
//                 console.log('fetch failed:', error)
//               });
// }


// loadUrl("https://www.example.com");

// loadUrl("https://www.example.bad");

// app.js file contents
// console.log(document.querySelector(".alert").textContent);

// document.addEventListener('DOMContentLoaded', () => {

//   const walkList = function() {
//     const walk = function(node, callback) {
//       callback(node);
//       for (let index = 0; index < node.childNodes.length; index += 1) { 
//         walk(node.childNodes[index], callback);
//       }
//     }

//     const formatResult = function(element) {

//       if (element.nodeType === 1) {
//         if (element.classList.contains('list-group')) {
//           const group = element.textContent.split(' ')[0].trimEnd();
//           console.log(`${group}:`);
//         } else if (element.classList.contains('list-item')) {
//           console.log('  ' + element.textContent)
//         }
//       }
//     }

//     walk(document.body, formatResult)
//   }

//   walkList()
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const captures = document.querySelectorAll('.capture')

//   captures.forEach(capture => {
//     console.log(capture.tagName);
//   })
// });


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');

  const getData = function() {
  const data = new FormData(form);
  const json = {}

  for (let [key, value] of data.entries()) {
    json[key] = value;
  }
    return JSON.stringify(json);
  }
  const sendRequest = function(method, url, data) {
    const request = new XMLHttpRequest();
    request.open(method, url)
    request.setRequestHeader('Content-Type', 'application/json');

    request.send(data);
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    const data = getData()
    const url = form.action
    sendRequest('POST', url, data);
  })
});