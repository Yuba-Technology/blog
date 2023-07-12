// !For index.pug/index.html
window.addEventListener("DOMContentLoaded", () => {
  // If is PC...
  const $toggleBtn = $("#profile-toggle");
  if (window.screen.width > 768) {
    $toggleBtn.attr("aria-expanded", true);
    return;
  }

  $toggleBtn.attr("aria-expanded", false);

  const $elements = $(
    ".friend-widget, .tag-widget, .archives-widget, .categories-widget, .recent-widget, .sns-container>*, .profile-container blockquote, .profile-container address"
  );
  $toggleBtn.click(() => {
    $elements.slideToggle("slow");
    $toggleBtn.toggleClass("expanded");
    $toggleBtn.attr("aria-expanded", $toggleBtn.hasClass("expanded"));
  });
});
