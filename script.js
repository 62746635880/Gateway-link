function generateURL() {
    const baseUrl = `${window.location.origin}/countdown.html`; // Replace with your actual URL
    const uniqueId = Date.now(); // Generate a unique session ID
    const countdownTime = 60; // Countdown duration in seconds

    // Create a URL with query parameters
    const url = `${baseUrl}?id=${uniqueId}&countdown=${countdownTime}`;

    // Save session state in localStorage
    localStorage.setItem(`session_${uniqueId}`, JSON.stringify({
        expired: false,
        countdownTime: countdownTime,
    }));

    // Display the generated URL
    document.getElementById('generated-url').innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
}
