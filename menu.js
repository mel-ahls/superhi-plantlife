const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

// when i click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag closed
// and if not, make the taggle tag say open
toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open")

  if (mainTag.classList.contains("open")) {
    // .contains means "does this contain "open"?"
    toggleTag.innerHTML = `<img src="assets/close.svg"> Close`
  } else {
    toggleTag.innerHTML = `<img src="assets/menu.svg"> Menu`
  }

})