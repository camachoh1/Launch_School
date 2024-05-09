document.addEventListener('DOMContentLoaded', () => {
  function getTagNames(htmlCollection) {
    const elementsArray = [...htmlCollection];
    return elementsArray.map(element => element.tagName);
  }
  
  function domTreeTracer(id) {
    let currentElement = document.querySelector(`[id='${id}']`);
    let parentElement;
    const domTree = [];

    do {
      parentElement = currentElement.parentNode;
      let children = getTagNames(parentElement.children);
      domTree.push(children);

      currentElement = parentElement;
    } while (parentElement.tagName !== 'BODY');

    console.log(domTree)
  }
  domTreeTracer(1)
});
