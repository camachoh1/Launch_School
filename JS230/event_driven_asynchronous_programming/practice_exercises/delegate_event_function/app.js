document.addEventListener('DOMContentLoaded', () => {
  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };
  
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (!parentElement) {
      return undefined;
    }

    parentElement.addEventListener(eventType, event => {
      let childElements = [...parentElement.querySelectorAll(selector)];
      
      if (childElements.includes(event.target)) {
        callback(event);
      }
    });

    return true;
  }

  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  const newP = document.createElement('P');
  const newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);

  console.log(delegateEvent(element2, 'p', 'click', callback));
});