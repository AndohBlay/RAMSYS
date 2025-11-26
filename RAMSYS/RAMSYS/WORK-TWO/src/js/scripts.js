const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful! 🎉";
    form.classList.add("success");
    setTimeout(() => {
      window.location.href = "home.html"; // optional redirect
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password ❌";
  }
});
