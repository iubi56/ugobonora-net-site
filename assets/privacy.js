(function () {
  var key = "ub_privacy_notice_v1";
  var banner = document.querySelector("[data-privacy-banner]");
  if (!banner) return;

  try {
    if (window.localStorage && localStorage.getItem(key) === "dismissed") {
      banner.hidden = true;
      return;
    }
  } catch (error) {}

  banner.hidden = false;

  var buttons = banner.querySelectorAll("[data-privacy-dismiss]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      try {
        if (window.localStorage) localStorage.setItem(key, "dismissed");
      } catch (error) {}
      banner.hidden = true;
    });
  });
})();
