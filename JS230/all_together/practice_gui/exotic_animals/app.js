document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector('#gallery');
  let timeout;
  main.addEventListener('mouseenter', event => {
    let target = event.target;
    if (target.tagName === 'IMG') {
      timeout = setTimeout(() => {
        target.nextElementSibling.classList.replace('hidden', 'visible')
      }, 2000)
    }
  }, true);

  main.addEventListener('mouseleave', event => {
    let target = event.target;
    if (target.tagName === 'IMG') {
      // Clear the timeout to prevent the tooltip from showing after leaving the image
      clearTimeout(timeout);
      // Check if the tooltip is actually visible before trying to hide it
      if (target.nextElementSibling.classList.contains('visible')) {
        target.nextElementSibling.classList.replace('visible', 'hidden');
      }
    }
  }, true);
});