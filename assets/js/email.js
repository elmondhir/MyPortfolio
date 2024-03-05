

function sendEmail() {
    emailjs.init("pqmb9-XuPo1jtylr0");
    emailjs.sendForm("service_zo4ceb2", "template_fy3p9ea", '#myForm')
    .then(function (response) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
    }, function (error) {
        console.log("Failed to send email:", error);
        alert("Failed to send email. Please try again later.");
    });
}