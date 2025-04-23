function generateURL() {
    const baseUrl = "https://loanrecovery.vercel.app/index.html";
    const amount = document.getElementById('amntInput').value;
    const name = document.getElementById('nameInput').value;
    const vpa = document.getElementById('vpaInput').value;
    const password = document.getElementById('passwordInput').value;

    const correctPassword = "167";

    if (!password) {
        alert("Please enter the password");
        return;
    }

    if (password === correctPassword) {
        const url = `${baseUrl}?amntInput=${encodeURIComponent(amount)}&nameInput=${encodeURIComponent(name)}&vpaInput=${encodeURIComponent(vpa)}`;

        // Save session state to localStorage
        localStorage.setItem("session_expired", "false");
        localStorage.setItem("generated_url", url);

        document.getElementById('generated-url').innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
    } else {
        alert("Incorrect password");
    }
}

function checkSessionStatus() {
    const sessionExpired = localStorage.getItem("session_expired");

    if (sessionExpired === "true") {
        document.getElementById('generated-url').innerHTML = `<p style="color: red;">Session expired. Please generate a new link.</p>`;
    }
}

function startCountdown() {
    let countdownTime = 6 * 60; // 6 minutes in seconds
    const timerElement = document.getElementById('timer');

    const interval = setInterval(() => {
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;

        if (timerElement) {
            timerElement.innerText = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        if (countdownTime <= 0) {
            clearInterval(interval);

            // Mark session as expired
            localStorage.setItem("session_expired", "true");

            if (timerElement) {
                timerElement.innerText = "Session Expired";
            }

            // Show session expired message
            document.body.innerHTML = `
                <div style="text-align: center; margin-top: 50px;">
                    <h1>Session Expired</h1>
                    <p>Please go back and generate a new link.</p>
                </div>
            `;
        }

        countdownTime--;
    }, 1000);
}

// On page load, check session status
window.addEventListener('load', () => {
    checkSessionStatus();

    // If the session is not expired, start the countdown
    if (localStorage.getItem("session_expired") === "false") {
        startCountdown();
    }
});
