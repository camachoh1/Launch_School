$(() => {
  let posts = [];
  let post = {
    tags: ['vacilon', 'burro viejo', 'mama burras', 'cococho'],
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  };

  let post2 = {
    title: 'el vale y la burra',
    published: 'April 1 2021',
    body: 'el vale se enamoro de maria casquito una tarde de septiembre.'
  }

  posts.push(post);
  posts.push(post2);
  

  Handlebars.registerPartial('tag', $('#tag').html());

  const $template = $('#post').html();
  const templateScript = Handlebars.compile($template);
  const html = templateScript({posts: posts});
  $('body').append(html);
});