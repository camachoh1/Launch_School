// let element = [];

// function isInput(node) {
//   return node.nodeName === 'INPUT' 
// }

// function walk(node, callback) {
//   if (callback(node)) {element.push(node)}

//   for (let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback);
//   }
// }

// let first = true;
// function isP(node) {
//   return node.nodeName === 'P';
// }

// function walk(node, callback) {
//   if (callback(node) && !first) {
//     node.classList.add('stanza');
//   } else if (callback(node) && first) {
//     first = false;
//   }

//   for (let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback);
//   }
// }


// let images = [];

// const walk = function(node) {
//   if (node.NodeName === 'IMG') {
//     images.push(node);
//   }

//   for (let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i]);
//   }
// }

// let png = images.filter(image => {
//   return image.src.match('png');
// });

// console.log(png)


// function walk(node, callback) {
//   callback(node);
//   for (let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback);
//   }
// }

// walk(document, node => {
//   if (node.nodeName === 'A') {
//     node.style.color = 'red'
//   }
// });

const getElementsByTagName = function(node,tagName) {
  let nodes = [...node.childNodes];
  let result = [];

  nodes.forEach(node => {
    if (node.nodeName === tagName) {
      result.push(node);
    }
  });

  return result;
}

const addClass = function(nodes, className) {
  nodes.forEach(node => {
    node.classList.add(className)
  });
}

