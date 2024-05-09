$(function() {
  let $p = $('p');
  let OUTPUT = "Your favourite fruit is: "

  $("ul").on("click", "a", function (e) {
    e.preventDefault();
    $(e.target).closest("li").remove();
  });
  
  $("a").on("click", function(event) { // anchor click event listener
    event.preventDefault();
    let $anchor = $(this);
    $p.text(OUTPUT + $anchor.text());
  });

  $("form").on("submit", function(event) { // form submit event listener
    event.preventDefault();
    let $input = $(this).find("input[type=text]");
    $p.text(OUTPUT + $input.val());
  });
});
