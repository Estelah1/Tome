window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

function login() {
  const username = document.getElementById("formUser").value;
  const password = document.getElementById("formPass").value;

  // Make an AJAX request to your API for authentication
  $.ajax({
    url: "http://localhost:3000/api/v1/signin",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({ username, password }),
    success: function (response) {
      // Assuming your API returns a token in the response
      // Set the token as a cookie (you may need to adjust this based on your backend)
      document.cookie = `token=${response.token}; path=/`;

      // Redirect to the Dashboard.html
      window.location.href = "Dashboard.html";
    },
    error: function (error) {
      // Handle authentication failure
      console.error("Authentication failed:", error.responseJSON.message);
      alert("Authentication failed. Please check your credentials.");
    },
  });
}
