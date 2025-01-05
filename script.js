function generateURL() {
    const baseUrl = "https://jsdevware.github.io/payment-gateway/index.html";
    const amount = document.getElementById('amntInput').value;
    const name = document.getElementById('nameInput').value;
    const vpa = document.getElementById('vpaInput').value;

    const url = `${baseUrl}?amntinput=${encodeURIComponent(amount)}&nameinput=${encodeURIComponent(name)}&vpainput=${encodeURIComponent(vpa)}`;

    document.getElementById('generated-url').innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
}
