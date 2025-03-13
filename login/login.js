function selectRole(role) {
  // Hide the role selection and show the login form
  document.getElementById("role-selection").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  
  // Set the login title based on the selected role
  const loginTitle = role === "learner" ? "Learner Login" : "Tutor Login";
  document.getElementById("login-title").innerText = loginTitle;

  // Store the selected role (either learner or tutor) to use in validation
  document.getElementById("role").value = role;
}

function login() {
  // Get the username, password, and selected role
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  
  // Dummy credentials for authentication (This could be a simple validation, or you can integrate an API call)
  const credentials = {
      learner: { username: "learn", password: "l123" },
      tutor: { username: "tut", password: "t123" }
  };
  
  // Validate username and password
  if (username === credentials[role].username && password === credentials[role].password) {
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} Login successful!`);
      
      // Redirect to the respective page (student.html for learner, or tutor.html for tutor)
      if (role === "learner") {
        window.location.href = "../student/student.html";  // Correct path
        // Redirect to student page
      } else if (role === "tutor") {
          window.location.href = "../tutor/tutor.html";   // Redirect to tutor page (create a separate tutor page if needed)
      }
  } else {
      document.getElementById("error-message").innerText = "Invalid username or password!";
  }
}

function goBack() {
  // Show the role selection and hide the login form
  document.getElementById("role-selection").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}
