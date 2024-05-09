document.addEventListener('DOMContentLoaded', () => {
  function invalidNodes(node1, node2) {
    return (!node1 || !node2) || ([...node1.children].includes(node2) || [...node2.children].includes(node1))
  }

  function swap(firstNode, secondNode, parent) {
    let nextSibling = firstNode.nextSibling;
    parent.insertBefore(firstNode, secondNode);
    
    if (nextSibling) {
      nextSibling.parentNode.insertBefore(secondNode, nextSibling)
    } else {
      firstNode.parentNode.appendChild(secondNode);
    }
  }
  
  function nodeSwap(node1Id, node2Id) {
    let firstNode = document.querySelector(`[id='${node1Id}']`);
    let secondNode = document.querySelector(`[id='${node2Id}']`);

    if (invalidNodes(firstNode, secondNode)) return undefined;

    if (firstNode.parentNode.tagName === 'BODY' && secondNode.parentNode.tagName === 'BODY') {
      swap(firstNode, secondNode, document.body)
    } else {
      let parent = firstNode.parentNode;
      swap(firstNode, secondNode, parent);
    }

    return true;
  }
  nodeSwap(3,1)
  nodeSwap(7,9)

});