$(() => {
    const DOMAIN = 'http://www.boredapi.com/api/'
    const $button = $('button');
    const makeUrl = function(path) {
      return DOMAIN + path + '/';
    }
    
    const makeRequest = function(path, method) {
      return $.ajax({
        method: method,
        url: makeUrl(path),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
  
    const createNewP = function(activity) {
      const $newP = $('<p></p>');
      $newP.text(activity);
      $newP.css('font-weight', 'bold')
      $newP.attr('id', 'activity');
      return $newP
    }
  
    const displayActivity = function(response) {
      const activity = response.activity;
      let $pActivity = $('#activity');
  
      if ($pActivity.is('p')) {
        $pActivity.text(activity);
      } else {
        $pActivity = createNewP(activity);
        $button.before($pActivity);
      }
    }
  
    $button.on('click', (event) => {
      makeRequest('activity')
                          .done(result => {
                            if (result.error) {
                              throw new Error(`error: ${result.error}`);
                            } else {
                              displayActivity(result)
                            }
                          })
                          .fail((xhr, status, error) => console.error(error, xhr, status));
    });
  });