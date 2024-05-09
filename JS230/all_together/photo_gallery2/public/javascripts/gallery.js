$(() => {
  const DOMAIN = 'http://localhost:3000/'; 

  const photosTemplate = Handlebars.compile($('#photos').html());
  const commentsTemplate = Handlebars.compile($('#photo_comments').html());
  const photoCommentTemplate = Handlebars.compile($('#photo_comment').html());
    Handlebars.registerPartial('comment', photoCommentTemplate);
  const photoInfoTemplate = Handlebars.compile($('#photo_information').html());

  const prevAnchor = $('.prev');
  const nextAnchor = $('.next');
    
  const makeUrl = function(path) {
    return DOMAIN + path;
  }

  const makeRequest = function(path, method) {
    return $.ajax({
      url: makeUrl(path),
      method: method,
      contentType: 'application/json',
    });
  }

  const renderPhotos = function(photos) {
    const $slides = $('#slides');
    $slides.html(photosTemplate({photos: photos}));
  }

  const renderPhotoInfo = function(photo) {
    const $header = $('section > header');
    $header.html(photoInfoTemplate({title: photo.title, created_at: photo.created_at, id: photo.id, likes: photo.likes}));
  }

  const renderComments = function(comments) {
    const $comments = $('#comments ul');
    $comments.html(commentsTemplate({comments: comments}));
  }

  const getComments = function(id) {
    let path = 'comments?photo_id=' + id;
    makeRequest(path, 'GET')
                    .done(result => renderComments(result));
  }

  makeRequest('photos', 'GET')
                      .done(result => {
                        renderPhotos(result);
                        renderPhotoInfo(result[0]);
                        getComments(result[0].id)
                      })
                      .fail(error => console.error(error));

  nextAnchor.on('click', event => {
    event.preventDefault();
    const slides = $('#slides');
    console.log(slides);
  });

  prevAnchor.on('click', event => {
    event.preventDefault();
  })
});