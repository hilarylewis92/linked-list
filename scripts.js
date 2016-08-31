$('#createbtn').on('click', function () {
  var title = $('#title-input').val();
  $('.title-list').append('<li>' + title + '</li>');
  var url = $('#url-input').val();
  $('.url-list').append('<li>' + url + '</li>');

  // location.href = $(this).find('#url-input').attr('href');
});

$('#readbtn').on('click', function () {

});
