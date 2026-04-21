const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Correct credentials
  const correctUsername = "AMMU";
  const correctPassword = "ammu22";

  if (username === correctUsername && password === correctPassword) {
    // Redirect to Yes/No page
    window.location.href = "question.html";
  } else {
    alert("Incorrect Username or Password ❌");
  }
});
