document.addEventListener('DOMContentLoaded', () => {

  function color(node) {
    node.classList.add('generation-color');
  }

  function isTargetGen(stepsToTargetGen, node) {
    return stepsToTargetGen === 0 && node.tagName !== 'BODY';
  }
  
  function walk(node, callback, gen) {
    if (isTargetGen(gen, node)) {
      callback(node);
    }

    for (let i = 0; i < node.children.length; i += 1) {
      walk(node.children[i], callback, gen - 1);
    }
  }
  
  function colorGeneration(gen) {
    walk(document.body, color, gen);
  }

  colorGeneration(4);
});