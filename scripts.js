var removeButton = $('#readbtn');
var markAsReadButton = $('#readbtn');
var createButton = $('#createbtn');

function toggleButton (){
  if ($('#title-input').val() !== '' || $('#url-input').val() !== '') {
    createButton.attr('disabled', false);
  } else {
    createButton.attr('disabled', true);
  }
}

$('#title-input').on('keyup', function(){
  toggleButton();
});
$('#url-input').on('keyup', function(){
  toggleButton();
});


$('#createbtn').on('click', function () {
  var title = $('#title-input').val();
  var url = $('#url-input').val();
  $('#form')[0].reset();

  if (title === "" || url === "") {
    alert('Error: Please add both a title and URL before creating bookmark.');
    return;

  }

  makeBookmark (title, url);

  function makeBookmark (title, url) {
    return $('.bookmark-list').append(
      '<li class="bookmark">' +
        '<span>' + title +'</span>' +
        '<span><a href="' + url + '" target="_blank">' + url + '</a></span>' +
        '<button type="button" class="readbtn"> Mark as Read </button>' +
        '<button type="button" class="removebtn"> Remove </button>' +
      '</li>'
    );
  }

});

$('.bookmark-list').on('click','.readbtn',function () {
  $(this).parent().toggleClass("read");
});

$('.bookmark-list').on('click', '.removebtn', function () {
  $(this).parent().remove();
});


$('button').on ('click', function() {
  return $('.total').append($('.bookmark').length);
});
