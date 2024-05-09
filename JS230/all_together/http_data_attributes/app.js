// jquery using jquery to manipulate data attributes using an event handler. 

// $('a').on('click', function(e) {
//   e.preventDefault();

//   let blockToShow = $(this).data('block');
//   $('article').hide().filter('[data-block="' + blockToShow + '"]').show();
// });

// DOM API

document.addEventListener('DOMContentLoaded', function() {
  var gold = document.getElementById('gold');
  gold.dataset.block = 'silver'
  gold.dataset.sponsor = 'Newman\'s Own';
  delete gold.dataset.block;
  console.table(gold.dataset);
});

