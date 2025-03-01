// Function to calculate age
function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("result").innerText = "Please enter your date of birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();

    // Adjust if birth date hasn't occurred this year yet
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    document.getElementById("result").innerText = `Your predicted age is: ${age} years`;
}

// Dark/Light Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");

    // Save mode preference in localStorage
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Load theme preference on page load
window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        toggle.checked = true;
    }
};
