$(document).ready(function () {
  $('#tosBtn').click(function () {
    $('#tosDiv').toggle();
  });

  $('#ppBtn').click(function () {
    $('#ppDiv').toggle();
  });

  $('#tosLi').click(function () {
    $('#tosLi').addClass('active');
    $('#ppLi').removeClass('active');
  });
  $('#ppLi').click(function () {
    $('#tosLi').removeClass('active');
    $('#ppLi').addClass('active');
  });
});
