

$('#createbtn').on('click', function () {

  var title = $('#title-input').val();
  var url = $('#url-input').val();

  if (title === "" || url === "") {
    alert('Error: add a title and url before creating a bookmark.');
    return;
  }

  $('.bookmark-list').append('<li class="unread">' + title +'</li>').append('<li class="unread">' + url +'</li>');

  $('.bookmark-list').append('<button type="button" id="readbtn">Unread</span></button>');

  $('.bookmark-list').append('<button type="button" id="removebtn">Remove</button>');

  // $("input[type=text], textarea").val("");
  // $("input[type=url], textarea").val("");


  // location.href = $(this).find('#url-input').attr('href');
});

$('#readbtn').on('click', function () {
  $(this).siblings().toggleClass("read");
});

$('#removebtn').on('click', function () {
  $(this).siblings().remove();
});
