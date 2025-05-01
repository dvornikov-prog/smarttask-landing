
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (name && email && message) {
    formMsg.textContent = "Thank you for your message!";
    formMsg.style.color = "green";
    this.reset();
  } else {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
  }
});
