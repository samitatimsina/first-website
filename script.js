document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    console.log("script loaded");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.send("service_2r71evc", "template_47hqaue", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            alert("Failed to send message!");
            console.log(error);
        });
    });
});