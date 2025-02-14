function generateURL() {
    const baseUrl = "https://loanrecovery.vercel.app/index.html";
    const amount = document.getElementById('amntInput').value;
    const name = document.getElementById('nameInput').value;
    const vpa = document.getElementById('vpaInput').value;
    const password = document.getElementById('passwordInput').value;

    const correctPassword = "DEVIL167";

    if (!password) {
        alert("Please enter the password");
        return;
    }

    if (password === correctPassword) {
        const url = `${baseUrl}?amntInput=${encodeURIComponent(amount)}&nameInput=${encodeURIComponent(name)}&vpaInput=${encodeURIComponent(vpa)}`;
        document.getElementById('generated-url').innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
    } else {
        alert("Incorrect password");
    }
}
