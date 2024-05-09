// jQuery
$(() => {
  $('#grocery-form').on('submit', function(event) {
    event.preventDefault();
    const $name = $('#item-name').val();
    let $quantity = $('#item-quantity').val() || "1";

    const text = `${$quantity} ${$name}`;
    const $li = $('<li></li>');

    $li.text(text);

    $('#grocery-list').append($li);
    this.reset();
  });
});