// auth.js

// ===== Register Logic =====
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("username").value;
    const password = document.getElementById("regPassword").value;

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Registered successfully! Please login.");
    window.location.href = "index.html";
  });
}

// ===== Login Logic =====
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      sessionStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      window.location.href = "chat.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
}