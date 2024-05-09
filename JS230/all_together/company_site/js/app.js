// DOM API. NOTE: uncomment .hide and .show classess in CSS

// document.addEventListener('DOMContentLoaded', () => {
//   let modal = document.querySelector('#modal');
//   let modalLayer = document.querySelector('#modal-layer');
//   let modalTitle = modal.querySelector('h3');
//   let modalImage = modal.querySelector('img');
//   let modalText = modal.querySelector('p');
//   let teamLinks = document.querySelectorAll('#team li > a');

//   function showModal(event) {
//     event.preventDefault();
//     let link = event.target.closest('a');
//     modalTitle.textContent = link.dataset.name;
//     modalImage.src = link.dataset.imageSource;
//     modalImage.alt = link.dataset.name;
//     modalText.textContent = link.dataset.text;
//     modalLayer.classList.replace('hide', 'show');
//     modal.classList.replace('hide', 'show');
//   }

//   function hideModal(event) {
//     event.preventDefault();
//     let link = event.target.closest('a');
//     modalTitle.textContent = '';
//     modalImage.src = '';
//     modalImage.alt = '';
//     modalText.textContent = '';
//     modalLayer.classList.replace('show', 'hide');
//     modal.classList.replace('show', 'hide');
//   }

//   teamLinks.forEach(link => link.addEventListener('click', showModal));
//   document.querySelector('#modal-layer').addEventListener('click', hideModal);
//   document.querySelector('#modal a.close').addEventListener('click', hideModal);
//   document.addEventListener('keyup', function(event) {
//     if (event.keyCode === 27) {
//       hideModal();
//     }
//   });
// });

// jquery using fadeIn() and fadeOut()

$(() => {
  let $modal = $('#modal');
  let $modalLayer = $('#modal-layer');
  let $modalTitle = $modal.find('h3');
  let $modalImage = $modal.find('img');
  let $modalText = $modal.find('p');
  let $teamLinks = $('#team li > a');

  function showModal(event) {
    event.preventDefault();
    var $link = $(this);

    // Using .attr() to access data attributes
    var name = $link.attr('data-name');
    var imageSource = $link.attr('data-image-source');
    var text = $link.attr('data-text');

    $modalTitle.text(name);
    $modalImage.attr('src', imageSource).attr('alt', name);
    $modalText.text(text);

    $modalLayer.fadeIn(300);
    $modal.fadeIn(300);
  }

  function hideModal(event) {
    event.preventDefault();

    $modalLayer.fadeOut(300);
    $modal.fadeOut(300);
  }

  $teamLinks.click(showModal);
  $modalLayer.click(hideModal);
  $modal.find('a.close').click(hideModal);
})