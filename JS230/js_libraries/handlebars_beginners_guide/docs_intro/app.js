document.addEventListener('DOMContentLoaded', () => {
  // compile the template
  const template = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>');

  // execute the compiled template and print the output to the console

  console.log(document.body.append(template({ doesWhat: 'Rocks!'})));
});