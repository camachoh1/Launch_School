document.addEventListener('DOMContentLoaded', () => {
  let nav = document.querySelector('header ul');
  let main = document.querySelector('main');

  function removeHighlight() {
    const highlighted = document.querySelector('.highlight');

    if (highlighted) {
      highlighted.classList.remove('highlight');
    }
  }

  function highlightArticle(articleToHighlightId) {
    removeHighlight();

    let element = document.querySelector(articleToHighlightId);
    element.classList.add('highlight');
  }


  // document.addEventListener('click', event => {
  //   let element = event.target;

  //   if (element.tagName === 'A') {
  //     let articleItoHighlightId = element.href.match(/#[a-z]+-\d+/)[0];
  //   highlightArticle(articleItoHighlightId);
  //   } else if (element.parentElement === 'ARTICLE') {
  //     let articleToHighlightId = '#' + parent.id;
  //     highlightArticle(articleToHighlightId)
  //   } else {}
  // })
  nav.addEventListener('click', event => {
    let articleItoHighlightId = event.target.href.match(/#[a-z]+-\d+/)[0];
    highlightArticle(articleItoHighlightId);
  });

  main.addEventListener('click', event => {
    let parent = event.target.parentElement;
    if (parent.tagName === 'ARTICLE') {
      let articleToHighlightId = '#' + parent.id;
      highlightArticle(articleToHighlightId)
    } else {
      removeHighlight();
      main.classList.add('highlight')
    }
  });
});