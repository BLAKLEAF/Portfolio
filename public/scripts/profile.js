

$(window).on("scroll", () => {
  if ($(window).scrollTop()){
    $(".profile").addClass("profile-scroll");
  }else{
    $(".profile").removeClass("profile-scroll");
  }
});

$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".icon-section").addClass("icons-scroll");
  }else{
    $(".icon-section").removeClass("icons-scroll");
  }
});

$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".icon-github").addClass("icon-github-scroll");
  }else{
    $(".icon-github").removeClass("icon-github-scroll");
  }
});

$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".icon-linkedin").addClass("icon-linkedin-scroll");
  }else{
    $(".icon-linkedin").removeClass("icon-linkedin-scroll");
  }
});

$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".icon-dribbble").addClass("icon-dribbble-scroll");
  }else{
    $(".icon-dribbble").removeClass("icon-dribbble-scroll");
  }
});



// $(window).on("scroll", () => {
//   if($(window).scrollTop()){
//     $(".icon-github").addClass("icons-github-scroll");
//   }else{
//     $(".icon-github").removeClass("icons-github-scroll");
//   }
// });
//
// $(window).on("scroll", () => {
//   if($(window).scrollTop()){
//     $(".icon-linkedin").addClass("icons-linkedin-scroll");
//   }else{
//     $(".icon-linkedin").removeClass("icons-linkedin-scroll");
//   }
// });
//
// $(window).on("scroll", () => {
//   if($(window).scrollTop()){
//     $(".icon-dribbble").addClass("icons-dribbble-scroll");
//   }else{
//     $(".icon-dribbble").removeClass("icons-dribbble-scroll");
//   }
// });

$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".text-section").addClass("text-link-scroll");
  }else{
    $(".text-section").removeClass("text-link-scroll");
  }
});


$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".intro").addClass("intro-scroll");
  }else{
    $(".intro").removeClass("intro-scroll");
  }
});

$(window).on("scroll", () => {
  if($(window).scrollTop()){
    $(".name").addClass("name-scroll");
  }else{
    $(".name").removeClass("name-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()){
    $(".designation").addClass("designation-scroll");
  }else{
    $(".designation").removeClass("designation-scroll");
  }
});
