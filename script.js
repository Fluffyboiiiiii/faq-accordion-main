document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("#img");
  images.forEach(function (img) {
    img.setAttribute("data-active", "true");
  });
});

function myFunction(event) {
  var img = event.target;
  var imgParent = img.parentElement;
  var articleElement = imgParent.nextElementSibling;
  var isActive = img.getAttribute("data-active") === "true";
  if (isActive) {
    articleElement.style.display = "flex";
    img.src = "./assets/images/icon-minus.svg";
  } else {
    articleElement.style.display = "none";
    img.src = "./assets/images/icon-plus.svg";
  }
  img.setAttribute("data-active", isActive ? "false" : "true");
}
