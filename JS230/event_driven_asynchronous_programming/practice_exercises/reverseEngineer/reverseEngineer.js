document.addEventListener('DOMContentLoaded', () => {
  let html = document.querySelector('html');
  
  html.addEventListener('click', (event) => {
    // if (event.target.id !== 'container') {
    //   document.querySelector('#container').style = 'display: none';
    // }

    let container = document.querySelector('#container');
    if (!container.contains(event.target)) {
      container.style = 'display: none';
    }
  });

  // document.querySelector('#container').addEventListener('click', event => {
  //   event.stopPropagation();
  // })
})


