function generateURL() {
    const baseUrl = "https://62746635880.github.io/LOANRECOVERY/index.html";
    const amount = document.getElementById('amntInput').value;
    const name = document.getElementById('nameInput').value;
    const vpa = document.getElementById('vpaInput').value;

    const url = `${baseUrl}?amntInput=${encodeURIComponent(amount)}&nameInput=${encodeURIComponent(name)}&vpaInput=${encodeURIComponent(vpa)}`;

    document.getElementById('generated-url').innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
}
