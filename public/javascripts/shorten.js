$('.btn-shorten').on('click', function(){

  $.ajax({
    url: '/',
    type: 'POST',
    dataType: 'JSON',
    data: {url: $('#url-field').val()},
    success: function(data){
        var resultHTML = '<a class="result" href="' + data.link + '">'
            + data.link + '</a>';
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
    }
  });

});
