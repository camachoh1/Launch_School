$(function() {
  //context
  let products = [{
    name: 'Banana',
    quantity: 14,
    price: 0.79
  }, 
  {
    name: 'Apple',
    quantity: 3,
    price: 0.55
  }]; 

  let template1 = $("#productTemplate").html();
  let productTemplate = Handlebars.compile(template1);

  let template2 = $('#productsList').html();
  let productsList = Handlebars.compile(template2);
  let $list = $('ul');

  // registering partial template
  Handlebars.registerPartial('productTemplate', template1)

  
  let html = productsList({items: products});
  $list.html(html); // write the current list to the page

  let newProduct = {
    name: 'Soup',
    quantity: 1,
    price: 1.29
  };

  let newProductHtml = productTemplate(newProduct)
  // render the new product with the product template
  $list.append(newProductHtml);
});
