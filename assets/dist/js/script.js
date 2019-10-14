$(document).ready(function() {
  //   $(function() {
  //     $("#myList a:last-child").tab("show");
  //   });
  $("select").click(function() {
    $("select.form-command")
      .siblings("i")
      .toggleClass("fa-chevron-down fa-chevron-up");
  });

  $(".card-header").click(function() {
    // $(".card-header i").toggleClass("fa-minus fa-plus");
    $(this).find("i").toggleClass("fa-minus fa-plus");
  });
  
  $(window).on("resize", function(e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    const newWindowWidth = $(window).width();
    if (newWindowWidth < 481) {
      $(".faq-list-mobile").removeClass("d-none");
      $("#faq-list").addClass("d-none");
    } else {
      $(".faq-list-mobile").addClass("d-none");
      $("#faq-list").removeClass("d-none");
    }

    if (newWindowWidth < 768) {
    } else {
    }
  }
});
