$(() => {
  // find the handlebars template
  let $template = $('#handlebars-demo').html();
  // context represents the info that will be inserted in the template
  let context = {"name": "Elver Galarga", "occupation": "mama burra"};
  //compile template data into a function and store in a variable using the Handlebars object and the compile method which receives the template as an argument.
  let templateScript = Handlebars.compile($template);

  // compile the context data using the templateScript function, this will return a string.
  let html = templateScript(context); //  <div>My name is Elver Galarga. I am a mama burra</div>

  // insert the code into the page.
  $(document.body).append(html)

});