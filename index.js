function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.querySelector("#eye-icon ion-icon");

    // Toggle password visibility
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
        eyeIcon.setAttribute("name", "eye-off");  // Change icon to "eye-off"
    } else {
        passwordField.type = "password";  // Hide password
        eyeIcon.setAttribute("name", "eye");  // Change icon to "eye"
    }
}
