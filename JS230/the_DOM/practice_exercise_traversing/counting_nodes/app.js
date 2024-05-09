function walk(node, callback) {
  callback(node)

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function childNodes(id) {
  let element = document.querySelector(`[id='${id}']`)
  let directChildren = [...element.childNodes];
  let indirectChildrenCount = 0;

  directChildren.forEach(child => {
    [...child.childNodes].forEach(node => walk(node, () => {
      indirectChildrenCount += 1
    }));
  });

  console.log([directChildren.length, indirectChildrenCount]);
}


childNodes(1); //[9, 12]
childNodes(4); // [3, 1]
childNodes(9); // [1, 1]