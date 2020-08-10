const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

// whenever we click the toggleTag, toggle a class of open on the main tag
toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open")
})