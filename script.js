
let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("ageError").textContent = "";

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email.";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    if (age === "") {
        document.getElementById("ageError").textContent =
            "Age is required.";
        isValid = false;
    } else if (Number(age) < 18 || Number(age) > 100) {
        document.getElementById("ageError").textContent =
            "Age must be between 18 and 100.";
        isValid = false;
    }

   
if (isValid) {

    // Get the saved registrations
    let registeredPeople =
        JSON.parse(localStorage.getItem("registeredPeople")) || [];

    // Add the new person's data
    let newPerson = {
        name: name,
        email: email,
        age: Number(age)
    };

    registeredPeople.push(newPerson);

    // Save the updated array in the browser
    localStorage.setItem(
        "registeredPeople",
        JSON.stringify(registeredPeople)
    );

    alert("Registration successful!");

    form.reset();
}


});
