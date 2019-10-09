$(document).ready(function() {
  //   $(function() {
  //     $("#myList a:last-child").tab("show");
  //   });

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
