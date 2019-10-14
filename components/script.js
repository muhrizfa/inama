$(document).ready(function() {
  $("select").click(function() {
    $("select.form-command")
      .siblings("i")
      .toggleClass("fa-chevron-down fa-chevron-up");
  });

  $(".card-header").click(function() {
    $(".card-header i")
      .toggleClass("fa-minus fa-plus");
  });
});
