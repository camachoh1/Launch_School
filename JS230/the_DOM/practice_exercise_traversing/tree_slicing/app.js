document.addEventListener('DOMContentLoaded', () => {
  function sliceTree(parentId, childId) {
    let parentTag = document.querySelector(`[id='${parentId}']`).tagName;
    
    let child = document.querySelector(`[id='${childId}']`);
    let parent;
    let result = [];

    if (!parentTag || !child) return undefined;
    
    result.unshift(child.tagName);

    do {
      parent = child.parentNode
      result.unshift(parent.tagName);
      child = parent;
    } while(parent.tagName !== parentTag && parent.tagName !== 'BODY');
    
    if (result.includes('BODY')) {
      return undefined;
    } else {
      return result
    };
  }

  console.log(sliceTree(11, 19));
});