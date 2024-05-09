document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  document.querySelectorAll('article').forEach(article => {
    article.style.display = 'none';
  });

  ul.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    let blockType;
    
    if (target.tagName === 'A') {
      console.table(target.dataset)
      blockType = target.dataset.block;
    }

    const activeArticle = document.querySelector(`article[data-block=${blockType}`);

    if (activeArticle) {
      activeArticle.style.display = 'block';
    }
  });
});