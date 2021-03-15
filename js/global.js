const topLink = document.querySelector(".top-link");
console.log("EVO MEEE");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
