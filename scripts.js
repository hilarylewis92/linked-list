$('#createbtn').on('click', function () {
  var val = $('#title-input').val();
  $('.title-list').append('<li>' + val + '</li>');
});
