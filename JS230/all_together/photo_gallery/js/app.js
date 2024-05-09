$(() => {
  $ul = $('ul');
  let $currentActive = $ul.find('img').eq(0).addClass('active');
  const $examplePhoto = $('figure img');
  
  const removeActiveClass = function() {
    const $lists = $ul.find('img');
    $lists.each(function() {
      $(this).removeClass('active');
    });
  }

  $ul.on('click', (event) => {
    event.preventDefault();
    let $target = $(event.target);
    
    removeActiveClass();

    if ($target.is('img') && !$target.hasClass('active')) {
      $currentActive = $target.addClass('active');
      const currentImage = $currentActive.attr('src');
      
      $examplePhoto.stop().fadeOut(500, function() {
        $(this).attr('src', currentImage).fadeIn(300);
      });
    }
  });
});