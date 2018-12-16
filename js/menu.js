const toggleTag = document.querySelector("li.menu-toggle")
const mainTag = document.querySelector("main")
const closeTag = document.querySelector("li.close-button")



// when I click the toggletag, toggle a class of open on the main mainTag
// if its open make the toggle tag say closed
toggleTag.addEventListener("click", function () {
  mainTag.classList.add("open")

  if (mainTag.classList.contains("open")) {
    closeTag.innerHTML = "Close"
  } else {
    closeTag.innerHTML = ""
  }

  return false
})

closeTag.addEventListener("click", function () {
  mainTag.classList.remove("open")

  return false
})
