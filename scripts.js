

$('#createbtn').on('click', function () {

  var title = $('#title-input').val();
  var url = $('#url-input').val();
  //  $('input[type= #url-input').val();

  if (title === "" || url === "") {
    alert('Error: add a title and url before creating a bookmark.');
    return;
  }

  $('.bookmark-list').append('<div class = "unread"><li class = "title">' + title +'</li><li class = "url"><a href = "'+url+'" target="_blank">' + url + '</a></li></div>' + '<button type="button" id="readbtn">Unread</button>' + '<button type="button" id="removebtn">Remove</button>');

  // $("input[type=text], textarea").val("");
  // $("input[type=url], textarea").val("");


  // location.href = $(this).find('#url-input').attr('href');
});

$('#readbtn').on('click', function () {
  $('.unread').siblings().toggleClass("read");
});

$('#removebtn').on('click', function () {
  $(this).siblings().remove();
});
