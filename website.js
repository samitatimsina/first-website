document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Target not found:", e.target.getAttribute("href"));
            }
        });
    });

    // Form validation
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!email || !message) {
                alert("Please fill in all fields!");
                event.preventDefault();
            }
        });
    } else {
        console.error("Contact form not found in the DOM.");
    }
});
