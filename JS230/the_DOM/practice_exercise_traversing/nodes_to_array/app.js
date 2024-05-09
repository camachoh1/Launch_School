// recursive approach
document.addEventListener('DOMContentLoaded', () => {
  function toArray(node) {
    let childrenArray = [...node.children].map(child => toArray(child));
    return [node.tagName, childrenArray];
  }

  function nodesToArr() {
    return toArray(document.body);
  }
  console.log(nodesToArr());
});

// iterative approach
// document.addEventListener('DOMContentLoaded', () => {
//   function formatNodes(nodes) {
//     return nodes.map(node => [node]);
//   }

//   function getNextGenerationParents(currentParentNodes) {
//     let newParentNodes = [];
//     currentParentNodes.forEach((parentNode, index, parentNodes) => {
//       parentNodes[index] = appendChildren(parentNode);
//       if (parentNodes[index][1].length > 0) {
//         newParentNodes = newParentNodes.concat(parentNodes[index][1]);
//       }
//     });

//     return newParentNodes;
//   }

//   function anyChildren(parentNodes) {
//     for (let i = 0; i < parentNodes.length; i += 1) {
//       if (parentNodes[i][0].children.length > 0) {
//         return true;
//       }
//     }

//     return false;
//   }

//   function appendChildren(parentNode) {
//     const children = formatNodes([...parentNode[0].children]);
//     parentNode[0] = parentNode[0].tagName;
//     parentNode.push(children);

//     return parentNode;
//   }

//   function nodesToArr() {
//     const nodesArray = ['BODY', formatNodes([...document.body.children])];
//     let currentParentNodes = nodesArray[1];

//     while (anyChildren(currentParentNodes)) {
//       currentParentNodes = getNextGenerationParents(currentParentNodes);
//     }

//     getNextGenerationParents(currentParentNodes);

//     return nodesArray;
//   }
//   console.log(nodesToArr())
// })