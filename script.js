function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const progress = document.getElementById("progress");
    const strengthMessage = document.getElementById("strengthMessage");

    // Criteria Elements
    const lengthRequirement = document.getElementById("length");
    const uppercaseRequirement = document.getElementById("uppercase");
    const lowercaseRequirement = document.getElementById("lowercase");
    const numberRequirement = document.getElementById("number");
    const specialRequirement = document.getElementById("special");

    // Criteria
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Update UI for Requirements
    lengthRequirement.style.color = hasLength ? "green" : "red";
    uppercaseRequirement.style.color = hasUppercase ? "green" : "red";
    lowercaseRequirement.style.color = hasLowercase ? "green" : "red";
    numberRequirement.style.color = hasNumber ? "green" : "red";
    specialRequirement.style.color = hasSpecialChar ? "green" : "red";

    // Calculate Strength
    let strength = 0;
    if (hasLength) strength++;
    if (hasUppercase) strength++;
    if (hasLowercase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;

    // Update Progress Bar and Strength Message
    let progressWidth = (strength / 5) * 100;
    progress.style.width = `${progressWidth}%`;

    if (strength === 0) {
        strengthMessage.textContent = "";
        progress.style.background = "red";
    } else if (strength <= 2) {
        strengthMessage.textContent = "Weak";
        progress.style.background = "red";
    } else if (strength === 3) {
        strengthMessage.textContent = "Moderate";
        progress.style.background = "orange";
    } else if (strength >= 4) {
        strengthMessage.textContent = "Strong";
        progress.style.background = "green";
    }
}
