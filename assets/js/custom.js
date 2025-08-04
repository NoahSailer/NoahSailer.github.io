document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("custom-modal");
  const closeBtn = document.querySelector(".custom-close");

  document.querySelectorAll("a.popup-trigger").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
