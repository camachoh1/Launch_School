$(() => {
  const $form = $('form');
  const $accordion = $('#accordion');
  let $text;
  
  $form.on('submit', event => {
    event.preventDefault();
    $text = $('#key').val();
    console.log($text);

    $(document).off('keypress').on('keypress', function(event) {
      let key = event.key;
  
      if (key !== $text) {
        return;
      }
    }); 
  });
});