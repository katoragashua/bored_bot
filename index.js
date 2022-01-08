document.getElementById("get-activity").addEventListener("click", function() {
  document.getElementById("activity").classList.remove("slide-in")
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("activity").classList.add("slide-in")
    })
})