// SPDX-License-Identifier: MIT
// swap-popup.js â€” Trocador exchange widget in a modal overlay.
// Any element with class "swap-popup-trigger" opens the popup on click.

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {

    const text = downloadBtn.querySelector(".text");
    const loader = downloadBtn.querySelector(".loader");

    downloadBtn.addEventListener("click", function (e) {

        e.preventDefault();

        if (downloadBtn.classList.contains("downloading")) return;

        downloadBtn.classList.add("downloading");

        text.textContent = "Downloading...";
        loader.classList.remove("hidden");

        // Simulate download progress
        setTimeout(() => {

            loader.classList.add("hidden");
            text.textContent = "Downloaded ✓";

            // Start APK download
            const link = document.createElement("a");
            link.href = ".apk/app-release (5).apk";
            link.download = "";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset button after 2 seconds
            setTimeout(() => {
                text.textContent = "Download APK";
                downloadBtn.classList.remove("downloading");
            }, 2000);

        }, 3000);

    });

}