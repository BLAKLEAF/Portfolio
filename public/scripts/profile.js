$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".header").removeClass("header-scroll-down").addClass("header-scroll-up");
  } else {
    $(".header").removeClass("header-scroll-up").addClass("header-scroll-down");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".header-profile").addClass("header-profile-scroll");
  } else {
    $(".header-profile").removeClass("header-profile-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".header-text-link-container").addClass("header-text-link-scroll");
  } else {
    $(".header-text-link-container").removeClass("header-text-link-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".profile").addClass("profile-scroll");
  } else {
    $(".profile").removeClass("profile-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".icon-section").addClass("icons-scroll");
  } else {
    $(".icon-section").removeClass("icons-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".icon-github").addClass("icon-github-scroll");
  } else {
    $(".icon-github").removeClass("icon-github-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".icon-linkedin").addClass("icon-linkedin-scroll");
  } else {
    $(".icon-linkedin").removeClass("icon-linkedin-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".icon-dribbble").addClass("icon-dribbble-scroll");
  } else {
    $(".icon-dribbble").removeClass("icon-dribbble-scroll");
  }
});


$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".text-section").addClass("text-link-scroll");
  } else {
    $(".text-section").removeClass("text-link-scroll");
  }
});


$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".intro").addClass("intro-scroll");
  } else {
    $(".intro").removeClass("intro-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".name").addClass("name-scroll");
  } else {
    $(".name").removeClass("name-scroll");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".designation").addClass("designation-scroll");
  } else {
    $(".designation").removeClass("designation-scroll");
  }
});

// $(window).on("scroll", () => {
//   if ($(window).scrollTop()) {
//     $("main").addClass("main-scroll");
//   } else {
//     $("main").removeClass("main-scroll");
//   }
// });

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $("footer").removeClass("footer-scroll-down").addClass("footer-scroll-up");
  } else {
    $("footer").removeClass("footer-scroll-up").addClass("footer-scroll-down");
  }
});

$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".hire-link").addClass("hire-scroll");
  } else {
    $(".hire-link").removeClass("hire-scroll");
  }
});
