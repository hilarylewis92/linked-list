$('#createbtn').on('click', function () {
  var title = $('#title-input').val();
  var url = $('#url-input').val();
  $('.bookmark-list').append('<li class="unread">' + title +  url + '</li>');

  $('.bookmark-list').append('<button type="button" id="readbtn">Unread</span></button>');

  $('.bookmark-list').append('<button type="button" id="removebtn">Remove</button>');

  $("input[type=text], textarea").val("");
  $("input[type=url], textarea").val("");

  // location.href = $(this).find('#url-input').attr('href');
});

$('#readbtn').on('click', function () {
  $(this).siblings().toggleClass("unread");
});

$('#removebtn').on('click', function () {
  $(this).siblings().remove();
});
