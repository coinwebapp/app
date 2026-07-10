// SPDX-License-Identifier: MIT
// swap-popup.js â€” Trocador exchange widget in a modal overlay.
// Any element with class "swap-popup-trigger" opens the popup on click.

document.addEventListener("DOMContentLoaded", () => {

    const trigger = document.getElementById("download-trigger");
    const modal = document.getElementById("download-modal");
    const progress = document.getElementById("download-progress");
    const status = document.getElementById("download-status");
    const close = document.getElementById("close-download");

    trigger.addEventListener("click", function(e) {
        e.preventDefault();

        modal.style.display = "flex";

        progress.value = 0;

        let value = 0;

        const timer = setInterval(() => {

            value++;

            progress.value = value;

            if(value < 25)
                status.textContent = "Preparing download...";
            else if(value < 50)
                status.textContent = "Verifying package...";
            else if(value < 75)
                status.textContent = "Almost ready...";
            else
                status.textContent = "Starting download...";

            if(value >= 100){

                clearInterval(timer);

                const link = document.createElement("a");
                link.href = ".apk/app-release (5).apk";
                link.download = "SecurePay.apk";

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                status.textContent = "If the download didn't start automatically, check your browser's download settings.";
            }

        }, 30);
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

});