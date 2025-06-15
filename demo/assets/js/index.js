$(document).ready(() => {
  setTimeout(() => {
    $(".toast").fadeToggle()
  }, 5000)
  $("#theme-toggle").on("click", (e) => {
    // If the toggle is checked, set dark mode, else set light mode
    const body = document.querySelector("body")
    if (e.target.checked) {
      body.setAttribute("data-theme", "dark")
      window.localStorage.setItem("theme", "dark")
    } else {
      body.setAttribute("data-theme", "light")
      window.localStorage.setItem("theme", "light")
    }
  })
  // Check if the theme is set in local storage
  const theme = window.localStorage.getItem("theme")
  if (theme) {
    const body = document.querySelector("body")
    body.setAttribute("data-theme", theme)
    if (theme === "dark") {
      document.querySelector("#theme-toggle").checked = true
    }
  }
})
