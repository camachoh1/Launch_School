function stripComments(str, markers) {
  let scapedMarkers = markers.map(m => '\\' + m).join('|');
  let regex = new RegExp("(" + scapedMarkers + ")\\s*[^\\n]*", 'g');

  return str.replace(regex, '').split('\n').map(word => word.trim()).join('\n');
} 

console.log(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));

console.log(stripComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));

console.log(stripComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));