

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
      '<div class = "unread">' +
        '<li>' + title +'</li>' +
        '<li><a href="' + url + '" target="_blank">' + url + '</li></a>' +
        '<button type="button" id="readbtn"> Mark as Read </button>' +
        '<button type="button" id="removebtn"> Remove </button>' +
      '</div>'
    );
  }
});

$('#readbtn').on('click', function () {
  $('.unread').siblings().toggleClass("read");
});

$('#removebtn').on('click', function () {
  $(this).siblings().remove();
});
